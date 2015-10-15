Affiliate Campaigns
===================
----

Affiliate Campaign status can be replicated using this API. You are not allowed to delete affiliate campaigns.

Relationship properties are shown below

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - affiliate_id_from_network
    - string (read only)
    - Network specific id of the affiliate.

  * - status
    - string (read and write)
    - One of: Applied, Approved, Suspended, Declined.

  * - affiliate_campaign_id_from_network
    - string (read and write)
    - Network specific id of the affiliate campaign.

  * - max_promo_numbers
    - integer (read only)
    - Promo number limit.

  * - current_terms
    - (read only)
    - 

  * - **advertiser_payin**
    - 
    - 

  * - max
    - decimal
    - Maximum payin amount (base + bonuses).

  * - min
    - decimal
    - Minimum payin amount (base).

  * - pricing
    - string
    - Human‐friendly representation of the payin pricing (eg. “$5.07 per call”).

  * - currency
    - string
    - USD, GBP, EUR.

  * - range
    - string
    - Formatted string including min and max payin values.

  * - **policies**
    - 
    - 

  * - amount
    - decimal
    - Payin policy amount.

  * - currency
    - string
    - USD, GBP, EUR.

  * - type
    - string
    - Base, Bonus.

  * - condition
    - string
    - Condition options used to determine the base or bonus payout (eg. “duration >= 1 min 30 sec”).

  * - pricing_type
    - string
    - Fixed, OverallMargin, IndividualMargin.

  * - ivr_tree
    - hash
    - Interactive Voice Response tree.

  * - **affiliate_payout**
    - 
    - 

  * - max
    - decimal
    - Maximum payout amount (base + bonuses).

  * - min
    - decimal
    - Minimum payout amount (base).

  * - pricing
    - string
    - Human‐friendly representation of the payout pricing (eg. “$5.07 per call”).

  * - currency
    - string
    - USD, GBP, EUR.

  * - range
    - string
    - Formatted string including min and max payin values policies.

  * - **policies**
    - 
    - 

  * - amount
    - decimal
    - Payout policy amount.

  * - currency
    - string
    - USD, GBP, EUR.

  * - type
    - string
    - Base, Bonus.

  * - condition
    - string
    - Condition options used to determine the base or bonus payout (eg. “duration >= 1 min 30 sec”).


Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/<affiliate_campaign_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Get all Affiliate Campaigns
   :page: empty

GET all Affiliate Campaigns
---------------------------

GET `/affiliates/<affiliate_id>/affiliate_campaigns`


Examples
""""""""
----

Get all Affiliate Campaigns

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates.json`

.. api_endpoint::
   :verb: GET
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Get an Affiliate Campaign
   :page: empty

GET an Affiliate Campaign
-------------------------

GET `/affiliates/<affiliate_id>/affiliate_campaigns`


Examples
""""""""
----

GET of Affiliate Campaign status for Advertiser 354 Campaign 12 to Affiliate 976

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json`

Format: application/json

Response Body:

.. code-block:: json

  {
    "max_promo_numbers": 10,
    "current_terms": {
      "advertiser_payin": {
        "max": 3.5,
        "min": 3.5,
        "pricing": "$3.50 per call",
        "currency": "USD",
        "range": "$3.50 per call",
        "policies": [
          {
            "amount": 3.5,
            "currency": "USD",
            "type": "Base",
            "condition": ""
          }
        ]
      },
      "pricing_type": "Fixed",
      "ivr_tree": {
        "root": {
          "children": [
            {
              "destination_country_code": "",
              "destination_phone_number": "",
              "node_type": "Connect",
              "prompt": ""
            },
            {
              "destination_country_code": "",
              "destination_phone_number": "",
              "node_type": "Connect",
              "prompt": ""
            }
          ],
          "node_type": "Menu",
          "prompt": "Press one for transfer to a normal campaign (scottad pro 0903), press two for normal campaign (scott ad pro 3122), press three for transfer to a syndicated campaign!"
        },
        "record_calls": false
      },
      "affiliate_payout": {
        "max": 3.5,
        "min": 3.5,
        "pricing": "$3.50 per call",
        "currency": "USD",
        "range": "$3.50 per call",
        "policies": [
          {
            "amount": 3.5,
            "currency": "USD",
            "type": "Base",
            "condition": ""
          }
        ]
      }
    },
    "status": "Approved_NotActive",
    "affiliate_campaign_id_from_network": "11",
    "affiliate_id_from_network": "976"
  }

.. api_endpoint::
   :verb: POST
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Create an Affiliate Campaign
   :page: empty

Create an Affiliate Campaign (POST)
-----------------------------------

POST `/affiliates/<affiliate_id>/affiliate_campaigns`


Examples
""""""""
----

Create Affiliate Campaign with status for Advertiser 354 Campaign 12 to Affiliate 975

Please note - The Network Integration API only provides the ability to create an affiliate campaign with status “Applied”. If the Advertiser Campaign is set to “Approve All”, the campaign will automatically transition to “Approved”.

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/975/affiliate_campaigns.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "status": "Applied",
    "affiliate_campaign_id_from_network": "2234"
  }

----

Not Found - 404

Endpoint:
`https://invoca.net/api/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/13/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "status": "Approved"
  }

Response Code: 403

Response Body:

.. code-block:: json

  {
    "errors": {
      "status": [
        "cannot transition from 'Approved'"
      ]
    },
    "status": "Applied"
  }

.. api_endpoint::
   :verb: PUT
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Update an Affiliate Campaign
   :page: empty

Update an Affiliate Campaign (PUT)
----------------------------------

PUT `/affiliates/<affiliate_id>/affiliate_campaigns`


Examples
""""""""
----

Update Affiliate Campaign status for Advertiser 354 Campaign 12 to Affiliate 976

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "status": "Approved"
  }

.. api_endpoint::
   :verb: DELETE
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Delete an Affiliate Campaign
   :page: empty

DELETE An Affiliate Campaign
----------------------------

DELETE `/affiliates/<affiliate_id>/affiliate_campaigns`

Examples
""""""""
----

You are not allowed to delete an Affiliate Campaign.

