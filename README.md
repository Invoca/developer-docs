# Invoca's API developer portal

## Getting started:
1. Clone the developer-docs repo
2. `sudo easy_install pip`
3. `sudo pip install virtualenv`
4. `virtualenv venv`
5. `source venv/bin/activate`
6. `pip install -r requirements.pip `
7. `make html`

Then you can browse to the local html files in build/
To view the documentation, open the file in a browser:
`developer-docs/build/html/index.html`

## Making changes to the documentation:
Code organization
The file tree structure starts with source/index.rst . The folders that do not start with underscore are the first branches from the index. Almost everything is in markdown. There is only one css sheet that we can edit at `source/_static/css/custom.css`

build any new changes with:
`make clean && make html`

If you closed your terminal session, you will have to re-run:
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.pip 
make clean && make html
```

After building your changes, view them locally by opening the file in a browser, e.g.
`developer-docs/build/html/index.html`

Feel free to commit directly to master as this is a test project.
