

.. container:: endpoint-long-description

  .. rubric:: Example

  This example uses ``PUT`` requests, but we will also accept ``POST`` requests with the same request format (JSON).

  Example of updating a call's Custom Data:

  Endpoint:

  ``https://mynetwork.invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress.json?oauth_token=wXB4Dpwtyvduy1HRKn-WfD5FSUh9P1hx&id=25&organization_type=network&transaction_id=01FMTK644Z9D-3FPEY1REX8JSZB``

  Parameters:
  `transaction_id` OR `external_unique_id` is required for this request

  Request Body:

  .. code-block:: json

    {
      "call_in_progress": {
        "custom_data": [
            {"name": "Call Disposition", "value": "CUSTOMER_HANGUP"}
        ]
      }
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_call": {
        "transaction_id": "01FMTK644Z9D-3FPEY1REX8JSZB",
        "external_unique_id": "0ea32dd2-fed2-43fb-be8e-e56674c33900",
        "calling_phone_number": "+15309999999",
        "destination_phone_number": "+18555595599",
        "call_start_time_utc": "2022-12-10T13:45:00.000Z",
        "transfer_start_time_utc": "2022-12-10T13:49:00.000Z",
        "call_status": "bridged",
        "custom_data": [
            {"source": "CallsInProgressAPI", "name": "Call Disposition", "value": "CUSTOMER_HANGUP", "data_type": "Short Text"}
        ]
      }
    }
