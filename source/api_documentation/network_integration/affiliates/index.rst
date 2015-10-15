Affiliates
==========
----

The operations on Affiliate are similar to Network, in that the interface is fully idempotent,
and the create and update commands both expect the full set of affiliate sites and users each time.
Similar to advertisers, you are not allowed to delete if one or more campaigns exist for this affiliate.

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id_from_network
    - string
    - The network object_id for this Affiliate. Unique within network.

  * - name
    - string
    - The name of the Affiliate. Unique within the network.

  * - status
    - string (one of): Applied, Approved (default), Declined, Suspended, Archived
    - Approval status for this affiliate.

  * - **sites**
    - json array of hashes
    - 1 or more pairs of id_from_network [and name].

  * - id_from_network
    - string
    - the site id (PID).

  * - name
    - string
    - The site name that matches site id_from_network.

  * - **users**
    - json array of hashes
    - 0 or more users for the organization. Each must have the first 5 fields below.

  * - id_from_network
    - string
    - The network object_id for this user.

  * - email_address
    - string in RFC 2822 addr-spec format
    - The user’s email address. Unique for this user.

  * - first_name
    - string(must not be blank)
    - The user’s first name.

  * - last_name
    - string(must not be blank)
    - The user’s last name.

  * - phone_number
    - string in ITU E.164 format or 10-digit US form (no punctuation)
    - The user’s phone number.

  * - role
    - One of: Super (default), Manager, Member, Observer
    - This user’s role in this organization. (A user mayhave different roles indifferent organizations)


Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/<affiliate_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /affiliates
   :description: Get all Affiliates
   :page: get_affiliates

GET all Affiliates
------------------
GET `/affiliates`


Examples
""""""""
----

Read all Affiliates for this network

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates.json`

Request Body:

.. code-block:: json

  [
    {
      "id_from_network": "222",
      "sites": [
        {
          "id_from_network": "33567",
          "name": "http://www.surfoz.au"
        },
        {
          "id_from_network": "44920",
          "name": "http://www.blogspot.com/surfoz"
        }
      ],
      "name": "Surf Oz Magazine",
      "users": [
        {
          "email_address": "userx@invoca.com",
          "id_from_network": "1231",
          "first_name": "User",
          "phone_number": "805‐708‐9876",
          "last_name": "Affiliate",
          "role": "Super"
        }
      ],
      "status": "Approved"
    }
  ]

.. api_endpoint::
   :verb: GET
   :path: /affiliates/&lt;affiliate_id&gt;
   :description: Get an Affiliate
   :page: get_affiliate

GET an Affiliate
----------------

GET `/affiliates/<affiliate_id>`


Examples
""""""""
----

Read a specific affiliate

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json`

Response Body:

.. code-block:: json

  {
    "id_from_network": "222",
    "sites": [
      {
        "id_from_network": "33567",
        "name": "http://www.surfoz.au"
      },
      {
        "id_from_network": "44920",
        "name": "http://www.blogspot.com/surfoz"
      }
    ],
    "name": "Surf Oz Magazine",
    "users": [
      {
        "email_address": "userx@invoca.com",
        "id_from_network": "1231",
        "first_name": "User",
        "phone_number": "805‐708‐9876",
        "last_name": "Affiliate",
        "role": "Super"
      }
    ],
    "status": "Approved"
  }

.. api_endpoint::
   :verb: DELETE
   :path: /affiliates/&lt;affiliate_id&gt;
   :description: Delete an Affiliate
   :page: delete_affiliate

DELETE An Affiliate
-------------------

DELETE `/affiliates/<affiliate_id>`


Examples
""""""""
----

Delete a single affiliate

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json`


Response Body:

.. code-block:: json

  {
  }

.. api_endpoint::
   :verb: POST
   :path: /affiliates/&lt;affiliate_id&gt;
   :description: Create an Affiliate
   :page: post_affiliate

Create an Affiliate (POST)
--------------------------

POST `/affiliates/<affiliate_id>`


Examples
""""""""
----

Create an affiliate with users

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "name": "Surf Oz Magazine",
    "status": "Approved",
    "users": [
      {
        "phone_number": "805‐708‐9876",
        "id_from_network": 123,
        "role": "Super",
        "last_name": "Affiliate",
        "first_name": "User",
        "email_address": "userx@invoca.com"
      }
    ],
    "sites": [
      {
        "id_from_network": 33567,
        "name": "http://www.surfoz.au"
      },
      {
        "id_from_network": 44920,
        "name": "http://www.blogspot.com/surfoz"
      }
    ]
  }

Response Body:

.. code-block:: json

  {
  }

.. api_endpoint::
   :verb: PUT
   :path: /affiliates/&lt;affiliate_id&gt;
   :description: Update an Affiliate
   :page: put_affiliate

Update an Affiliate (PUT)
-------------------------

PUT `/affiliates/<affiliate_id>`


Examples
""""""""
----

Update a single affiliate

Endpoint:
`https://invoca.net/api/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json`

Request Body:

.. code-block:: json

  {
    "name": "Updated Surf Oz Magazine"
  }
