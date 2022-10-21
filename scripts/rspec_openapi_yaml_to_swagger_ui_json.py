# instructions:
#   cd path/to/developer-docs
#   python ./scripts/rspec_openapi_yaml_to_swagger_ui_json.py
#   bash html

import glob
from collections import OrderedDict

import os
import json
import re
import yaml
import ipdb


# https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal
class ConsolePrinter:
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
        return "{}{}{}".format(styles, text, cls.ENDC)

    @classmethod
    def print_warnings(cls, warning_message, offenses):
        print "{} {}".format(cls.format_text_string('WARNING', cls.WARNING), warning_message)
        if isinstance(offenses, dict):
            for offense_key, offense_list in offenses.items():
                print "  {}: {}".format(cls.format_text_string(offense_key, cls.OKCYAN),
                                        cls.format_text_string(', '.join(offense_list), cls.OKBLUE))
        else:
            print "  {}".format(cls.format_text_string(', '.join(offenses), cls.OKCYAN))

    @classmethod
    def print_success(cls, message):
        print "{} {}".format(cls.format_text_string('COMPLETE', cls.OKGREEN), message)


def main():
    def process_parameters():
        # warn if we find any filter/sort/pagination parameters, since they won't serve the documentation well at the
        # level of individual endpoints
        if current_path[verb].get('parameters') and \
                [item['name'] for item in current_path[verb]['parameters'] if
                 re.search(r'(\[\w+])', item['name']) or item['name'] in ['sort', 'page']]:
            warnings_filter_sort_page_parameters.append(summary)

        # path parameters should be defined once/uniquely across the api, then referenced at each dependent endpoint.
        # they should appear in the summary path with braces, e.g., /path/to/{my_uuid}/details
        for parameter in re.findall(r"\{(\w+)}", summary_path):

            # warn if we come across any that aren't already defined up top
            if parameter not in parameter_references + warnings_undefined_path_parameter:
                warnings_undefined_path_parameter.append(parameter)

            # add the reference to the shared parameter definition
            parameter_reference = "#/components/parameters/{}".format(parameter)
            if parameter_reference not in [pr.items()[0][1] for pr in current_path[verb].setdefault('parameters', [])]:
                current_path[verb]['parameters'].append({"$ref": parameter_reference})

    def print_warnings(message, offenses):
        ConsolePrinter.print_warnings(message, offenses)

    def print_success(message):
        ConsolePrinter.print_success(message)

    cwd = os.getcwd()
    path_to_subject_repo = '../sms-messaging'
    path_to_destination = './source/_static/js/swagger-ui/swagger-initializer.js'
    yaml_paths = glob.glob('{cwd}/{path}/.backstage/*.yaml'.format(cwd=cwd, path=path_to_subject_repo))
    print "Processing the following yaml_paths: {}".format(', '.join(yaml_paths))
    warnings_multiple_responses = {}
    warnings_undefined_path_parameter = []
    warnings_filter_sort_page_parameters = []
    warnings_missing_summary = []

    for yaml_path in yaml_paths:
        with open(yaml_path, 'r') as yaml_file:
            json_dict = yaml.load(yaml_file.read().rstrip(), Loader=yaml.FullLoader)
            parameter_references = json_dict.get('components', {}).get('parameters', {}).keys()

            for path in json_dict['paths'].keys():
                print "path: {}".format(path)
                current_path = json_dict['paths'].pop(path)

                for verb in current_path.keys():
                    print "verb: {}".format(verb)
                    try:
                        summary = current_path[verb]['summary']
                    except KeyError:
                        warnings_missing_summary.append("{} {}".format(verb, path))
                        continue

                    summary_path = summary.split(' ')[1]
                    if summary_path not in json_dict['paths']:
                        json_dict['paths'][summary_path] = current_path
                        process_parameters()

                    elif verb not in json_dict['paths'][summary_path]:
                        json_dict['paths'][summary_path][verb] = current_path[verb]
                        process_parameters()

                    else:
                        for k, v in current_path[verb]['responses'].items():
                            # add the first path + verb + status code we find
                            if k not in json_dict['paths'][summary_path][verb]['responses']:
                                json_dict['paths'][summary_path][verb]['responses'][k] = v

                            # otherwise warn if we have more than one unique example of that combination since we'll
                            # only show information for the first one processed
                            elif json_dict['paths'][summary_path][verb]['responses'][k] != v:
                                warnings_multiple_responses.setdefault(summary, []).append(k)

            # sort the paths
            json_dict['paths'] = OrderedDict(sorted(json_dict['paths'].items()))

            for path in json_dict['paths'].keys():
                # sort the verbs
                json_dict['paths'][path] = OrderedDict(sorted(json_dict['paths'][path].items()))

                # remove the verb and path that precede the summary, leaving only the humanized description of the endpoint
                for verb in json_dict['paths'][path].keys():
                    json_dict['paths'][path][verb]['summary'] = json_dict['paths'][path][verb]['summary'].split(' ', 2)[
                        -1]

            # print whatever warnings we've collected along the way, to guide the developer on any additional rspec moves
            # they may want to take to improve the documentation.  existence of a warning does not require action, only
            # consideration for *potential* improvement.
            if warnings_missing_summary:
                print_warnings("Routes were found without summary tags.  Please add a summary to the following routes:",
                               warnings_missing_summary)

            if warnings_multiple_responses:
                print_warnings("Multiple responses found for the same Route + Status Code, but only the first response"
                               " for each combination will be displayed.  Please add `openapi: false` to all but one of"
                               " those examples in order to control which response is provided in the documentation.",
                               warnings_multiple_responses)

            if warnings_undefined_path_parameter:
                print_warnings("Path parameters found without parameter definitions."
                               "  Please add definitions for the following parameters:",
                               warnings_undefined_path_parameter)

            if warnings_filter_sort_page_parameters:
                print_warnings("Filter/sort/pagination parameters found.  Please add `openapi: false` to those"
                               " examples, and choose/create an example without filter/sorting/pagination for the"
                               " documentation:",
                               warnings_filter_sort_page_parameters)

            # write the generated yaml to a file, to facilitate review of this intermediate form of the data to be
            # processed by the swagger-initializer.js
            with open('./prepped.yaml', 'w') as prepped_yaml_path:
                yaml.dump(json_dict, prepped_yaml_path)

            # write the json of the polished yaml to a file, to facilitate review of the json that will be provided to
            # swagger-initializer.js for processing
            json_path = os.path.splitext(yaml_path)[0] + '.json'
            with open(json_path, 'w') as json_file:
                json_file.write(json.dumps(json_dict))
            print_success("Output JSON written to {}".format(json_path))

            # we expect each API version will be generated as its own yaml and json.  for now, we only bother processing
            # in the case that we've got exactly one version of endpoints to document.  we'll support more when required.
            if len(yaml_paths) == 1:
                # Read in the file
                with open(path_to_destination, 'r') as destination_file:
                    filedata = destination_file.read()

                # Replace the target string
                filedata = re.sub(r'(\n\s+spec: ).*(,?)', '\\1' + json.dumps(json_dict) + '\\2', filedata)

                # Write the file out again
                with open(path_to_destination, 'w') as destination_file:
                    destination_file.write(filedata)


if __name__ == '__main__':
    main()
