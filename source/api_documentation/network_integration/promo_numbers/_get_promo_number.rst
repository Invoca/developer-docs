:orphan:

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a specific Advertiser Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers/<promo_number>.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "media_type": "Online: Display",
      "description": "Halloween Promo Number 1",
      "promo_number": "8001234567"
    }

  .. raw:: html

    <hr>

  Read a specific Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers/<promo_number>.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "media_type": "Online: Display",
      "description": "Halloween Promo Number 1",
      "promo_number": "8001234567"
    }
