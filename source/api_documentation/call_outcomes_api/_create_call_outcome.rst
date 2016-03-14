.. container:: endpoint-long-description

  .. rubric:: Examples

  Example using **transaction_id** (of the call to associate the call outcome to) and providing all call outcome fields:

  Endpoint:

  ``https://invoca.net/api/@@CALL_OUTCOME_VERSION/call_outcomes.json``

  Request Body

  .. code-block:: json

    # HTTP POST
    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "call_outcome": {
        "outcome_name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "sale_amount": "100.00",
        "value": "true",
        "custom_parameter_1": "12345",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

  Response Body

  .. code-block:: json

    # 201 Created
    {
      "call_outcome": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "outcome_name": "sale",
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

  .. raw:: html

    <hr>


  Example using **start_time_t**, all optional search fields, and all call outcome fields:

  Endpoint:

  ``https://invoca.net/api/@@CALL_OUTCOME_VERSION/call_outcomes.json``

  Request Body

  .. code-block:: json

    # HTTP POST
    {
      "search": {
        "start_time_t": "1440607313",
        "calling_phone_number": "1234567890",
        "duration_in_seconds": "60",
        "advertiser_id_from_network": "1",
        "advertiser_campaign_id_from_network": "2",
        "network_id": "3"
      },
      "call_outcome": {
        "outcome_name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "sale_amount": "100.00",
        "value": "true"
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

  Response Body:

  .. code-block:: json

    # 201 Created
    {
      "call_outcome": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "outcome_name": "sale",
        "partner_unique_id": "1",
        "description": "1 year contract",
        "occurred_at_time_t": "1440607313",
        "sale_amount": "100.0",
        "value": "true"
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200"
      }
    }
