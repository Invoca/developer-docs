

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all RingPools as an array.

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    [
      {
        "id": "value",
        "id_from_network": "5432",
        "object_url": "https://invoca.net/a_campaigns/ring_pools/11",
        "preferred": true,
        "lifetime_seconds": 1800,
        "name": "value",
        "local_center": { "tn_prefix":"",
                          "zipcode": "90210",
                          "latitude": 30,
                          "longitude": -130 },
        "local_number_preferences": { "search_radius_miles": 20,
                                      "restrict_search_to_state": true,
                                      "allocation_fallback_strategy": "Wait" },
        "max_pool_size": 15,
        "api_key": "value",
        "fill_immediately": false,
        "allow_overflow": true,
        "customer_phone_numbers": [
          {
            "destination_phone_number": "8005551216",
            "js_tag": {
              "obfuscated_tag_id": "0054811245"
            }
          }
        ],
        "default_customer_phone_number": {
          "destination_phone_number": "8005551216",
          "js_tag": {
            "obfuscated_tag_id": "0054811245"
          }
        }
      }
    ]
