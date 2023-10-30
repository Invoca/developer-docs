

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a Destination

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/customer_phone_numbers/<customer_phone_number_id>.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": "value",
      "country_code": "1",
      "phone_number": "202-555-0001",
      "primary_url": "",
      "requested_destination_name": "",
      "acknowledged_at": null,
      "created_at": "2023-10-19 03:49:21 -0700",
      "updated_at": "2023-10-19 03:54:56 -0700",
      "advertiser_campaign": {
          "id_from_network": "87",
          "name": "test-campaign Arizona",
          "status": "Activated"
      },
      "dynamic_number_pool": {
        "id_from_network": "13",
        "name": "tag 12.83",
        "pool_type": "Custom",
        "destination_type": "Advertiser",
        "lifetime_seconds": 300,
        "max_pool_size": 2,
        "preferred": false,
        "is_first_preference": true,
        "use_custom_data": true
      },
      "ignored_at": null,
      "notified_at": null
    }

  .. raw:: html
