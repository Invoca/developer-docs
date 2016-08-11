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

    `call_start_time:` The start time does not have to be exact since clocks will not be perfectly synchronized. We will find the closest match (in combination with **duration_in_seconds**, if provided). See **Timestamp Formats** section below for descriptions of supported timestamps.

    Note: If using **call_start_time** to match, instead of **transaction_id**, one or more of the following optional parameters is highly recommended. The optional parameters are ignored when using the **transaction_id**:

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

    `occurred_at_time:` This allows batching of signal results at a later time and still capture the exact time the signal event happened. See **Timestamp Formats** section below for descriptions of supported timestamps. Defaults to the time of the API request if not provided.

    `sale_amount:` Money with up to 2 decimal places (period separated).
    Assumed to be in the same currency as the organization that owns the signal being reported.
    Defaults to null if not passed. (Recommended to omit parameter if no sale occurred, instead of passing 0).
    Do not include formatting such as currency symbol or separators (i.e. commas).

    `value:` True or false as to whether the signal was met or not. Defaults to true if not passed. Can be a string ‘true’ or ‘false’, or 1 (true) or 0 (false).

    `custom_parameter_1` Custom parameter. Up to 255 character string.

    `custom_parameter_2` Custom parameter. Up to 255 character string.

    `custom_parameter_3` Custom parameter. Up to 255 character string.

------

**Additional Parameters**

    **Required**

    `oauth_token:` API token for authentication

Endpoint:

``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/signals``

.. api_endpoint::
  :verb: POST
  :path: /transactions/signals
  :description: Create a signal
  :page: create_signal

.. api_endpoint::
  :verb: PUT
  :path: /transactions/signals
  :description: Update a signal
  :page: update_signal


Endpoint:

``https://invoca.net/api/@@SIGNAL_API_VERSION/transactions/<transaction_id>/signals``

.. api_endpoint::
  :verb: POST
  :path: /transactions/&lttransaction_id&gt/signals
  :description: Create a signal
  :page: create_signal2

.. api_endpoint::
  :verb: PUT
  :path: /transactions/&lttransaction_id&gt/signals
  :description: Update a signal
  :page: update_signal2


Timestamp Formats
-------------------------------

The following formats are supported for both `call_start_time` and `occurred_at_time`.

All examples below correspond to a date time of **11 April 2016** at **1 PM Pacific Time**.


**Epoch:** 10 digit timestamp in UTC seconds since 1/1/70, also known as Unix time_t. UTC milliseconds since 1/1/70 (which is the default in Javascript) are also supported, i.e. a 13 digit start time.

    Example (10 digits): **1460404800**

    Example (13 digits): **1460404800000**

**Compressed:** 17 digit timestamp always parsed in Pacific time.

    Format: **YYYYMMDDHHMMSSsss**

    Example: **20160411130000000**

**ISO 8601:** Timestamp with +/- UTC offset or Z to indicate time is in UTC. Milliseconds are optional.

    Format: **YYYY/MM/DDTHH:MM:SS.sss+hh:mm**

    Example (UTC offset of +3 hours): **2016/04/11T23:00:00.000+03:00**

    Example (UTC offset of -7 hours): **2016/04/11T13:00:00.000-07:00**

    Example (UTC): **2016/04/11T20:00:00.000Z**

    Example (no milliseconds): **2016/04/11T13:00:00-07:00**

**Excel Compatible:** Timestamp parsed in the timezone of the **oauth token**'s associated network. Milliseconds are optional.

    Format: **YYYY/MM/DD HH:MM:SS.sss AM/PM**

    Example: **2016/04/11 13:00:00.000 PM**

    Example (no milliseconds): **2016/04/11 13:00:00 PM**

    **Note:** The file upload user interface includes a timezone dropdown feature, which allows users to select which timezone this format is parsed in. Use the following to format Excel date cells: **yyyy/mm/dd hh:mm:ss.000 AM/PM**.



Example POST Request Using cURL
-------------------------------

You can send call results to Invoca servers in the form of an HTTP POST or PUT. cURL is recommended because it is simple and preinstalled on most machines. Below is an example of a cURL request:

