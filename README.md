# Invoca's API developer portal

## Getting Started
1. Clone this repo
2. Run the following commands:
```
sudo easy_install pip
sudo pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.pip
make html
```
3. Browse to the local html files in build/
4. To view the documentation, open the file in a browser:
`build/html/index.html`

## Making changes to an existing version:
1. Check out the branch for the version you want to edit
2. Edit one or more .rst files
3. Rebuild the docs with this command:
`make clean && make html`
4. Check your changes locally by opening `build/html/index.html`
5. Commit your changes and push to GitHub
6. ReadTheDocs will automatically pickup your changes and recompile the site
7. Visit http://developers.invoca.net to check your changes


## Making a new version:

1. Commit changes to master
2. Create new branch with the API version number: 2015-09-25
3. Login to ReadTheDocs.org (credentials in lastpass)
4. Navtigate [Admin > Versions](https://readthedocs.org/dashboard/invoca-developer-portal/versions)
5. Set your branch to Active
6. Set your version to Private
7. Save changes
8. Check the changes you made on the live site (they will only be visible to logged in users, or users who have the direct URL)
9. Return to the Admin > Version page
10. Set your version to Public
11. Save changes, the new version is now visible to all users

## Documentation Structure
* The home page of the site is source/index.rst
* The folders that do not start with underscore, currently api_documentation, basics and web_integration are the sub sections of the site. Those folders contain more sub sections.
* All files are ReStructuredText.

## Look & Feel 
* Most of the structure of the site is provided by the [ReadTheDocs Sphinx theme](https://github.com/snide/sphinx_rtd_theme)
* The style sheet that modifies the RTD theme is here `source/_static/css/custom.css`
* A JavaScript file that is included on every page is here: `source/_static/js/custom.js`
* The styling of the home page is "special" and is defined here `source/_static/css/homepage.css`. It was copy/pasted from the legacy API portal and could be massively slimmed down/replaced.
* Graphics can be found here: `source/_static`

## ReStructuredText reference

[general reference](http://rest-sphinx-memo.readthedocs.org/en/latest/ReST.html)

### Common Constructions:

* Building a collapsable api_endpoint div
```
.. api_endpoint::
  :path: /something/place
  :verb: GET
  :desc: some words and stuff
  :page: fake
```
* Building a table
```
.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - name
    - string
    - Campaign name.
```
* Adding a section header
```
My Heading
==========
```

:path:, :verb:, and :desc: are simply put into the 3 elements of the collapsible div.  The :page: however is the file (relative path no extension),
which content will be pulled from and inserted into the collapsed section.


## Differences between local and ReadTheDocs.org

The sites does not look exactly the same when built locally and on ReadTheDocs. You should always verify that your changes look correct on the live site, a local build is not sufficient for QA. Below is a list of known differences:

* The logo looks a little bit cutoff on local, this is because the location is different when on RTD
* The version menu in the lower left only exists when on RTD
* Many configuration flags in conf.py are ignored by RTD

There is a constant, `on_rtd`, in conf.py that can be used to alter the behavior of conf.py depending on build environment.

## FAQ
#### Q: I made my changes, but they don't appear on developer.invoca.net.
TBD

#### Q: I closed my terminal and now I can't build the docs anymore.
Reactivate your Python virtual environment by executing the commands below. (Python equivalent to rbenv)
```
virtualenv venv
source venv/bin/activate
make clean && make html
```

#### Q: I added/edited a table, but I don't see it in the built docs
RST does not generate error message for most table errors. Instead, it silently fails. Check your table syntax and try again.

