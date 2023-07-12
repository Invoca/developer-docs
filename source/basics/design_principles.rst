Design Principles
=================

REST
----


All interfaces use REST_. This makes them easy to predict as they use HTTP and its existing
verbs to Create, Read, Update, and Delete objects. Any language that supports HTTP can
access these interfaces. Create and Update are idempotent operations.

.. _REST: http://en.wikipedia.org/wiki/REST

.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Action
    - HTTP Verb
    - Notes

  * - Create
    - POST
    - Object is created. If it already exists, it is updated.

  * - Read
    - GET
    - Object is read.

  * - Update
    - PUT
    - Object is created. If it already exists, it is updated.

  * - Delete
    - DELETE
    - Object is deleted. If the object has already been deleted, does nothing.


Status Codes
------------

HTTP Status codes are used to indicate success or failure. The set of status codes returned
by the Network Integration API are:

.. list-table::
  :widths: 11 40
  :header-rows: 1
  :class: parameters

  * - Status Code
    - Meaning

  * - 200, 201
    - Success

  * - 401
    - Failure. Access is not authorized.

  * - 403
    - Failure. Request arguments are invalid.

  * - 404
    - Failure. The resource was not found.

  * - 500
    - Failure. Internal Service Error.

\* See the section on Error Handling for greater detail on response bodies for failure codes.


Security
--------

HTTPS is required for all API requests.

Authentication is performed using one of several approaches.

The preferred approach is to use Invoca API tokens, which are created and managed on the Manage API Credentials page of the platform.

Some API endpoints will accept HTTP(S) Basic Authentication, which authenticates using a username and password in the request header.

Additionally, session login authentication is sufficient as an alternative. This is so that you can
test an API URL simply by logging in to the platform first as a Network Role of ‘Super’ (full access user) and then pasting the URL into the browser.

Using OAuth token to Access Invoca APIs
---------------------------------------

By default, requests are authenticated using an Invoca API Token, which can be created and managed on the "Integrations" \> "Invoca API Credentials" page in the platform.


Step by step guide using API token to access APIs
*************************************************

1. Obtain an OAuth 2.0 token from the Manage API Credentials.

2. Send the access token to an API.


You can send the access token in a variety of ways:

* **Recommended**: As an Authorization header of your request, of format `"Authorization: <token>"`
* As a URL string parameter (for GET requests), of format `?oauth_token=<token>`
* As a key/value pair in the JSON body (for POST requests of type JSON), of format `{ "oauth_token": "<token>", ... }`

Example using Curl to make an API call with token-based authentication:

.. code-block:: bash

  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU" 'https://\<vanity\>.invoca.net/api/@@NETWORK_API_VERSION/advertisers/1111.json'

**Guidelines**
* Users should generate their own API tokens. Tokens should be treated like passwords and not be emailed or transmitted over other insecure mediums, nor should they be stored in a source code repository.
* As a network user, you should not generate a token on behalf of Advertisers or Publishers because tokens inherit the privileges of the user generating it.
* Invoca does not use OAuth refresh tokens.



Idempotency
-----------


Most interfaces are designed to be idempotent, meaning that it is harmless to call them
more than once with the same parameters. Subsequent calls to an interface have no side effects,
and return the same result.

Self‐Correction
---------------

Most updates expect a complete copy of the object, making Update and Create
interchangeable. This means that errors tend to be corrected over time. Campaign Terms
are an exception to this due to their complexity (see Advertiser Campaigns for more).

Versioning
----------

The API version is given as a date in the path.

Dedicated Subdomain
-------------------

All APIs are accessed through the dedicated subdomain of invoca.net that is used for the
network. For example, a network named "LeadTrust" might be assigned
leadtrust.invoca.net. We recommend that, when making your API calls, you place your
<network_id> after the API version in the url.

Request Parameter Format & Response Body Format
-----------------------------------------------

Previous versions of the API accepted form‐encoded style parameters in the request and used
XML as the output format. As of @@NETWORK_API_VERSION, all new feature development has switched to
JSON format for both request and response. Previous XML functionality will continue to be
supported via the 2013‐03‐22 version of the API (please contact
questions@invoca.com for more information on previous versions).
