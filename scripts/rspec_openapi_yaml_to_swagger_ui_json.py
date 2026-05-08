"""Inject the sms-messaging OpenAPI spec into swagger-initializer.js for Sphinx.

All editorial work (path templating, parameter $refs, schema components,
summary cleanup, sort, byte-determinism) now lives in sms-messaging at
spec/support/openapi_post_processor.rb. This script is a thin publisher:
load the recorded YAML, JSON-encode it, and substitute the `spec:` block
in swagger-initializer.js so Sphinx (and ReadTheDocs) renders it via
SwaggerUI.

Usage:
    cd path/to/sms-messaging && bundle exec rake openapi
    cd path/to/developer-docs && python3 scripts/rspec_openapi_yaml_to_swagger_ui_json.py
    bash html
"""
import glob
import json
import re
import sys

import yaml

SOURCE_GLOB = '../sms-messaging/openapi/*.yaml'
DESTINATION = './source/_static/js/swagger-ui/swagger-initializer.js'
SPEC_LINE_PATTERN = re.compile(r'(\n\s+spec:\s*).*?(,?\n)', re.DOTALL)


def main():
    paths = sorted(glob.glob(SOURCE_GLOB))
    if len(paths) != 1:
        sys.exit(f"Expected exactly one spec at {SOURCE_GLOB}, found {len(paths)}: {paths}")
    with open(paths[0]) as f:
        spec = yaml.safe_load(f)
    with open(DESTINATION) as f:
        js = f.read()
    spec_json = json.dumps(spec, default=str)
    js, count = SPEC_LINE_PATTERN.subn(lambda m: f'{m.group(1)}{spec_json}{m.group(2)}', js, count=1)
    if count != 1:
        sys.exit(f"Could not locate `spec:` block in {DESTINATION}")
    with open(DESTINATION, 'w') as f:
        f.write(js)
    print(f"Updated {DESTINATION} with spec from {paths[0]}")


if __name__ == '__main__':
    main()
