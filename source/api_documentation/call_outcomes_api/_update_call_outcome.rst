.. container:: endpoint-long-description

  .. rubric:: Examples

  Example using **transaction_id** and providing all call outcome fields:

  Endpoint:

  ``https://invoca.net/api/@@CALL_OUTCOME_VERSION/call_outcomes.json``

  Request Body

  .. code-block:: json

    # HTTP PUT
    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "call_outcome": {
        "outcome_name": "sale",
        "partner_unique_id": "1",
        "description": "Updated description and sale amount",
        "sale_amount": "200.00"
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

  Response Body:

  When an update occurs, a 200 status code is returned, otherwise the response body looks the same as a create.

  .. code-block:: json

    # 200 OK
    {
      "call_outcome": {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": "00000000-0000000A",
        "outcome_name": "sale",
        "partner_unique_id": "1",
        "description": "Updated description and sale amount",
        "occurred_at_time_t": "1440607313",
        "sale_amount": "200.0",
        "value": "true",
        "custom_parameter_1": "",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200"
      }
    }

  Note: It’s necessary to use the **transaction_id** of the transaction (call leg) that the call outcome was originally reported on.
  The **outcome_name** and **partner_unique_id** must also match the call outcome being updated.