.. code-block:: bash

  curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signal": {"name": "sale","partner_unique_id": "1","description": "1 year contract","occurred_at_time": "1440607313","sale_amount": "100.00","value": "true"},"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/<API_VERSION>/transactions/signals.json

Errors
------

The Signal API clearly identifies errors when a request cannot be processed.

**Validation Errors**

If invalid parameters are passed an error will be returned with a 403 response code. For example, if a **transaction_id** or **call_start_time** are not passed in the request, the following error will be returned.

**Response (403 Forbidden):**

.. code-block:: json

  {
    "errors": {
      "class": "RecordInvalid",
      "invalid_data": "Validation failed: transaction_id or start_time_t must be present"
    }
  }

-----

**Record Not Found Error**

If no record is found for the search parameters that are passed in the request an error will be returned with a 404 response code. For example, if a call cannot be found for the search parameters passed, the following error will be returned.

**Response (404 Not Found):**

.. code-block:: json

    {
      "errors": {
        "class": "RecordNotFound",
        "invalid_data": "No call found. Please refer to the documentation."
      }
    }

-----

**Permission Errors**

If you do not have access to the Signal API, the following error will be returned with a 403 response code.

**Response (403 Forbidden):**

.. code-block:: json

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

**Response (403 Forbidden):**

.. code-block:: json

    {
      "errors": {
        "class": "UnauthorizedAdvertiser",
        "invalid_data": "You do not have access to this advertiser"
      }
    }

Updates and Idempotency
-----------------------

Signal are considered unique by a combination of **name** and **partner_unique_id**.
For example, if you make two requests with the same **name** and **partner_unique_id**, the other params in the second request will update the original signal’s fields

Therefore, if you make two requests with the same params, the signal will not be updated nor will a new one be made. It is safe then to re-post API requests without fear of duplicate data.

If you change the **partner_unique_id**, a second signal of the same name will be associated with the transaction.

-----

Example of creating two signals (on a single call) then updating one

**HTTP POST parameters** - first request (creates first signal):

.. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Accord 2015"
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (201 Created):**

.. code-block:: json

    {
      "signal": {
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Accord 2015",
        "occurred_at_time_t": "1440607999",
        "occurred_at_time": "01/01/2016 08:34 PM UTC",
        "value": "true"
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "01/01/2016 08:34 PM UTC"
      }
    }

**HTTP POST Parameters** - second request (creates another signal):

.. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "2",
        "description": "Toyota Camry 2015"
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (201 Created):**

.. code-block:: json

    {
      "signal": {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "2",
        "description": "Toyota Camry 2015",
        "occurred_at_time_t": "1440607800",
        "occurred_at_time": "01/01/2016 08:34 PM UTC",
        "value": "true",
        "custom_parameter_1": "",
        "custom_parameter_2": "",
        "custom_parameter_3": ""
      },
      "call": {
        "transaction_id": "00000000-00000001",
        "start_time_t": "1435993200",
        "call_start_time": "01/01/2016 08:34 PM UTC"
      }
    }

**HTTP POST Parameters** - third request (updates first request):

.. code-block:: json

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signal": {
        "name": "Quote",
        "partner_unique_id": "1",
        "description": "Honda Civic 2012"
      },
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (200 OK):**

.. code-block:: json

  {
    "signal": {
      "transaction_id": "00000000-0000000C",
      "corrects_transaction_id": "00000000-0000000A",
      "name": "Quote",
      "partner_unique_id": "1",
      "description": "Honda Civic 2012",
      "occurred_at_time_t": "1440607999",
      "occurred_at_time": "01/01/2016 08:34 PM UTC",
      "value": "true",
      "custom_parameter_1": "",
      "custom_parameter_2": "",
      "custom_parameter_3": ""
    },
    "call": {
      "transaction_id": "00000000-00000001",
      "start_time_t": "1435993200",
      "call_start_time": "01/01/2016 08:34 PM UTC"
    }
  }

Note: even though this third request was an update to the first and will appear in reports as updating the first signal, a new signal transaction ID is returned.
This is because a correction has been made to the first signal, and this new transaction ID is what will appear in webhooks and the Transactions API.
