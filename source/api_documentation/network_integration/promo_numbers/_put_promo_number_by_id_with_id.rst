

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update an Advertiser Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id/4531.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1 Updated",
      "media_type": "Online: Display"
    }

  Response Code: 200

  Response Body:

  Same as a GET response, includes all the promo number properties.

  .. raw:: html

    <hr>

  Update Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers_by_id/4531.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1 Updated",
      "media_type": "Online: Display"
    }

  Response Code: 200

  Response Body:

  Same as a GET response, includes all the promo number properties.
