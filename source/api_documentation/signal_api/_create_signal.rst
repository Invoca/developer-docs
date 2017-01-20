

.. container:: endpoint-long-description

  .. rubric:: Examples

  Example using **transaction_id** (of the call to associate the signal to) and providing all signal fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/signals.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time": "1440607313",
        "sale_amount": "100.00",
        "revenue": "100.00",
        "value": "true",
        "custom_parameter_1": "12345",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "signal": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "sale_amount": "100.0",
        "revenue": "100.0",
        "value": "true",
        "custom_parameter_1": "12345",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

  .. raw:: html

    <hr>


  Example using **call_start_time**, all optional search fields, and all signal fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/signals.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "call_start_time": "1440607313",
        "calling_phone_number": "1234567890",
        "duration_in_seconds": "60",
        "advertiser_id_from_network": "1",
        "advertiser_campaign_id_from_network": "2",
        "network_id": "3"
      },
      "signal": {
        "name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time": "1440607313",
        "sale_amount": "100.00",
        "revenue": "100.00",
        "value": "true"
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "signal": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "sale_amount": "100.0",
        "revenue": "100.0",
        "value": "true"
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }
