"""Script to massage sms-messaging rspec-openapi output into json for swagger-ui."""
# instructions:
#   ### run the specs to generate the source yaml
#   > cd path/to/sms-messaging
#   > OPENAPI=1 bundle exec rspec spec/sms/routes/*_spec.rb
#
#   ### run the script to generate and insert the json from the yaml
#   > cd path/to/developer-docs
#   > python ./scripts/rspec_openapi_yaml_to_swagger_ui_json.py
#
#   ### execute the html generation script
#   > bash html

import glob
from collections import OrderedDict

import os
import json
import re
import yaml


# import ipdb


class ConsolePrinter(object):
    """Provides stylized printing to the console/terminal."""
    # https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

    def __init__(self):
        pass

    @classmethod
    def format_text_string(cls, text, styles):
        """Applies styling to text for display."""

        return "{style_start}{text}{style_end}".format(style_start=''.join(list(styles)), text=text, style_end=cls.ENDC)

    @classmethod
    def print_warning(cls, warning_message, offenses=None):
        """Prints a stylized 'warning' message.  Separate styles for lists vs dicts of offenses."""
        print "{label} {message}".format(label=cls.format_text_string('WARNING', cls.WARNING), message=warning_message)
        if offenses is None:
            return
        if isinstance(offenses, dict):
            for offense_key, offense_list in offenses.items():
                print "  {key}: {list}".format(key=cls.format_text_string(offense_key, cls.OKCYAN),
                                               list=cls.format_text_string(', '.join(offense_list),
                                                                           [cls.OKBLUE, cls.BOLD]))
        else:
            print "  {list}".format(list=cls.format_text_string(', '.join(offenses), cls.OKCYAN))

    @classmethod
    def print_success(cls, message):
        """Prints a stylized 'success' message.  Separate styles for lists vs dicts of offenses."""
        print "{label} {message}".format(label=cls.format_text_string('COMPLETE', cls.OKGREEN), message=message)

    @classmethod
    def print_failure(cls, message):
        """Prints a stylized 'success' message.  Separate styles for lists vs dicts of offenses."""
        print "{label} {message}".format(label=cls.format_text_string('ERROR', cls.FAIL), message=message)


