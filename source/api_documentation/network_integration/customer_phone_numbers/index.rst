Destinations
============

Manage destinations (aka Customer Phone Numbers)
""""""""""""""""""""""""""""""""""""""""""""""""

Destinations are alternate way of managing :doc:`RingPools <../ringpools/index>`.

`Learn more about RingPools here <https://community.invoca.com/t5/call-attribution/basic-knowledge-ringpools/ta-p/530>`_.

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id
    - integer (read-only)
    - The internal Invoca id of the Destination.

  * - country_code
    - string
    - Country code of the phone number.

  * - phone_number
    - string
    - Phone number of the Destination.

  * - primary_url
    - string
    - Website or page URL on which the destination is applied.

  * - requested_destination_name
    - string (read-only)
    - Alias for the destination. Auto-generated names.

  * - **advertiser_campaign**
    -
    -

  * - id_from_network
    - string
    - The network object_id for this Advertiser Campaign. Unique within network. Not required when auto-generation is enabled at network level.

  * - name
    - string
    - Campaign name.

  * - status
    - string
    - Current campaign state.

  * - **dynamic_number_pool**
    -
    -

  * - id
    - integer (read-only)
    - The internal Invoca id of the RingPool.

  * - id_from_network
    - string (required)
    - Network specific id of the RingPool. Unique within network. Not required when auto-generation is enabled at network level.

  * - name
    - string
    - Arbitrary string. Names the RingPool.

  * - object_url
    - string (read-only)
    - URL for reaching the RingPool in the UI.

  * - lifetime_seconds
    - integer
    - The guaranteed minimum time that the number will be allocated for this RingPool.

  * - max_pool_size
    - integer
    - The maximum amount of phone numbers to be allotted at one time.

  * - preferred
    - boolean
    - true or false. Selects this RingPool if the advertiser has multiple RingPools for the campaign and the web integration code does not specify which pool to use.

  * - destination_phone_number
    - A phone number to be associated with the RingPool.
    - When using Destinations UI or the forward to destination IVR node, this number will be used.

  * - fill_immediately
    - boolean
    - When true, the ringpool will immediately be filled with phone numbers up to the max_pool_size, if numbers are available. When false, the pool will initially fill at 10% capacity to conserve phone number usage. The ringpool will increase phone numbers based on ringpool autoscaling settings and traffic volume.

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

.. api_endpoint::
   :verb: DELETE
   :path: /customer_phone_numbers/&lt;customer_phone_number_id&gt;
   :description: Delete a Destination
   :page: delete_customer_phone_number

.. raw:: html

  <br/>
  <br/>
  <div class="alert alert-info">
    <b>NOTE: Creating & Deleting Destinations</b></br>
    Creating a Destination via this endpoint isn't possible. A Destination can be made alongside a RingPool that it'll be associated with via the RingPool endpoint (<a href="https://developers.invoca.net/en/latest/api_documentation/network_integration/ringpools/index.html"><b>Documentation</b></a>).<br/>
    <br/>
    The Destination can be deleted via this endpoint, but if the associated RingPool is going to be deleted as well, you can save a request by utilizing the delete_detected_phone_number parameter in the RingPool endpoint.
  </div>

