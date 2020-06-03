

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a RingPool

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools/<ring_pool_id_from_network>.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": "value",
      "id_from_network": "5432",
      "is_first_preference": true,
      "destination_url": "",
      "object_url": "https://invoca.net/a_campaigns/ring_pools/11",
      "preferred": true,
      "sample_api_url": "value",
      "destination_type": "value",
      "lifetime_seconds": 1800,
      "name": "value",
      "local_center": { "tn_prefix":"",
                        "zipcode": "90210",
                        "latitude": 30,
                        "longitude": -130 },
      "local_number_preferences": { "search_radius_miles": 20,
                                    "restrict_to_state": true,
                                    "allocation_fallback_strategy": "Wait" },
      "max_pool_size": 15,
      "tracking_url": "value",
      "test_click_url": "value",
      "api_key": "value"
    }

  .. raw:: html
