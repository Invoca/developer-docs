###################
Phone Numbers
###################

Common Query Parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The requests on this page all share the following common query parameters. Additional parameters specific to each request are listed as appropriate in the request's subheading.

Common Sortable Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The requests on this page all share the following common sortable fields. Additional parameters specific to each request are listed as appropriate in the request's subheading.

Common Filterable Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The requests on this page all share the following common filterable fields. Additional parameters specific to each request are listed as appropriate in the request's subheading.

Get SMS-enabled Phone Numbers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Endpoint:**

``https://messaging.invoca.net/sms/@@SMS_MESSAGING_API_VERSION/phone_numbers[.json]``

**Request Type(s):** `GET`



**Additional Request Parameters:**

.. list-table::
  :widths: 30 50 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Required

  * - sort
    - See Sorting
    - created_at:asc
    - False

  * - limit
    - The maximum number of records to be returned when fulfilling paginated R operations.
    - 100
    - False

  * - cursor
    - See Pagination
    - created_at:asc
    - False

**Additional Sortable Fields:**

**Additional Filterable Fields:**


**Example Requests:**

.. api_endpoint::
   :verb: GET
   :path: /phone_numbers
   :description: Retrieve SMS-enabled Phone Numbers
   :page: get_sms_enabled_phone_numbers

Get a Specific SMS-enabled Phone Number
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Request Type(s):** `GET`

**Endpoint:**

``https://messaging.invoca.net/sms/@@SMS_MESSAGING_API_VERSION/phone_numbers/<phone_number>[.json]``

**Additional Request Parameters:**

.. list-table::
  :widths: 30 50 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Required

  * - sort
    - See Sorting
    - created_at:asc
    - False

  * - limit
    - The maximum number of records to be returned when fulfilling paginated R operations.
    - 100
    - False

  * - cursor
    - See Pagination
    - created_at:asc
    - False

**Additional Sortable Fields:**

**Additional Filterable Fields:**

**Example Requests:**

.. api_endpoint::
   :verb: GET
   :path: /phone_numbers/<phone_number>
   :description: Get a Specific SMS-enabled Phone Number
   :page: get_sms_enabled_phone_number

Get SMS-enabled Phone Number Count
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Endpoint:**

``https://messaging.invoca.net/sms/@@SMS_MESSAGING_API_VERSION/phone_numbers/count[.json]``

**Request Type(s):** `GET`

**Additional Request Parameters:**

.. list-table::
  :widths: 30 50 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Required

  * - sort
    - See Sorting
    - created_at:asc
    - False

  * - limit
    - The maximum number of records to be returned when fulfilling paginated R operations.
    - 100
    - False

  * - cursor
    - See Pagination
    - created_at:asc
    - False

**Additional Sortable Fields:**

**Additional Filterable Fields:**

**Example Requests:**

.. api_endpoint::
   :verb: GET
   :path: /phone_numbers/count
   :description: Get SMS-enabled Phone Number Count
   :page: get_phone_number_count

Create New SMS-enabled Phone Number
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Request Type(s):** `POST`

**Endpoint:**

``https://messaging.invoca.net/sms/@@SMS_MESSAGING_API_VERSION/phone_numbers[.json]``

**Additional Request Parameters:**

.. list-table::
  :widths: 30 50 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Required

  * - sort
    - See Sorting
    - created_at:asc
    - False

  * - limit
    - The maximum number of records to be returned when fulfilling paginated R operations.
    - 100
    - False

  * - cursor
    - See Pagination
    - created_at:asc
    - False

**Additional Sortable Fields:**

**Additional Filterable Fields:**

**Example Requests:**

.. api_endpoint::
   :verb: POST
   :path: /phone_numbers
   :description: Create New SMS-enabled Phone Number
   :page: get_sms_enabled_phone_numbers

Delete a specific SMS-enabled Phone Number
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Request Type(s):** `DELETE`

**Endpoint:**

``https://messaging.invoca.net/sms/@@SMS_MESSAGING_API_VERSION/phone_numbers/<phone_number>[.json]``

**Additional Request Parameters:**

.. list-table::
  :widths: 30 50 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Required

  * - sort
    - See Sorting
    - created_at:asc
    - False

  * - limit
    - The maximum number of records to be returned when fulfilling paginated R operations.
    - 100
    - False

  * - cursor
    - See Pagination
    - created_at:asc
    - False

**Additional Sortable Fields:**

**Additional Filterable Fields:**

**Example Requests:**

.. api_endpoint::
   :verb: DELETE
   :path: /phone_numbers/<phone_number>
   :description: Delete a Specific SMS-enabled Phone Number
   :page: delete_sms_enabled_phone_number