def main():
    """Entry point to the entire yaml-to-json conversion"""

    def process_paths():
        """Process the rspec-openapi example routes for teh current yaml."""
        if 'paths' not in yaml_dict:
            print_failure("Did not find any paths in the yaml ... did you run rspec with OPENAPI=1?")
            exit()

        for path in yaml_dict['paths'].keys():
            current_path = yaml_dict['paths'].pop(path)
            print "  path: {path}, verbs: [{verbs}]".format(path=path, verbs=', '.join(current_path.keys()))

            for verb in current_path.keys():
                try:
                    summary = current_path[verb]['summary']
                except KeyError:
                    warnings['missing_summary'].append("{verb} {path}".format(verb=verb, path=path))
                    continue

                summary_path = summary.split(' ')[1]

                if summary_path not in yaml_dict['paths']:
                    yaml_dict['paths'][summary_path] = current_path

                elif verb not in yaml_dict['paths'][summary_path]:
                    yaml_dict['paths'][summary_path][verb] = current_path[verb]

                else:
                    for status_code, response_body in current_path[verb]['responses'].items():
                        # add the first path + verb + status code we find
                        if status_code not in yaml_dict['paths'][summary_path][verb]['responses']:
                            yaml_dict['paths'][summary_path][verb]['responses'][status_code] = response_body

                        # otherwise warn if we have more than one unique example of that combination since we'll only
                        # show information for the first one processed
                        elif yaml_dict['paths'][summary_path][verb]['responses'][status_code] != response_body:
                            warnings['multiple_responses'].setdefault(summary, []).append(status_code)

                process_parameters(current_path, verb)

        process_request_body_arrays()

    def process_request_body_arrays():
        """Adjusts a surprising way that openapi/swagger seem to describe request body json arrays"""
        for path in yaml_dict['paths']:
            try:
                request_body_json = yaml_dict['paths'][path]['post']['requestBody']['content']['application/json']
                request_body_json['schema']['type'] = 'array'
                request_body_json['schema'].pop('properties')
                if re.match(r"^\/delivery_reports$", path):
                    request_body_json['schema']['items'] = {"$ref": "#/components/schemas/DeliveryReportRequest"}
                elif re.match(r"^\/messages$", path):
                    request_body_json['schema']['items'] = {"$ref": "#/components/schemas/MessageRequest"}
            except KeyError:
                pass

            try:
                request_body_json = yaml_dict['paths'][path]['post']['requestBody']['content']['application/json']
                request_body_json['example'] = request_body_json['example'].pop('_json')
            except KeyError:
                pass

    def process_parameters(path, verb):
        """Processes the parameters found for an endpoint."""
        # warn if we find any filter/sort/pagination parameters, since they won't serve the documentation well at the
        # level of individual endpoints
        summary = path[verb]['summary']
        summary_path = summary.split(' ')[1]

        if path[verb].get('parameters') and \
                [item['name'] for item in path[verb]['parameters'] if
                 re.search(r'(\[\w+])', item['name']) or item['name'] in ['sort', 'page']]:
            warnings['filter_sort_page_parameters'].append(summary)

        # path parameters should be defined once/uniquely across the api, then referenced at each dependent endpoint.
        # they should appear in the summary path with braces, e.g., /path/to/{my_uuid}/details
        for parameter in re.findall(r"\{(\w+)}", summary_path):

            # warn if we come across any that aren't already defined up top
            if parameter not in parameter_references + warnings['undefined_path_parameter']:
                warnings['undefined_path_parameter'].append(parameter)

            # add the reference to the shared parameter definition
            parameter_reference = "#/components/parameters/{parameter}".format(parameter=parameter)
            if parameter_reference not in [pr.items()[0][1] for pr in
                                           path[verb].setdefault('parameters', [])]:
                path[verb]['parameters'].append({"$ref": parameter_reference})

    def print_processing_warnings():
        """Print processing warnings, with helpful instructions on how to potentially address."""
        # print whatever warnings we've collected along the way, to guide the developer on any additional rspec moves
        # they may want to take to improve the documentation.  existence of a warning does not require action, only
        # consideration for *potential* improvement.
        if warnings['missing_summary']:
            print_warning("Routes were found without summary tags.  Please add a summary to the following routes:",
                          warnings['missing_summary'])
        if warnings['multiple_responses']:
            print_warning("Multiple responses found for the same Route + Status Code, but only the first response for"
                          " each combination will be displayed.  Please add `openapi: false` to all but one of those"
                          " examples in order to control which response is provided in the documentation.",
                          warnings['multiple_responses'])
        if warnings['undefined_path_parameter']:
            print_warning("Path parameters found without parameter definitions.  Please add definitions for the"
                          " following parameters:",
                          warnings['undefined_path_parameter'])
        if warnings['filter_sort_page_parameters']:
            print_warning("Filter/sort/pagination parameters found.  Please add `openapi: false` to those examples,"
                          " and choose/create an example without filter/sorting/pagination for the documentation:",
                          warnings['filter_sort_page_parameters'])

    path_to_destination, yaml_paths = get_file_paths()
    print "Processing the following yaml_paths: {paths}".format(paths=', '.join(yaml_paths))

    warnings = {
        'multiple_responses': {},
        'undefined_path_parameter': [],
        'filter_sort_page_parameters': [],
        'missing_summary': []
    }

    for yaml_path in yaml_paths:
        with open(yaml_path, 'r') as yaml_file:
            yaml_str = yaml_file.read().rstrip()
            yaml_str = apply_openapi_template(yaml_path, yaml_str)
            yaml_dict = yaml.load(yaml_str, Loader=yaml.FullLoader)

            parameter_references = yaml_dict.get('components', {}).get('parameters', {}).keys()

            process_paths()

            reorder_yaml_dict(yaml_dict)

            print_processing_warnings()

            write_prepped_yaml_to_file(yaml_dict, yaml_path)

        write_json_string_to_swagger_initializer(yaml_dict, path_to_destination, yaml_paths)


