Signal API
=================

The Signal API is used to report signals that occur on a specific call (transaction).

Signals may be anything an organization would like to track such as sales, quotes, etc.

Response Codes
--------------

Remember to check the HTTP status code returned. This helps greatly when debugging.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters


  * - Status Code
    - Meaning

  * - 200 OK
    - An existing signal was found and updated

  * - 201 Created
    - A new signal was created

  * - 401 Not Authorized
    - Invalid or missing oauth token

  * - 403 Forbidden
    - Attempted to access an invalid resource or provided invalid data. Check the errors object in the response.

  * - 404 Not Found
    - Provided a transaction ID that was not found, or if using call start time and other search filters, no matching call found

Request Parameters
------------------

Passed in “application/json” format.

**Search Parameters**

Used to find the call associated with the signal.

    **Required**

    `transaction_id:` The ID of the transaction (Call leg) being reported on.

    or

    `start_time_t:` 10 digit start time of the call in UTC seconds since 1/1/70, also known as Unix time_t. UTC milliseconds since 1/1/70 (which is the default in Javascript) are also supported, i.e. a 13 digit start time. The start time does not have to be exact since clocks will not be perfectly synchronized. We will find the closest match (in combination with **duration_in_seconds**, if provided)

    Note: If using **start_time_t** to match, instead of **transaction_id**, one or more of the following optional parameters is highly recommended. The optional parameters are ignored when using the **transaction_id**:

    **Optional**

    `calling_phone_number:` ANI in E.164 format +country national_number; example: ‘+1 8885551212’.

    `duration_in_seconds:` Length of the call. Used for finding the call that drove the sale. Like start time, duration_in_seconds does not have to be exact, we use it to find the closest match.

    `advertiser_id_from_network:` ID from network field on advertiser; only calls within this advertiser will be considered (only allowed when reporting as network user, and advertiser must be in same network).

    `advertiser_campaign_id_from_network:` ID from network field on advertiser campaign; only calls within this advertiser campaign will be considered (campaign must be in the organization accessed via API).

    `network_id:` ID of the network.

-----

**Signal Parameters**

Used to create the fields of a signal.

    **Required**

    `name:` The name describing the signal event. For reporting a sale happened on a call, “Sale” is recommended.
    Other examples include “Free Trial”, “2yr Subscription”, “Cancellation.”
    This can be used elsewhere in the system and should be a small list of values meaningful to your organization.
    Names are matched case-insensitively, but we will preserve and use the casing of the first time the signal name is reported.

    **Optional**

    `partner_unique_id:` Unique identifier, to distinguish between updating an existing signal (for example correcting a sale that was reported)
    versus adding a second sale to the call (for example a reservation made while on the call and then an add on item purchased later).
    Note: this ID only needs to be unique within the given transaction and **name**, so it can be as simple as “1”, “2”… or
    it can be a globally unique ID if desired. Defaults to empty string if not passed.

    `description:` Free form text for providing additional details about the signal (for example: a sales order ID or a specific product being purchased or inquired about).

    `occurred_at_time_t:` 10 digit time that the signal occurred, in UTC seconds since 1/1/70, also known as Unix time_t.
    This allows batching of signal results at a later time and still capture the exact time the signal event happened. Defaults to the time of the API request if not provided.

    `sale_amount:` Money with up to 2 decimal places (period separated).
    Assumed to be in the same currency as the organization that owns the signal being reported.
    Defaults to null if not passed. (Recommended to omit parameter if no sale occurred, instead of passing 0).
    Do not include formatting such as currency symbol or separators (i.e. commas).

    `value:` True or false as to whether the signal was met or not. Defaults to true if not passed. Can be a string ‘true’ or ‘false’, or 1 (true) or 0 (false).

------

**Additional Parameters**

    **Required**

    `oauth_token:` API token for authentication

Endpoint:

``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/signals``

.. api_endpoint::
  :verb: POST
  :path: /transcations/signals
  :description: Create a signal
  :page: create_signal

.. api_endpoint::
  :verb: PUT
  :path: /transcations/signals
  :description: Update a signal
  :page: update_signal

