# Developer Portal
The [developer portal](http://developers.invoca.net) contains public documentation about our APIs. The documentation is hosted by [ReadTheDocs](http://readthedocs.org) (RTD). All the documentation is contained in this repo and is written in [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText) markup language. Changes made to this repo are AUTOMATICALLY picked up by RTD and published to the site.

## Getting Started with Github Desktop
Things you will need:
1. github desktop https://desktop.github.com/
2. textwrangler http://www.barebones.com/products/textwrangler/download.html

Setup:
1. setup github desktop with your github login credentials
2. click "Clone in Desktop" on the right of this page

Work flow:
1. create a new branch in github desktop
2. edit the file you wish to change (probably something like developer-docs/source/some_file.rst)
3. save file
4. verify changes in github desktop
5. make a commit including a brief description of the change
6. click sync/publish in the top right of github desktop to push changes
7. after push this page should prompt you to create a pull request, do that
8. go to readthedocs.org login with credentials in lastpass
9. once logged in and in developer-docs project go to admin > versions and click the active box on your branch and set it to "private"
10. click builds and wait for your changes to be built
11. Click view docs, then click on bottom left tab to select your branch
12. verify changes and get a review of pull request
13. if you need to make more changes you can edit files and save them
14. make another commit with message and sync changes
15. wait for build and go back to 12

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

## Private Documentation
The "private" documentation in RTD is not actually protected by a login. When a version is set to private, it can be viewed by anyone who was the link.

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

## reStructuredText reference

[General reStructuredText Reference](http://rest-sphinx-memo.readthedocs.org/en/latest/ReST.html)

### Common Constructions:

* Building a collapsable api_endpoint div (The newline after args is NEEDED)
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

## Custom Templates
reStructuredText does not support any templating, so we added our own.

### How to Add a Template
1. Create your template at a ".txt" file in the custom_templates folder.
2. Add a call to find_and_replace_templates to the source_handler method in conf.py.
3. Call your template using a directive in an rst file.

### Limitations
* The templates can contain rst content, but should NOT contain an rst extension, otherwise they will be visible on the live site.
* Templates cannot contain other templates.
* Templates can contain substitution variables that will be replaced when the template is instantiated.
* Substitution values CAN contain other rst directives
* Substitution values are limited to a single line of text
* Syntatic errors in the template directive will likely lead to a silent faliure and the raw directive will be shown in the docs

### Example
#### Template
This template is in a file called "example.txt"
```
.. raw:: html

  <div class="sample">This is my amazing :value:</div>
```

#### conf.py Change
```
def source_handler(app, docname, source):
  find_and_replace_templates(app, source, "example_directive", "example.txt")
```

#### Directive
This directive will render the example template file shown above.
```
Here is the rendered template:

.. example_directive::
  :value: this has been substituted
```

#### Output
This is the output that would be generated:
```
<p>Here is the rendered template:</p>

<div class="sample">This is my amazing this has been substituted</div>
```

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

#### Q: The build is hanging and never completing
RST makes links that look like this `` `click here <https://example.com>`_ `` so if you put in a link like this `` `https://invoca.net/api/@@PNAPI_VERSION/calls/<converstion_reporting_id>.xml` `` It kind of freaks out and never finishes building.
If you have a backtick block with a `<soomething` in the link you should encase it in double backticks.

