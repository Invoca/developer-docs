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
7. Visit developer.invoca.net to check your changes


## Making a new version:

1. Commit changes to master
2. Create new branch with the API version number: 2015-09-25
3. Login to ReadTheDocs.org (credentials in lastpass)
4. Navtigate Admin > Versions (https://readthedocs.org/dashboard/invoca-developer-portal/versions)
5. Set your branch to Active
6. Set your version to Private
7. Save changes
8. Check the changes you made on the live site (they will only be visible to logged in users, or users who have the direct URL)
9. Return to the Admin > Version page
10. Set your version to Public
11. Save changes, the new version is now visible to all users

## Code organization
The file tree structure starts with source/index.rst . The folders that do not start with underscore are the first branches from the index. All files are ReStructuredText. There is only one css sheet that we can edit at `source/_static/css/custom.css`

## FAQ
### Q: I made my changes, but they don't appear on developer.invoca.net.
TBD

### Q: I closed my terminal and now I can't build the docs anymore.
Reactivate your Python virtual environment by executing the commands below. (Python equivalent to rbenv)
```
virtualenv venv
source venv/bin/activate
make clean && make html
```
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
