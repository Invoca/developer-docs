# Developer Portal
The [developer portal](http://developers.invoca.net) contains public documentation about our APIs. The documentation is hosted by [ReadTheDocs](http://readthedocs.org) (RTD). All the documentation is contained in this repo and is written in [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText) markup language.

IMPORTANT things to note:

1. Changes made to this repo are AUTOMATICALLY picked up by RTD and published to the site.
2. You should no longer update the documentation that is present in the API controllers. This documentation will be removed shortly.
3. A branch on git maps to a "version" on read-the-docs. To create a new version (branch) and have it displayed as default, you must go into read the docs admin and point "default" to the new branch. At that point, the old default will become an older version, so **do not** delete old branches of the form YYYY-MM-DD.
4. The master branch is not necessarily the most current, but try to keep it current by creating a pull request for any changes you make and merging them into master. If you are making a new version **do not** delete your branch after merging into master.

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

## Making changes to an existing version and making them public:
1. Check out the branch for the version you want to edit
2. Edit one or more .rst files
3. Rebuild the docs with this command:
`make clean && make html`
4. Check your changes locally by opening `build/html/index.html`
5. Commit your changes and push to GitHub
6. ReadTheDocs will automatically pickup your changes and recompile the site
7. Visit http://developers.invoca.net to check your changes

## Making changes to an existing version and keeping them private:
1. Create a new branch off of the version branch you want to edit, name it however you want
2. Edit one or more .rst files
3. Rebuild the docs with this command:
`make clean && make html`
4. Check your changes locally by opening `build/html/index.html`
5. Commit your changes and push to GitHub
6. ReadTheDocs will automatically pickup your changes and recompile the site
7. Login to ReadTheDocs.org (credentials in lastpass)
8. Click on the Versions button and then the Edit button next to your branch
9. Click on the Active checkbox and set the Privacy Level to Private
10. Visit http://developers.invoca.net
11. Click on the "latest" link in the lower left, your new branch should appear in the list of version
12. Click on your branch name to view and you should be able to check the changes you made
13. Once you decide to make your changes public, merge your branch into an existing version branch, then delete your branch
14. ReadTheDocs will automatically pickup your changes and recompile the site

## Making a new version:
1. Checkout the most recent branch (default) and branch off of it. E.g. Default is: 2015-12-10, branch off this, you want to bump Network integration to 2016-01-20, so name your new branch '2016-01-01')
`git checkout -b 2016-01-01 2015-12-10`
2. Make your changes, commit, and push
3. Login to ReadTheDocs.org (credentials in lastpass)
4. Navtigate [Admin > Versions](https://readthedocs.org/dashboard/invoca-developer-docs/versions/)
5. Set your branch to Active
6. Set your version to Private
7. Click "Submit" to save changes
8. Build your project by going to the [Project Overview](https://readthedocs.org/projects/invoca-developer-docs/), selecting your branch (version) from the "Build a version" dropdown, and click "Build." 
You will then be taken to the [Builds page] (https://readthedocs.org/projects/invoca-developer-docs/builds/). Check the status of your build. It should go from "Triggered > Building > Installing > Passed" if all goes well. 
9. Check the changes you made on the [live site](developers.invoca.net) (they will only be visible to logged in users so far). Navigate to your new version using the menu in the bottom left. 
10. Return to the [Admin > Versions](https://readthedocs.org/dashboard/invoca-developer-docs/versions/)
11. Find your version in the list (e.g. 2016-01-01), set it Public.
12. At the top of the list set the default version to your new version (e.g. 2016-01-01)
13. Save changes, the new version is now default and visible to all users, the previous version is also maintained.
14. In order to keep the master branch up to date, merge your branch into master once you are complete but **do not** delete your branch as it will disappear from read the docs.

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

