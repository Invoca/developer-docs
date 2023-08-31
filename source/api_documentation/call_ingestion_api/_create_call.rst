

.. container:: endpoint-long-description

  .. rubric:: Examples

  Endpoint:

  ``https://invoca.net/api/@@CALL_INGESTION_API_VERSION/calls.json``

  Request Body:

  .. code-block:: json

    {
      "call": {
        "external_call_unique_id": "100002",
        "start_time": "2016-02-03 09:30:00 AM",
        "destination_phone_number": 2165388265,
        "calling_phone_number": 8779257383,
        "advertiser_campaign_id_from_network": 85,
        "call_direction": "inbound",
        "recording_url": "<CALL RECORDING URL>"
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "cuid": "<NEW_CUID>"
    }
