

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an Advertiser Campaign RingPool

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "id_from_network": "12",
      "param1": "q",
      "param2": "test",
      "param3": "param3",
      "param4": "param4",
      "param5": "param5",
      "param6": "param6",
      "param7": "param7",
      "param8": "param8",
      "param9": "param9",
      "param10": "param10",
      "local_center": { "tn_prefix":"",
                        "zipcode": "90210",
                        "latitude": 30,
                        "longitude": -130 },
      "local_number_preferences": { "search_radius_miles": 20,
                                    "restrict_to_state": true,
                                    "allocation_fallback_strategy": "Wait" },
      "pool_type": "SearchKeyword",
      "preferred": true,
      "name": "Invoca Example RingPool",
      "destination_url": "https://www.invoca.com",
      "max_pool_size": 15,
      "tracking_url": "https://www.invoca.com",
      "destination_type": "Advertiser",
      "lifetime_seconds": 1800
    }

  Response Code: 201

  Response Body:

  Same as a GET response, includes all the RingPool properties.

  .. raw:: html
