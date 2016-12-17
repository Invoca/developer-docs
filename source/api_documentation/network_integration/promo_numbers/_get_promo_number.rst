

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
      "id": 21,
      "id_from_network": "4531",
      "media_type": "Online: Display",
      "description": "Halloween Promo Number 1",
      "promo_number": "8001234567",
      "object_url": "https://invoca.net/a_campaigns/promo_numbers/11",
      "custom_data": {
        "channel": "Online lead"
      },
      "custom_data_dictionary": {
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

  Read a specific Affiliate Campaign Promo Number

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/promo_numbers/<promo_number>.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": 21,
      "id_from_network": "4531",
      "media_type": "Online: Display",
      "description": "Halloween Promo Number 1",
      "promo_number": "8001234567",
      "object_url": "https://invoca.net/p_campaigns/promo_numbers/14/11",
      "custom_data": {
        "channel": "Online lead"
      },
      "custom_data_dictionary": {
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
