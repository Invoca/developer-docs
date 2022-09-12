Calls In Progress API
=================

.. raw:: html

  <div class="alert alert-warning">
    <b>Notice:</b>
    The CallsInProgress API is in beta. Please contact your CSM or the support team to request access.
  </div>


The Calls In Progress API is accessible using the API credentials generated on the platform.

Find Calls in Progress
------------------
Query current calls in progress for a given organization.

Supported types of requests: `GET`

Query Parameters
------------------

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
    - The type of organization to be used in the request. Available types: [network, advertiser]
    - String
    - True

  * - transaction_id
    - Unique transaction ID
    - String
    - Optional

  * - external_unique_id
    - Unique ID for call from external system
    - String
    - Optional

  * - calling_phone_number
    - The caller's caller ID
    - E.164
    - With destination_phone_number

  * - destination_phone_number
    - The phone number the call was transferred to
    - E.164
    - With calling_phone_number

Examples
--------
.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get all available calls in progress for an organization
   :page: get_calls_in_progress

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by transaction id
   :page: get_calls_by_transaction_id

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by phone numbers of a call
   :page: get_calls_by_phone_number

.. api_endpoint::
   :verb: GET
   :path: /calls_in_progress/current_calls
   :description: Get calls in progress by external unique id of a call
   :page: get_calls_by_external_unique_id

Update a Call in Progress
-----------------
Update certain aspects of a Call that is currently in progress

Supported types of requests: `PUT` and `POST`


Query Parameters
------------------

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
    - The type of organization to be used in the request. Available types: [network, advertiser]
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

Fields Available for Updates
--------------------------------
`external_unique_id`

`custom_data` (additions/updates only, no removal)


Examples
--------
.. api_endpoint::
   :verb: PUT
   :path: /calls_in_progress
   :description: Update a call's external unique id
   :page: update_external_unique_id

.. api_endpoint::
   :verb: PUT
   :path: /calls_in_progress
   :description: Update a call's custom data
   :page: update_custom_data
