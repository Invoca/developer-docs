# Developer Portal

The [developer portal](http://developers.invoca.net) contains public documentation about our APIs. The documentation is hosted by [ReadTheDocs](http://readthedocs.com) (RTD). All the documentation is contained in this repo and is written in [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText) markup language, and built using the [Sphinx Document Generator](http://www.sphinx-doc.org/en/stable/index.html). If you need to make any changes to conf.py please review the [Sphinx Dev Guide](http://www.sphinx-doc.org/en/stable/devguide.html)

**IMPORTANT things to note:**

1. Changes made to this repo are AUTOMATICALLY picked up by RTD and published to the site.
2. The method of adding comments to API controllers is officially deprecated.
3. General branching stratagy: Always branch off of the most recent live branch. The most recent live branch is subject to change at any time so be sure you're up to date and resolve any conflicts. If you are contributing to a new overall version (e.g. 2029-09-16) but do not own that branch, be sure to communicate with the owner about individual API versions.
4. A branch on git maps to a "version" on read-the-docs. To create a new version (branch) and have it displayed as default,
 you must go into read the docs admin and point "default" to the new branch. At that point, 
 the old default will become a legacy version that is still supported, so **do not** delete any old branches of the form YYYY-MM-DD.
5. There is no master branch for this repo. If you are making a new version, you are responsible for setting the default branch of this repo to point to your new branch (version) in git, as well as **change the version** to which "latest" points in the RTD admin interface (https://readthedocs.com/dashboard/invoca-developer-docs/advanced/). "Default Version" and "Default Branch (latest) should **always** be set to the new version (note, RTD has a bug where after you set "Default Branch" to your new version, if you reload the page the dropdown value will show "latest" -- that is fine). Finally, you **MUST** update doc_versions.py to reflect the new changes of your new version. If the date of your new version is greater than any other version, it now becomes `COMMON_VERSION` as well as `@@<your_version_bump>_VERSION`.
6. Be cautious of errors you see when building. The line number on some error messages is misleading. In particular, directives not followed by 2 new lines may cause silent or misleading errors. Some warnings are meaningless, while not recommended you can dig into the Sphinx source and suppress them. 
7. Any major changes must be reviewed by MikeW, NickB or your manager.
8. If you have added documentation to the latest version but also need to add it retroactively to past versions, be mindful of things like recently renamed files that might not be totally obvious in pull requests / cherry-picks.

## Getting Started
1. Clone this repo
2. Run the following commands:
```
# Install python version 3.8.18 with pyenv
brew install pyenv
pyenv install 3.8.18
pyenv global 3.8.18
PATH=$(pyenv root)/shims:$PATH

# Activate virtual env
sudo pip3 install virtualenv
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt

# Build documentation
bash html

```
3. Browse to the local html files in build/
4. To view the documentation, open the file in a browser:
`build/html/index.html`

## Making changes to an existing version and making them public:
1. Check out the branch for the version you want to edit
2. Edit one or more .rst files
3. Rebuild the docs with this command:
`bash html`
4. Check your changes locally by opening `build/html/index.html`
5. Commit your changes and push to GitHub (Only members of the Developer Docs Administrators group can push to a publically version of the docs.)
6. ReadTheDocs will automatically pickup your changes and recompile the site. (Check build status at https://readthedocs.com/projects/invoca-developer-docs/builds/)
7. Visit https://developers.invoca.net to check your changes

## Making changes to an existing version and keeping them private:
1. Create a new branch off of the version branch you want to edit, name it however you want
2. Edit one or more .rst files
3. Rebuild the docs with this command:
`bash html`
4. Check your changes locally by opening `build/html/index.html`
5. Commit your changes and push to GitHub
6. ReadTheDocs will automatically pickup your changes and recompile the site. (Check build status at https://readthedocs.com/projects/invoca-developer-docs/builds/)
7. Login to ReadTheDocs.com (credentials in lastpass)
8. Click on the Versions button and then the Edit button next to your branch
9. Click on the Active checkbox and set the Privacy Level to Private
10. Visit https://developers.invoca.net
11. Click on the "latest" link in the lower left, your new branch should appear in the list of version
12. Click on your branch name to view and you should be able to check the changes you made
13. Once you decide to make your changes public, merge your branch into an existing version branch, then delete your branch. (Only members of the Developer Docs Administrators group can push to a publically version of the docs.)
14. ReadTheDocs will automatically pickup your changes and recompile the site. (Check build status at https://readthedocs.com/projects/invoca-developer-docs/builds/)

## Making a new version:
1. Checkout the most recent branch (default) and branch off of it. E.g. Default is: 2015-12-10, branch off this, you want to bump Network integration to 2016-01-01, so name your new branch '2016-01-01')
`git checkout -b 2016-01-01 2015-12-10`
2. Make your changes, commit, and push (**DO NOT FORGET TO UPDATE doc_versions.py to reflect your new version. If your new version is the highest date of any other version, your version is now the "Overall Version" that is automatically displayed in the RTD menu**)
3. Login to ReadTheDocs.com (credentials in lastpass)
4. Navigate [Admin > Versions](https://readthedocs.com/projects/invoca-developer-docs/versions/)
5. Set your branch to Active in the Admin settings (This will trigger a build)
6. Set your version to Private
7. Click "Submit" to save changes
8. Build your project by going to the [Project Overview](https://readthedocs.com/projects/invoca-developer-docs/), selecting your branch (version)from the "Build a version" dropdown, and click "Build." 
You will then be taken to the [Builds page] (https://readthedocs.com/projects/invoca-developer-docs/builds/). Check the status of your build. It should go from "Triggered > Building > Installing > Passed" if all goes well.
9. Check the changes you made on the [live site](https://developers.invoca.net) (they will only be visible to logged in users so far). Navigate to your new version using the menu in the bottom left.
10. Return to the [Admin > Versions](https://readthedocs.com/projects/invoca-developer-docs/versions/)
11. Find your version in the list (e.g. 2016-01-01), set it Public.
12. Go to [Admin > Advanced Settings](https://readthedocs.com/dashboard/invoca-developer-docs/advanced/), and set the Default Version **and** the Default Branch to your new version (e.g. 2016-01-01)
13. Save changes, the new version is now default and visible to all users, the previous version is also maintained and can be accessed from the menu at the bottom left of the read-the-docs page.
14. Back in github, set the default branch of this repo (developer-docs) to your new branch. 
15. Limit pushing to the branch to members of the Developer Docs Administrators group in [Settings > Branches](https://github.com/Invoca/developer-docs/settings/branches)

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

[General reStructuredText Reference](https://rest-sphinx-memo.readthedocs.io/en/latest/ReST.html)

### Common Constructions:

* Building a collapsable api_endpoint div (T)
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
One of the harder parts of getting read the docs to work. Beware of white space 
and trailing new lines. A home-made directive like shown below *must* have 
two new lines after it (with comments counting as well). 
This directive will render the example template file shown above.
If a directive is last on the page, it must too have 2 newlines to work. Your 
build will succeed locally but fail on RTDs due to an "unkonwn error" that is unhelpful.
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

## Differences between local and ReadTheDocs.com

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
bash html
```

#### Q: I added/edited a table, but I don't see it in the built docs
RST does not generate error message for most table errors. Instead, it silently fails. 
If you've seen this error a million times, maybe try a git bisect / cherry pick method
to hone in on the syntax (more than likely table indentation or lack of 2 new lines after a directive)

#### Q: The build is hanging and never completing
RST makes links that look like this `` `click here <https://example.com>`_ `` so if you put in a link like this `` `https://invoca.net/api/@@PNAPI_VERSION/calls/<converstion_reporting_id>.xml` `` It kind of freaks out and never finishes building.
If you have a backtick block with a `<something` in the link you should encase it in double backticks.

