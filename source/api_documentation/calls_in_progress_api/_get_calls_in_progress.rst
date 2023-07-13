.. container:: endpoint-long-description

  .. rubric:: Example

  Get all available calls in progress for the specified organization.
  Be sure to include your API token (see :doc:`manage_api_credentials`) and use your own organization_type and id.

  Endpoint:

  ``https://invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress/current_calls.json?id=<organization_id>&organization_type=<organization_type>``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_calls": [
        {
          "transaction_id": "ABCD1234-ABCD1234",
          "call_status": "bridged",
          "external_unique_id": null,
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
        },
        {
          "transaction_id": "ABCD5678-ABCD5678",
          "call_status": "bridged",
          "external_unique_id": null,
          "calling_phone_number": "+15559998888",
          "destination_phone_number": "+18555595599",
          "called_phone_number": "+18557174046",
          "bridge_start_time": "2023-04-03T16:05:42-07:00",
          "call_record_id": "Z6E5-C7397356576G",
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
