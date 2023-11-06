

.. container:: endpoint-long-description

  Possible options that can be provided in the API request.

  .. list-table::
    :widths: 11 34 40
    :header-rows: 1
    :class: parameters

    * - Property
      - Type
      - Value

    * - limit
      - integer (optional) (Default 100)
      - Number of objects to be returned in a single request. If not provided, first 100 objects will be returned.

    * - start
      - integer (optional) (Default 0)
      - First `x` number of objects to skip in the response. If not provided, the response will start from the first available object.

    * - query
      - string (optional)
      - Search string to search by phone number.

        If not provided, all objects will be returned given no other filters are included.

    * - status
      - string (optional)
      - To filter results by a specific type.

        If not provided, all objects will be returned given no other filters are included.

        Possible values include:

        * **ignored**: Fetches only destinations that were ignored.
        * **tracked**: Fetches only destinations that have a ringpool associated with them.
        * **discovered**: Fetches only destinations that were neither ignored nor have a ringpool associated with them.

    * - sort_by
      - string (optional) (Default id)
      - Sort the result by a specific column.

    * - sort_dir
      - string (optional) (Default asc)
      - Sorting direction for the objects being returned. Possible values include `asc` and `desc`.

  .. rubric:: Examples

  Read all Destinations as an array.

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/customer_phone_numbers.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "data": [
        {
          "id": "value",
          "country_code": "1",
          "phone_number": "202-555-0001",
          "primary_url": "",
          "requested_destination_name": "",
          "acknowledged_at": null,
          "created_at": "2023-10-19 03:34:42 -0700",
          "updated_at": "2023-10-19 03:34:42 -0700",
          "advertiser_campaign": {
            "id_from_network": "83",
            "name": "My test campaign 1 - New York",
            "status": "Activated"
          },
          "dynamic_number_pool": {
            "id_from_network": "13",
            "name": "tag 1.83",
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
        },
        {
          "id": "value",
          "country_code": "1",
          "phone_number": "202-555-0002",
          "primary_url": "",
          "requested_destination_name": "",
          "acknowledged_at": null,
          "created_at": "2023-10-19 03:49:21 -0700",
          "updated_at": "2023-10-19 03:54:56 -0700",
          "advertiser_campaign": {
            "id_from_network": "87",
            "name": "Live campaign New Jersey",
            "status": "Activated"
          },
          "dynamic_number_pool": {
            "id_from_network": null,
            "name": null,
            "pool_type": null,
            "destination_type": null,
            "lifetime_seconds": null,
            "max_pool_size": null,
            "preferred": null,
            "is_first_preference": null,
            "use_custom_data": null
          },
          "ignored_at": null,
          "notified_at": null
        }
      ],
      "requestId": null,
      "recordsTotal": 2
    }

  .. raw:: html
