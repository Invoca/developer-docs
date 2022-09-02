.. container:: endpoint-long-description

  .. rubric:: Example

  Get all available calls in progress for a given organization

  Endpoint:

  ``https://mynetwork.invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress/current_calls.json?oauth_token=wXB4Dpwtyvduy1HRKn-WfD5FSUh9P1hx&id=25&organization_type=network``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "calls_in_progress": [
        {
          "transaction_id": "01FMTK644Z9D-3FPEY1REX8JSZB",
          "call_status": "bridged",
          "external_unique_id": null,
          "calling_phone_number": "+15309999999",
          "destination_phone_number": "+18555595599",
	      "call_start_time_utc": "2022-12-10T13:45:00.000Z",
          "transfer_start_time_utc": "2022-12-10T13:49:00.000Z"
        }
      ]
    }

  Response Code: 202

  Response Body:

  .. code-block:: json

    {
      "partial_data": true,
      "errors": [
        {"error": "CallsInProgressAPI::UnreachableRegion", "error_description": "Not all regions were able to be queried. calls_in_progress may be incomplete"}
      ],
      "calls_in_progress": [
        {
          "transaction_id": "01FMTK644Z9D-3FPEY1REX8JSZB",
          "call_status": "bridged",
          "external_unique_id": null,
          "calling_phone_number": "+15309999999",
          "destination_phone_number": "+18555595599",
	      "call_start_time_utc": "2022-12-10T13:45:00.000Z",
          "transfer_start_time_utc": "2022-12-10T13:49:00.000Z"
        }
      ]
    }