Example POST Request Using cURL
-------------------------------

You can send call results to Invoca servers in the form of an HTTP POST or PUT. cURL is recommended because it is simple and preinstalled on most machines. Below is an example of a cURL request:

.. code-block:: bash

  curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signal": {"name": "sale","partner_unique_id": "1","description": "1 year contract","occurred_at_time_t": "1440607313","sale_amount": "100.00","value": "true"},"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/<API_VERSION>/transcations/signals.json

Errors
------

The Signal API clearly identifies errors when a request cannot be processed.

**Validation Errors**

If invalid parameters are passed an error will be returned with a 403 response code. For example, if a **transaction_id** or **start_time_t** are not passed in the request, the following error will be returned.

.. code-block:: json

  # 403 Forbidden
  {
    "errors": {
      "class": "RecordInvalid",
      "invalid_data": "Validation failed: transaction_id or start_time_t must be present"
    }
  }

-----

**Record Not Found Error**

If no record is found for the search parameters that are passed in the request an error will be returned with a 404 response code. For example, if a call cannot be found for the search parameters passed, the following error will be returned.

.. code-block:: json

    # 404 Not Found
    {
      "errors": {
        "class": "RecordNotFound",
        "invalid_data": "No call found. Please refer to the documentation."
      }
    }

-----

**Permission Errors**

If you do not have access to the Signal API, the following error will be returned with a 403 response code.

.. code-block:: json

    # 403 Forbidden
    {
      "errors": {
        "class": "UnauthorizedOperation",
        "invalid_data": "You do not have permissions to perform the requested operation."
      }
    }

-----

**Authorization Errors**

If you do not have access to the **advertiser_id_from_network**, **advertiser_campaign_id_from_network**, or the **network_id** an error will be returned with a 403 response code.
For example, if you pass an **advertiser_id_from_network** that you do not have access to, the following error will be returned.

.. code-block:: json

    # 403 Forbidden
    {
      "errors": {
        "class": "UnauthorizedAdvertiser",
        "invalid_data": "You do not have access to this advertiser"
      }
    }

Updates and Idempotency
-----------------------

Signals are considered unique by a combination of **name** and **partner_unique_id**.
For example, if you make two requests with the same **name** and **partner_unique_id**, the other params in the second request will update the original signal’s fields

Therefore, if you make two requests with the same params, the signal will not be updated nor will a new one be made. It is safe then to re-post API requests without fear of duplicate data.

If you change the **partner_unique_id**, a second signal of the same name will be associated with the transaction.

-----

Example of creating two signals (on a single call) then updating one

**Initial request** (creates first signal):

.. code-block:: json

    # HTTP POST
    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Accord 2015"
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

**Response:**

.. code-block:: json

    # 201 Created
    {
      "signal": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Accord 2015",
        "occurred_at_time_t": "1440607999",
        "value": "true"
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200"
      }
    }

**Second request** (creates another signal):

.. code-block:: json

    # HTTP POST
    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "2",
        "description": "Toyota Camry 2015"
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

**Response:**

.. code-block:: json

    # 201 Created
    {
      "signal": {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "2",
        "description": "Toyota Camry 2015",
        "occurred_at_time_t": "1440607800",
        "value": "true"
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200"
      }
    }

**Third request** (updates first request):

.. code-block:: json

    # HTTP POST
    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Civic 2012"
      },
      "oauth_token": <YOUR OAUTH TOKEN>
    }

**Response:**

.. code-block:: json

  # 200 OK
  {
    "signal": {
      "transaction_id": "00000000-0000000C",
      "corrects_transaction_id": "00000000-0000000A",
      "name": "Quote",
      "partner_unique_id": "1",
      "description": "Honda Civic 2012",
      "occurred_at_time_t": "1440607999",
      "value": "true"
    },
    "call": {
      "transaction_id": "00000000-00000001",
      "start_time_t": "1435993200"
    }
  }

Note: even though this third request was an update to the first and will appear in reports as updating the first signal, a new transaction ID is returned.
This is because a correction has been made to the first signal, and this new transaction ID is what will appear in webhooks and the Transactions API.
