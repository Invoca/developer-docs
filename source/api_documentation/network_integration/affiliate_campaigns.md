Affiliate Campaigns
===================

* * *

Affiliate Campaign status can be replicated using this API. You are not allowed to delete affiliate campaigns.

Relationship properties are shown below
<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>affiliate_id_from_network</td><td>string (read only)</td><td>Network specific id of the affiliate.</td></tr>
  <tr><td>status</td><td>string (read and write)</td><td>One of: Applied, Approved, Suspended, Declined.</td></tr>
  <tr><td>affiliate_campaign_id_from_network</td><td>string (read and write)</td><td>Network specific id of the affiliate campaign.</td></tr>
  <tr><td>max_promo_numbers</td><td>integer (read only)</td><td>Promo number limit.</td></tr>
  <tr><td>current_terms</td><td>(read only)</td><td></td></tr>
  <tr><td><b>advertiser_payin</b></td><td></td><td></td></tr>
  <tr><td>max</td><td>decimal</td><td>Maximum payin amount (base + bonuses).</td></tr>
  <tr><td>min</td><td>decimal</td><td>Minimum payin amount (base).</td></tr>
  <tr><td>pricing</td><td>string</td><td>Human‐friendly representation of the payin pricing (eg. “$5.07 per call”).</td></tr>
  <tr><td>currency</td><td>string</td><td>USD, GBP, EUR.</td></tr>
  <tr><td>range</td><td>string</td><td>Formatted string including min and max payin values.</td></tr>
  <tr><td><b>policies</b></td><td></td><td></td></tr>
  <tr><td>amount</td><td>decimal</td><td>Payin policy amount.</td></tr>
  <tr><td>currency</td><td>string</td><td>USD, GBP, EUR.</td></tr>
  <tr><td>type</td><td>string</td><td>Base, Bonus.</td></tr>
  <tr><td>condition</td><td>string</td><td>Condition options used to determine the base or bonus payout (eg. “duration >= 1 min 30 sec”).</td></tr>
  <tr><td>pricing_type</td><td>string</td><td>Fixed, OverallMargin, IndividualMargin.</td></tr>
  <tr><td>ivr_tree</td><td>hash</td><td>Interactive Voice Response tree.</td></tr>
  <tr><td><b>affiliate_payout</b></td><td></td><td></td></tr>
  <tr><td>max</td><td>decimal</td><td>Maximum payout amount (base + bonuses).</td></tr>
  <tr><td>min</td><td>decimal</td><td>Minimum payout amount (base).</td></tr>
  <tr><td>pricing</td><td>string</td><td>Human‐friendly representation of the payout pricing (eg. “$5.07 per call”).</td></tr>
  <tr><td>currency</td><td>string</td><td>USD, GBP, EUR.</td></tr>
  <tr><td>range</td><td>string</td><td>Formatted string including min and max payin values policies.</td></tr>
  <tr><td><b>policies</b></td><td></td><td></td></tr>
  <tr><td>amount</td><td>decimal</td><td>Payout policy amount.</td></tr>
  <tr><td>currency</td><td>string</td><td>USD, GBP, EUR.</td></tr>
  <tr><td>type</td><td>string</td><td>Base, Bonus.</td></tr>
  <tr><td>condition</td><td>string</td><td>Condition options used to determine the base or bonus payout (eg. “duration >= 1 min 30 sec”).</td></tr>
</table>


Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/<affiliate_campaign_id_from_network>.json`

## GET all Affiliate Campaigns
GET `/affiliates/<affiliate_id>/affiliate_campaigns`


### Examples
<hr>

Get all Affiliate Campaigns

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates.json`


## GET an Affiliate Campaign
GET `/affiliates/<affiliate_id>/affiliate_campaigns`


### Examples
<hr>


GET of Affiliate Campaign status for Advertiser 354 Campaign 12 to Affiliate 976

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json`

Format: application/json

Response Body:
<pre><code>{
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
}</pre></code>


## Create an Affiliate Campaign (POST)
POST `/affiliates/<affiliate_id>/affiliate_campaigns`


### Examples
<hr>

Create Affiliate Campaign with status for Advertiser 354 Campaign 12 to Affiliate 975

Please note - The Network Integration API only provides the ability to create an affiliate campaign with status “Applied”. If the Advertiser Campaign is set to “Approve All”, the campaign will automatically transition to “Approved”.

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/975/affiliate_campaigns.json`

Format: application/json

Request Body:
<pre><code>{
  "status": "Applied",
  "affiliate_campaign_id_from_network": "2234"
}</pre></code>

<hr>

Not Found - 404

Endpoint:
`https://invoca.net/api/api/@version/<network_id>/advertisers/354/advertiser_campaigns/13/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:
<pre><code>{
  "status": "Approved"
}</pre></code>

Response Code: 403

Response Body:
<pre><code>{
  "errors": {
    "status": [
      "cannot transition from 'Approved'"
    ]
  },
  "status": "Applied"
}</pre></code>


## Update an Affiliate Campaign (PUT)
PUT `/affiliates/<affiliate_id>/affiliate_campaigns`


### Examples
<hr>

Update Affiliate Campaign status for Advertiser 354 Campaign 12 to Affiliate 976

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:
<pre><code>{
  "status": "Approved"
}</pre></code>


## DELETE An Affiliate Campaign
DELETE `/affiliates/<affiliate_id>/affiliate_campaigns`

### Examples
<hr>

You are not allowed to delete an Affiliate Campaign.

