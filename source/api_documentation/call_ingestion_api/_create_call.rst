

.. container:: endpoint-long-description

  .. rubric:: Examples

  All of these examples use ``POST`` requests, but we will also accept ``PUT`` requests with the same request format.

  Example of creating a call with all required fields populated:

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

  .. raw:: html

    <hr>

  Example of creating a call with all available fields populated (including Signals and Custom Data):

  Endpoint:

  ``https://invoca.net/api/@@CALL_INGESTION_API_VERSION/calls.json``

  Request Body:

  .. code-block:: json

    {
      "call": {
        "external_call_unique_id": "123ABC",
        "start_time": "2016-08-08 11:03:31 -0700",
        "destination_phone_number": 9093900003,
        "calling_phone_number": 8779257383,
        "advertiser_campaign_id_from_network": 85,
        "call_direction": "inbound",
        "recording_url": "<CALL RECORDING URL>"
      },
      "signals": [
        {
          "name": "sale",
          "value": 1
        },
        {
          "name": "quote",
          "value": 1
        }
      ],
      "custom_data": [
        {
          "name": "channel",
          "value": "Paid Search"
        },
        {
          "name": "line_of_business",
          "value": "Social"
        }
      ],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "cuid": "<NEW_CUID>"
    }
