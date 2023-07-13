.. container:: endpoint-long-description

  .. rubric:: Example

  Update the value of a custom data field for the call whose external unique ID is `mycalls00001`.

  **Note:** You will not see the new custom data field value in the response or in subsequent queries using this API.

  This example uses ``PUT`` requests, but we will also accept ``POST`` requests with the same request format (JSON).
  Be sure to include your API token (see :doc:`manage_api_credentials`) and use your own organization_type and id.

  Endpoint:

  ``https://invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress.json?id=<organization_id>&organization_type=<organization_type>&external_unique_id=mycalls00001``

  Parameters:
  `external_unique_id` is required for this request

  Request Body:

  .. code-block:: json

    {
      "call_in_progress": {
        "custom_data": [
            {"name": "<custom_data_field_name>", "value": "<desired_value>"}
        ]
      }
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_calls": [
        {
          "transaction_id": "ABCD1234-ABCD1234",
          "call_status": "bridged",
          "external_unique_id": "mycalls00001",
          "calling_phone_number": "+15559999999",
          "destination_phone_number": "+18555595599",
          "called_phone_number": "+18557174046",
          "bridge_start_time": "2023-04-03T16:02:36-07:00",
          "call_record_id": "Z6E5-C7397356976E",
          "phone_type": "Mobile",
          "custom_data": {
                "utm_source": {
                    "value": "google.com",
                    "source": "VirtualLine"
                },
                "demographics_data": {}
            }
        }
      ]
    }
