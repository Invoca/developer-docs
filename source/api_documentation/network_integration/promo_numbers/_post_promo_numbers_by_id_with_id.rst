

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an Advertiser Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id/<promo_number_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1",
      "media_type": "Online: Display"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "id": 12,
      "id_from_network": "12",
      "media_type": "Online: Display",
      "promo_number": "8777657743",
      "description": "Halloween Promo Number 1",
      "object_url": "https://invoca.net/a_campaigns/promo_numbers/12",
      "custom_data": {
        "channel": "Online lead"
      }
    }

  .. raw:: html

    <hr>

  Create an Advertiser Campaign Local Promo Number with tn_prefix

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id/<promo_number_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1",
      "media_type": "Online: Display",
      "local_center": {
        "tn_prefix": "805"
      },
      "tn_prefix_whitelist": ["805"]
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "id": 12,
      "id_from_network": "12",
      "media_type": "Online: Display",
      "promo_number": "8057657743",
      "description": "Halloween Promo Number 1",
      "object_url": "https://invoca.net/a_campaigns/promo_numbers/12",
      "custom_data": {
        "channel": "Online lead"
      }
    }

  .. raw:: html

    <hr>

  Create an Advertiser Campaign Local Promo Number with city/state

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id/<promo_number_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1",
      "media_type": "Online: Display",
      "local_center": {
        "city": "Santa Barbara",
        "state": "CA"
      }
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "id": 12,
      "id_from_network": "12",
      "media_type": "Online: Display",
      "promo_number": "8057657743",
      "description": "Halloween Promo Number 1",
      "object_url": "https://invoca.net/a_campaigns/promo_numbers/12",
      "custom_data": {
        "channel": "Online lead"
      }
    }

  .. raw:: html

    <hr>

  Create an Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers_by_id/<promo_number_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Halloween Promo Number 1",
      "media_type": "Online: Display"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "id": 12,
      "id_from_network": "12",
      "media_type": "Online: Display",
      "promo_number": "8777657743",
      "description": "Halloween Promo Number 1",
      "object_url": "https://invoca.net/p_campaigns/promo_numbers/14/11",
      "custom_data": {
        "channel": "Online lead"
      }
    }

  .. raw:: html

    <hr>

  Create a Google Call Extension Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers_by_id/<promo_number_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "description": "Google Call Extension Demo",
      "media_type": "Google Call Extension",
      "adwords_account_id": "7567575756755"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "id": 12,
      "id_from_network": "12",
      "media_type": "Google Call Extension",
      "promo_number": "8777657743",
      "description": "Google Call Extension Demo",
      "object_url": "https://invoca.net/a_campaigns/promo_numbers/12",
      "custom_data": {
        "channel": "Online lead"
      }
    }
