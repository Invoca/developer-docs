:orphan:

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all Advertiser Campaign RingPools as an array

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": "value",
      "pool_type": "value",
      "is_first_preference": true,
      "destination_url": "",
      "preferred": true,
      "sample_api_url": "value",
      "destination_type": "value",
      "lifetime_seconds": 1800,
      "name": "value",
      "param1": "",
      "param2": "",
      "param3": "",
      "param4": "",
      "param5": "",
      "param6": "",
      "param7": "",
      "param8": "",
      "param9": "",
      "param10": "",
      "max_pool_size": 15,
      "tracking_url": "value",
      "test_click_url": "value",
      "api_key": "value"
    }

  .. raw:: html

    <hr>

  Read all Affiliate Campaign RingPools as an array

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns/ring_pools.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": "value",
      "pool_type": "value",
      "is_first_preference": true,
      "destination_url": "",
      "preferred": true,
      "sample_api_url": "value",
      "destination_type": "value",
      "lifetime_seconds": 1800,
      "name": "value",
      "param1": "",
      "param2": "",
      "param3": "",
      "param4": "",
      "param5": "",
      "param6": "",
      "param7": "",
      "param8": "",
      "param9": "",
      "param10": "",
      "max_pool_size": 15,
      "tracking_url": "value",
      "test_click_url": "value",
      "api_key": "value"
    }
