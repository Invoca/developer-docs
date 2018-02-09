

.. container:: endpoint-long-description

  .. rubric:: Examples

  All of these examples use ``POST`` requests, but we will also accept ``PUT`` requests with the same request format.

  Examples using **transaction_id** (of the call) and providing a single signal with all available fields populated:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signals": [{
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time": "1440607313",
        "revenue": "100.00",
        "value": "true"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "100.0",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

  .. raw:: html

    <hr>

  Example using **transaction_id** (of the call) and providing multiple signals:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signals": [{
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time": "1440607313",
        "revenue": "100.00",
        "value": "true"
      }, {
        "name": "quote",
        "occurred_at_time": "1440607313",
      }, {
        "name": "sale",
        "partner_unique_id": "2",
        "occurred_at_time": "1440607313",
        "revenue": "1,000.00",
        "value": "true"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "100.0",
        "value": "true"
      }, {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": null,
        "name": "quote",
        "partner_unique_id": "",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "",
        "value": "true"
      }, {
        "transaction_id": "00000000-0000000C",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "2",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "1,000.0",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

  .. raw:: html

    <hr>

  Example using **transaction_id** (of the call) and providing a signals with custom data fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signals": [{
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time": "1440607313",
        "revenue": "100.00",
        "value": "true"
      }, {
        "name": "quote",
        "occurred_at_time": "1440607313",
      }],
      "custom_data": [{
        "name": "channel",
        "value": "Paid Search"
      }, {
        "name": "line_of_business",
        "value": "Social"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "100.0",
        "value": "true"
      }, {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": null,
        "name": "quote",
        "partner_unique_id": "",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000002",
        "corrects_transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

  .. raw:: html

    <hr>

  Example using **transaction_id** (of the call) and providing only custom data fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json``

  Request Body:

  .. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "custom_data": [{
        "name": "channel",
        "value": "Paid Search"
      }, {
        "name": "line_of_business",
        "value": "Social"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "signals": [],
      "call": {
        "transaction_id": "00000000-00000002",
        "corrects_transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

  .. raw:: html

    <hr>


  Example using **call_start_time**, all optional search fields, and all signal fields:

  Endpoint:

  ``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json``

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
      "signals": [{
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time": "1440607313",
        "revenue": "100.00",
        "value": "true"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "sale",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607313",
        "occurred_at_time": "2015-08-26T16:41:53Z",
        "revenue": "100.0",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }
