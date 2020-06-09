

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update a RingPool

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools/<ring_pool_id_from_network>.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "id_from_network": "12",
      "preferred": true,
      "name": "Invoca Example RingPool Updated",
      "destination_url": "https://www.invoca.com",
      "max_pool_size": 15,
      "lifetime_seconds": 1800
    }

  Response Code: 200

  Response Body:

  Same as a GET response, includes all the RingPool properties.

  .. raw:: html
