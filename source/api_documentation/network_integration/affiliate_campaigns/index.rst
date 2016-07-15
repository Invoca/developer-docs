Affiliate Campaigns
===================

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

  * - id
    - integer (read-only)
    - The internal Invoca id of the affiliate campaign.

  * - id_from_network
    - string (read and write)
    - Network specific id of the affiliate campaign.

  * - max_promo_numbers
    - integer (read only)
    - Promo number limit.

  * - object_url
    - string (read-only)
    - URL for reaching the affiliate campaign in the UI.

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

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns.json``

.. api_endpoint::
   :verb: GET
   :path: /affiliate_campaigns
   :description: Get all Affiliate Campaigns
   :page: get_affiliate_affiliate_campaigns

.. api_endpoint::
   :verb: GET
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Get an Affiliate Campaign
   :page: get_affiliate_affiliate_campaign

.. api_endpoint::
   :verb: POST
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Create an Affiliate Campaign
   :page: post_affiliate_affiliate_campaigns

.. api_endpoint::
   :verb: PUT
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Update an Affiliate Campaign
   :page: put_affiliate_affiliate_campaign

.. api_endpoint::
   :verb: DELETE
   :path: /affiliates/&lt;affiliate_id&gt;/affiliate_campaigns
   :description: Delete an Affiliate Campaign
   :page: delete_affiliate_affiliate_campaign

