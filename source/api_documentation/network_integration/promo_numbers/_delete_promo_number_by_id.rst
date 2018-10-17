

.. container:: endpoint-long-description

  .. rubric:: Examples

  Delete an Advertiser Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "id_from_network": "1234"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
    }

  .. raw:: html

    <hr>

  Delete an Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers_by_id.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "id_from_network": "1234"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
    }
