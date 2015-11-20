Manage API Credentials
======================

Invoca's self-serve API token access is OAuth-compliant. Accessing APIs using the API token enables customers to access and in some cases modify information through a third-party app or APIs without the risk of compromising security. It also ensures that secure, sensitive customer-related information is not exposed to the third-party app.

Currently, users can generate API credentials for the :doc:`Transactions API <transactions>` and :doc:`Network Integration API <network_integration/index>` (the Network Integration API is available to Network users only).


Create an API Token
-------------------

To create an API token:

1. From the Navigation Bar, hover on Integrations and select "Manage Integrations".
2. Click on Invoca APIs "Manage Settings".

   .. raw:: html

     <p style="overflow: hidden"><img src="https://invoca.uservoice.com/assets/82302226/2015-06-16_16-44-26.png" style="margin-left: -2px"></p>

3. On the Manage API Credentials page, click ﻿﻿"Create New API Token".
4. Enter Description and click Save.

Note: It is recommended to provide a description that identifies the API type and use.


Delete an API Token
-------------------

To delete or remove an API token from your platform:

1. From the Navigation Bar, hover on Integrations and select "Manage Integrations".
2. Click on Invoca APIs "Manage Settings".

   .. raw:: html

     <p style="overflow: hidden"><img src="https://invoca.uservoice.com/assets/82302226/2015-06-16_16-44-26.png" style="margin-left: -2px"></p>

3. On the Manage Credentials page, click the delete icon associated to the API token to delete.


API Guidelines
--------------

- Users should generate their own API tokens. Tokens should be treated like passwords and not be emailed or transmitted over other insecure mediums, nor should they be stored in a customer's source code repository.

- As a network user, you should not generate a token on behalf of Advertisers or Publishers as tokens inherit the privileges of the user generating it.

- Invoca does not use OAuth refresh tokens.
