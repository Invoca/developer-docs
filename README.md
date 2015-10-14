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
The file tree structure starts with source/index.rst . The folders that do not start with underscore are the first branches from the index. All files are ReStructuredText. There is only one css sheet that we can edit at `source/_static/css/custom.css`

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

## ReStructuredText reference

[general reference](http://rest-sphinx-memo.readthedocs.org/en/latest/ReST.html)

Building a collapsable api_endpoint div


```
.. api_endpoint::

  :path: /something/place
  :verb: GET
  :desc: some words and stuff
  :page: fake
```

:path:, :verb:, and :desc: are simply put into the 3 elements of the collapsible div.  The :page: however is the file (relative path no extension),
which content will be pulled from and inserted into the collapsed section.


## Differences between local and readthedocs.org

The logo looks a little bit cutoff on the top on local, this is because the sizing is done for production

in conf.py there is a line `if not on_rtd` this basically makes the defaults that readthedocs forces to happen to happen locally.

Certain configuration flags are ignored in production be careful any setting you change in conf.py persists on RTD

Feel free to commit directly to master as this is a test project.
