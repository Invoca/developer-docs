Manage API Credentials
======================

Invoca provides the ability for users to self-generate API access tokens for the Transactions API and the Network Integration
API (the Network Integration API is available to Network super users only).


### Create An API Token
<hr>

To create an API token:

1. From any page, choose the Tools gear, ﻿API Credentials.

   * <img src="https://invoca.uservoice.com/assets/74025540/gear-icon.png" class="info-img" />

2. On the Manage Credentials page, click ﻿﻿"Create New API Token".
3. Enter a description and click Save.

Note: It is recommended to provide a description that identifies the intended API type and usage for this token.


### Delete an API Token
<hr>

To delete or remove an API token from your organization:

1.   From any page, choose the Tools gear, ﻿API Credentials.
     * <img src="https://invoca.uservoice.com/assets/74025540/gear-icon.png" class="info-img" />
     
2.   On the Manage Credentials page, click the delete icon associated with the API token to delete it.


### API Guidelines
<hr>

* Users should generate their own API tokens. Tokens should be treated like passwords and not be emailed or transmitted over other insecure mediums, nor should they be stored in a source code repository.

* As a network user, you should not generate a token on behalf of Advertisers or Publishers, as tokens inherit the privileges of the user generating it.

* These access tokens are Oauth compliant.

* Invoca does not use OAuth refresh tokens.
