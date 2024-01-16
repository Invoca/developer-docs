

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create a RingPool

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "id_from_network": "12",
      "local_center": { "tn_prefix":"",
                        "zipcode": "90210",
                        "latitude": 30,
                        "longitude": -130 },
      "local_number_preferences": { "search_radius_miles": 20,
                                    "restrict_to_state": true,
                                    "allocation_fallback_strategy": "Wait" },
      "preferred": true,
      "name": "Invoca Example RingPool",
      "max_pool_size": 15,
      "lifetime_seconds": 1800,
      "destination_phone_number": "888-111-2222",
      "allow_overflow": true
    }

  Response Code: 201

  Response Body:

  Same as a GET response, includes all the RingPool properties.

