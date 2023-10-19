Destinations
============

Manage destinations (aka Customer Phone Numbers)
""""""""""""""""""""""""""""""""""""""""""""""""

Destinations are alternate way of managing :doc:`customer_phone_numberss <../ringpools/index>`.

`Learn more about RingPools here <https://community.invoca.com/t5/call-attribution/basic-knowledge-ringpools/ta-p/530>`_.

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

    id
    country_code
    phone_number
    primary_url
    requested_destination_name
    acknowledged_at
    created_at
    updated_at
    ignored_at
    notified_at

  * - id
    - integer (read-only)
    - The internal Invoca id of the Destination.

  * - country_code
    - string
    - Country code of the phone number of the Destination.

  * - phone_number
    - string
    - Phone number of the Destination.

  * - primary_url
    - string
    - ToDo

  * - requested_destination_name
    - integer
    - ToDo

Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/customer_phone_numbers.json``

.. api_endpoint::
   :verb: GET
   :path: /customer_phone_numbers
   :description: Get all Destinations
   :page: get_customer_phone_numbers

.. api_endpoint::
   :verb: GET
   :path: /customer_phone_numbers/&lt;customer_phone_number_id&gt;
   :description: Get a Destination
   :page: get_customer_phone_number
