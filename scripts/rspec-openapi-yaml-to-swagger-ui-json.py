# cd path/to/developer-docs
# python ./scripts/rspec-openapi-yaml-to-swagger-ui-json.py
# bash html

import glob
import yaml
import os
import json
import re
import ipdb


# https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


cwd = os.getcwd()
path_to_subject_repo = '../sms-messaging'
path_to_destination = './source/_static/js/swagger-ui/swagger-initializer.js'
yaml_paths = glob.glob('{cwd}/{path}/.backstage/*.yaml'.format(cwd=cwd, path=path_to_subject_repo))
print(yaml_paths)
warnings_multiple_responses = {}
warnings_undefined_path_parameter = []
warnings_filter_sort_page_parameters = []
for yaml_path in yaml_paths:
    with open(yaml_path, 'r') as yaml_file:
        json_dict = yaml.load(yaml_file.read().rstrip(), Loader=yaml.FullLoader)
        json_path = os.path.splitext(yaml_path)[0] + '.json'
        json_dict_sorted_by_summary = sorted(json_dict['paths'].items(),
                                             key=lambda item: item[1].values()[0]['summary'].split(' ')[1])
        parameter_references = json_dict.get('components', {}).get('parameters', {}).keys()

        for path in json_dict['paths'].keys():
            for verb in json_dict['paths'][path].keys():
                summary = json_dict['paths'][path][verb]['summary']
                summary_path = summary.split(' ')[1]
                current_path = json_dict['paths'].pop(path)
                if summary_path not in json_dict['paths'].keys():
                    # ipdb.set_trace()
                    if 'parameters' not in current_path[verb]:
                        current_path[verb]['parameters'] = []
                    else:
                        if [item['name'] for item in current_path[verb]['parameters'] if
                            re.search(r'(\[\w+\])', item['name']) or item['name'] in ['sort', 'page']]:
                            warnings_filter_sort_page_parameters.append(summary)

                    for parameter in re.findall(r"\{(\w+)\}", summary_path):
                        if parameter not in parameter_references + warnings_undefined_path_parameter:
                            warnings_undefined_path_parameter.append(parameter)
                        parameter_reference = "#/components/parameters/{}".format(parameter)
                        # ipdb.set_trace()
                        if parameter_reference not in [pr.items()[0][1] for pr in current_path[verb]['parameters']]:
                            current_path[verb]['parameters'].append({"$ref": parameter_reference})

                    json_dict['paths'][summary_path] = current_path
                elif verb not in json_dict['paths'][summary_path].keys():
                    json_dict['paths'][summary_path][verb] = current_path[verb]
                else:
                    # ipdb.set_trace()
                    key_collisions = json_dict['paths'][summary_path][verb]['responses'].viewkeys() & \
                                     current_path[verb]['responses'].viewkeys()
                    if key_collisions:
                        if summary not in warnings_multiple_responses.keys():
                            warnings_multiple_responses[summary] = []
                        warnings_multiple_responses[summary] += key_collisions
                        # print("{}WARNING:{} multiple responses of {} on summary = {}.".format(bcolors.WARNING, bcolors.ENDC, key_collisions, summary))
                    json_dict['paths'][summary_path][verb]['responses'].update(
                        current_path[verb]['responses']
                    )

        if warnings_multiple_responses:
            print(
                "{}WARNING:{} Multiple responses found for the same Route + Status Code, but only the last response for each combination will be displayed.\n  Please add `openapi: false` to all but one of those examples in order to control which response is provided to the documentation.".format(
                    bcolors.WARNING, bcolors.ENDC))
            for summary, key_collisions in warnings_multiple_responses.items():
                print("  {}: {}".format(bcolors.OKCYAN + summary + bcolors.ENDC,
                                        bcolors.OKBLUE + ', '.join(key_collisions) + bcolors.ENDC))

        if warnings_undefined_path_parameter:
            print(
                "{}WARNING:{} Path parameters found without parameter definitions.\n  Please add definitions for the following parameters:".format(
                    bcolors.WARNING, bcolors.ENDC))
            print("  {}".format(bcolors.OKCYAN + ', '.join(warnings_undefined_path_parameter) + bcolors.ENDC))

        if warnings_filter_sort_page_parameters:
            print(
                "{}WARNING:{} Filter/sort/pagination parameters found.  Please add `openapi: false` to those examples, and choose/create an example without filter/sorting/pagination for the documentation:".format(
                    bcolors.WARNING, bcolors.ENDC))
            print("  {}".format(bcolors.OKCYAN + '\n  '.join(warnings_filter_sort_page_parameters) + bcolors.ENDC))

        print ("{}COMPLETE:{} Output JSON written to {}".format(bcolors.OKGREEN, bcolors.ENDC, json_path))

        with open('./prepped.yaml', 'w') as prepped_yaml_path:
            documents = yaml.dump(json_dict, prepped_yaml_path)

        with open(json_path, 'w') as json_file:
            json_file.write(json.dumps(json_dict))

        if len(yaml_paths) == 1:
            # Read in the file
            with open(path_to_destination, 'r') as destination_file:
                filedata = destination_file.read()

            # Replace the target string
            filedata = re.sub(r'(\n\s+spec: ).*(,?)', '\\1' + json.dumps(json_dict) + '\\2', filedata)

            # Write the file out again
            with open(path_to_destination, 'w') as destination_file:
                destination_file.write(filedata)
