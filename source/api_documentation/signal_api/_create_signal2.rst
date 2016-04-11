.. container:: endpoint-long-description

  .. rubric:: Examples

  Example using **transaction_id** (of the call to associate the signal to) and providing all signal fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/00000000-00000001/signals.json``

  Request Body:

  .. code-block:: json

    {
      "signal": {
        "name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "sale_amount": "100.00",
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
        "sale_amount": "100.0",
        "value": "true",
        "custom_parameter_1": "12345",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200"
      }
    }