def apply_openapi_template(yaml_path, yaml_str):
    """Replace undesirable interpretations from the openapi-rspec execution"""
    template_path = re.sub('.yaml', '-template.yaml', yaml_path)
    if os.path.exists(template_path):
        with open(template_path, 'r') as template_file:
            template_str = template_file.read().rstrip()
            yaml_str = re.sub(r".*\nopenapi:", "#{template_str}\nopenapi:".format(template_str=template_str),
                              yaml_str, flags=re.DOTALL)
    return yaml_str


def get_file_paths():
    """Get the paths to input and output files."""
    cwd = os.getcwd()
    path_to_subject_repo = '../sms-messaging'
    path_to_destination = './source/_static/js/swagger-ui/swagger-initializer.js'
    yaml_paths = glob.glob('{cwd}/{path}/.backstage/*.yaml'.format(cwd=cwd, path=path_to_subject_repo))
    yaml_paths = [path for path in yaml_paths if 'template' not in path]
    return path_to_destination, yaml_paths


def reorder_yaml_dict(yaml_dict):
    """Sort the json dictionary to the ordering desired for documentation."""
    # sort the paths
    yaml_dict['paths'] = OrderedDict(sorted(yaml_dict['paths'].items()))
    for path in yaml_dict['paths'].keys():
        # sort the verbs
        yaml_dict['paths'][path] = OrderedDict(sorted(yaml_dict['paths'][path].items()))

        # remove the verb and path from the summary, leaving only the humanized description of the endpoint
        for verb in yaml_dict['paths'][path].keys():
            summary_description = yaml_dict['paths'][path][verb]['summary'].split(' ', 2)[-1]
            yaml_dict['paths'][path][verb]['summary'] = summary_description


def print_warning(message, offenses=None):
    """Print warning string to the console."""
    ConsolePrinter.print_warning(message, offenses)


def print_success(message):
    """Print success string to the console."""
    ConsolePrinter.print_success(message)


def print_failure(message):
    """Print failure string to the console."""
    ConsolePrinter.print_failure(message)


def write_prepped_yaml_to_file(yaml_dict, yaml_path):
    """Write the prepared yaml content to an intermediate file, to facilitate review."""
    # write the generated yaml to a file, to facilitate review of this intermediate form of the data to be
    # processed by the swagger-initializer.js
    source_yaml_basename_split = os.path.splitext(os.path.basename(yaml_path))
    prepped_yaml_path = "{basename}-prepped-for-swagger-ui{extension}".format(basename=source_yaml_basename_split[0],
                                                                              extension=source_yaml_basename_split[1])
    with open(prepped_yaml_path, 'w') as prepped_yaml_file:
        yaml.dump(yaml_dict, prepped_yaml_file)
    print_success("Prepped yaml written to '{path}'".format(path=prepped_yaml_path))


def write_json_string_to_swagger_initializer(yaml_dict, path_to_destination, yaml_paths):
    """Write the yaml content to the swagger-ui initializer, for documentation generation."""
    # we expect each API version will be generated as its own yaml and json.  for now, we only bother processing in the
    # case that we've got exactly one version of endpoints to document.  we'll support more when required.
    if len(yaml_paths) == 1:
        # Read in the file
        with open(path_to_destination, 'r') as destination_file:
            file_data = destination_file.read()

        # Replace the target string
        file_data = re.sub(r'(\n\s+spec: ).*(,?)', '\\1' + json.dumps(yaml_dict, default=str) + '\\2', file_data)

        # Write the file out again
        with open(path_to_destination, 'w') as destination_file:
            destination_file.write(file_data)
    else:
        print_warning("Script does not currently support providing multiple yaml to swagger-ui.  Perhaps it's time to"
                      " implement that, or we've accidentally got more than one yaml in the source directory.")


if __name__ == '__main__':
    main()
