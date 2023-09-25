Manage API Credentials
======================

Invoca's self-serve API token access is OAuth-compliant. Accessing APIs using the API token enables customers to access and in some cases modify information through a third-party app or APIs without the risk of compromising security. It also ensures that secure, sensitive customer-related information is not exposed to the third-party app.


Create an API Token
-------------------

To create an API token:

1. From the Main Navigation select 'Integrations' on the left-side panel, and then choose 'Manage Integrations'.

   .. image:: ../_static/manage_api_credentials.png
      :scale: 90%

2. Once you're on the 'Integrations' page, locate and click on the 'Invoca APIs' app.

   .. image:: ../_static/invoca_api_app.png
      :scale: 70%

3. Go to the upper-right corner and click on the '+ New API Credential' option.

4. Enter the Description and click Save.

Please note that it is strongly recommended to include a descriptive label that identifies the API type and its intended use.


Using API Tokens to Access Invoca APIs
---------------------------------------

You can send the access token in a variety of ways:

* **Recommended**: As an Authorization header of your request, of format `"Authorization: <token>"`
* As a URL string parameter (for GET requests), of format `?oauth_token=<token>`
* As a key/value pair in the JSON body (for POST requests of type JSON), of format `{ "oauth_token": "<token>", ... }`

Example using Curl to make an API call with token-based authentication:

.. code-block:: bash

  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU" 'https://\<vanity\>.invoca.net/api/@@NETWORK_API_VERSION/advertisers/1111.json'


API Guidelines
**************

- Users should generate their own API tokens. Tokens should be treated like passwords and not be emailed or transmitted over other insecure mediums, nor should they be stored in a customer's source code repository.

- As a network user, you should not generate a token on behalf of Advertisers or Publishers as tokens inherit the privileges of the user generating it.

- Invoca does not use OAuth refresh tokens.
