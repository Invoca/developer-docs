PPC Platform Authentication Access Tokens
=========================================

The PPC Platform provides an interface to get a one‐time use access token authenticating a
Network, Advertiser, or Affiliate user. The access token must then be appended to a PPC
Platform destination URL.

The network authenticates an organization by doing the following:

1. Authenticates the user on the network Platform.
2. Makes a server‐to‐server request for a one‐time use access token.
3. Appends the returned access token to the PPC Platform destination URL `access_token=<ProvidedAccessToken>`
4. Redirects to the PPC Platform destination URL.

The format of the API URL is in (2):

`https://invoca.net/api/2014-­01-­01/<network_id>/network/<email>/create_access_token.json`

`https://invoca.net/api/2014­-01-­01/<network_id>/advertisers/<advertiser_id_from_network>/<email>/create_access_token.json`

`https://invoca.net/api/2014­-01-­01/<network_id>/affiliates/<affiliate_id_from_network>/<email>/create_access_token.json`

The success response is an JSON document with a root element of Response that contains a
single AccessToken element whose content is the access token:

.. list-table::
  :widths: 30 20
  :header-rows: 1
  :class: parameters

  * - Response JSON Element
    - Value

  * - AccessToken
    - The access token


Example URLs

Create access token for “sy@young.com” network user:

POST

`https://invoca.net/api/2014­-01-­01/<network_id>/network/sy%40young.com/create_access_token.json HTTP/1.1`

Response:

.. code-block:: json

  {
    "token": "bpD8HmLcCxzSiOX01v­4XbZr4_s",
    "id": 1
  }

Create access token for “sy@young.com” user in advertiser id 354:

POST

`https://invoca.net/api/2014­-01-­01/<network_id>/advertisers/354/sy%40young.com/create_access_token.json HTTP/1.1`

Response:

.. code-block:: json

  {
    "token": "bpD8HmLcCxzSiOX01v­4XbZr4_s",
    "id": 1
  }

Create access token for "sy@young.com" user in affiliate id 976:

POST

`https://invoca.net/api/2014­-01-­01/<network_id>/affiliates/976/sy%40young.com/create_access_token.json HTTP/1.1`

Response:

.. code-block:: json

  {
    "token": "bpD8HmLcCxzSiOX01v­4XbZr4_s",
    "id": 1
  }

On-The-Fly Authentication
-------------------------


The PPC Platform supports "On-The-Fly Authentication": if a user types in a URL, or clicks
on a link in an email, or chooses a bookmarked link and they are not currently logged in
("authenticated"), they must first log in and then are redirected to their original destination
URL.

When using the API, all authentication is by the network on behalf of the replicated users.
So in this case the PPC Platform redirects to a network authentication URL such as
http://www.network.com/loginwith with the following query parameters:

.. list-table::
  :widths: 10 40
  :header-rows: 1
  :class: parameters

  * - Query Parameter
    - Description

  * - destination
    - The ultimate PPC Platform destination URL to redirect to once authentication has been established.

  * - type
    - Either advertiseror affiliate, or empty if unknown.


For example:

`http://www.network.com/login?destination=http%3A%2F%2Finvoca.net%2Faffiliates%2F1&type=advertiser`

The network authenticates the user either by using existing session credentials or by
prompting for login credentials. It generates an access token using a server‐to‐server
POST:

POST

`https://invoca.net/api/2014­-01-­01/<network_id>/advertisers/354/sy%40young.com/create_access_token.json`

The returned value is an access token, for example 9AC23B903F4. The network then
appends this token to the destination URL and redirects there:

`http://invoca.net/affiliates/1?access_token=9AC23B903F4`


Network Link to PPC
-------------------
-------------------


The network platform offers a Marketing Automation hyperlink in the authenticated area
for Advertisers and Affiliates. The link uses the same landing page as On-The-Fly
authentication does to seamlessly log the user into the Invoca Marketing Automation
Platform:

`http://www.network.com/login?destination=http%3A%2F%2F<network>.invoca.net%2Fhome`


PPC Link to Network
-------------------
-------------------


The PPC platform offers a “Return from marketing automation” link that returns to an
appropriate URL at the network. This URL must be provided by the network. For
example:

http://www.network.com/home

CURL examples:
--------------
--------------


Here are some basic examples on how to use the API using CURL.

Create

`curl -v ­XPOST -H "Content­Type: application/json" -u '<username>:<password>’ 'https://www.invoca.net/api/2014­-01-­01/<network_id>/<url>' -d '<valid JSON>’`

Read

`curl -v -u '<username>:<password> 'https://www.invoca.net/api/2014­-01­-01/<network_id>/<url>'`

Update

`curl­ -v -XPUT -H "Content­Type: application/json" -u '<username>:<password> 'https://www.invoca.net/api/2014­-01-­01/<network_id>/<url>' -d '<valid JSON>’`

Delete

`curl -v -XDELETE -H "Content­Type: application/json" -u '<username>:<password> 'https://www.invoca.net/api/2014­-01­-01/<network_id>/<url>' -d '<valid JSON>’`
