.. container:: endpoint-long-description

  .. rubric:: Example

  Get calls in progress for the given transaction id `01FMTK644Z9D-3FPEY1REX8JSZB`.

  `current_calls` will be ordered by `transfer_start_time_utc`, most recent first.

  Endpoint:

  ``https://mynetwork.invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress/current_calls.json?oauth_token=wXB4Dpwtyvduy1HRKn-WfD5FSUh9P1hx&id=25&organization_type=network&transaction_id=01FMTK644Z9D-3FPEY1REX8JSZB``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_calls": [
        {
          "transaction_id": "01FMTK644Z9D-3FPEY1REX8JSZB",
          "call_status": "bridged",
          "external_unique_id": null,
          "calling_phone_number": "+15309999999",
          "destination_phone_number": "+18555595599",
          "call_start_time_utc": "2022-12-10T13:45:00.000Z",
          "transfer_start_time_utc": "2022-12-10T13:49:00.000Z",
          "custom_data": {}
        }
      ]
    }

  Response Code: 401

  Response Body:

  .. code-block:: json

    {"error": "NotAuthorized"}
