

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an Advertiser Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers.json``

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
      "customer_data": {
        "channel": "Online lead"
      },
      "customer_data_dictionary": {
        "fields": [
          {
            "created_at": "2016-12-01 12:00:00 -0800",
            "friendly_name": "Channel",
            "partner_name": "channel",
            "field_values": [],
            "data_type": "category",
            "default_data_mapping": null
          }
        ]
      }
    }

  .. raw:: html

    <hr>

  Create an Advertiser Campaign Local Promo Number with tn_prefix

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers.json``

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
      "customer_data": {
        "channel": "Online lead"
      },
      "customer_data_dictionary": {
        "fields": [
          {
            "created_at": "2016-12-01 12:00:00 -0800",
            "friendly_name": "Channel",
            "partner_name": "channel",
            "field_values": [],
            "data_type": "category",
            "default_data_mapping": null
          }
        ]
      }
    }

  .. raw:: html

    <hr>

  Create an Advertiser Campaign Local Promo Number with city/state

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/promo_numbers.json``

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
      "customer_data": {
        "channel": "Online lead"
      },
      "customer_data_dictionary": {
        "fields": [
          {
            "created_at": "2016-12-01 12:00:00 -0800",
            "friendly_name": "Channel",
            "partner_name": "channel",
            "field_values": [],
            "data_type": "category",
            "default_data_mapping": null
          }
        ]
      }
    }

  .. raw:: html

    <hr>

  Create an Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers.json``

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
      "customer_data": {
        "channel": "Online lead"
      },
      "customer_data_dictionary": {
        "fields": [
          {
            "created_at": "2016-12-01 12:00:00 -0800",
            "friendly_name": "Channel",
            "partner_name": "channel",
            "field_values": [],
            "data_type": "category",
            "default_data_mapping": null
          }
        ]
      }
    }
