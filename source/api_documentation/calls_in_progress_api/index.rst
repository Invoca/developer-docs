Calls In Progress API
=======================

.. raw:: html

  <div class="alert alert-warning">
    <b>Notice:</b>
    The CallsInProgress API is in beta. Please contact your CSM or the support team to request access.
  </div>


| The Calls In Progress API is used for getting information and setting custom data values during a call. Calls become available
 via the api as soon as they are transferred to the campaign's destination. Once the call is complete, it is no longer available
 via the API.
| This API is accessible using the API credentials generated on the platform.

Find Calls in Progress
------------------------
| Perform a `GET` request to query calls currently in progress for the specified organization. Sending only the required
 parameters will return all current calls.

Query Parameters
~~~~~~~~~~~~~~~~~

.. list-table::
  :widths: 10 20 20 30
  :header-rows: 1
  :class: parameters


  * - Param
    - Description
    - Format
    - Required

  * - organization_type
    - The type of organization to be used in the request, either **Network** or **Advertiser**
    - String
    - True

  * - id
    - The ID of the organization to be used in the request
    - Number
    - True

  * - transaction_id
    - The transaction id for the desired call
    - String
    - Optional

  * - external_unique_id
    - The unique id previously applied to the desired call - can only be set via the Calls In Progress API
    - String
    - Optional

  * - calling_phone_number
    - The caller's caller ID
    - We support most phone number formats, for example: 800-555-1234, 8005551234, +18005551234, or 18005551234
    - Yes, if request includes **destination_phone_number**

  * - destination_phone_number
    - The phone number the call was transferred to
    - We support most phone number formats, for example: 800-555-1234, 8005551234, +18005551234, or 18005551234
    - Yes, if request includes **calling_phone_number**

Examples
~~~~~~~~~~
.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get all available calls in progress for the specified organization
   :page: get_calls_in_progress

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by transaction id
   :page: get_calls_by_transaction_id

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by calling and destination phone numbers
   :page: get_calls_by_phone_number

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by external unique id
   :page: get_calls_by_external_unique_id

Update a Call in Progress
--------------------------
Update certain values for a Call that is currently in progress.

Supported types of requests: `PUT` and `POST`

Fields Available for Update
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`external_unique_id` - add a unique ID to the call, usually from another system

`custom_data` - populate Marketing Data Fields (aka Custom Data Fields) in the Invoca platform

Query Parameters
~~~~~~~~~~~~~~~~~~

.. list-table::
  :widths: 10 20 20 30
  :header-rows: 1
  :class: parameters


  * - Param
    - Description
    - Format
    - Required

  * - id
    - The ID of the organization to be used in the request
    - Number
    - True

  * - organization_type
    - The type of organization to be used in the request. Available types: [Network, Advertiser]. Capitalization is required for this param.
    - String
    - True

  * - transaction_id
    - Unique transaction ID
    - String
    - Optional, if using external_unique_id

  * - external_unique_id
    - Unique ID for call from external system
    - String
    - Optional, if using transaction_id

Examples
~~~~~~~~~~~
.. api_endpoint::
   :verb: PUT
   :path: /calls_in_progress
   :description: Update a call's external unique id
   :page: update_external_unique_id

.. api_endpoint::
   :verb: PUT
   :path: /calls_in_progress
   :description: Update a call's custom data via transaction ID
   :page: update_custom_data

.. api_endpoint::
  :verb: PUT
  :path: /calls_in_progress
  :description: Update a call's custom data via external unique ID
  :page: update_custom_data_ext

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
    - Query was successful. Results, if any, will be returned.

  * - 202 Accepted
    - Only applicable for update requests. The update was successful.

  * - 401 Unauthorized
    - Invalid or missing oauth token.

  * - 404 Not Found
    - Only applicable for update requests. The call specified via `transaction_id` or `external_unique_id` was not found.
