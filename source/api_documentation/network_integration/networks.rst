Networks
========
----

Network users are replicated to and retrieved from the Invoca Marketing Automation Platform using this API.

The network interface is fully idempotent, and the create and update commands both expect the full set of users each time. For instance, if on one POST two users, user1@invoca.com and user2@invoca.com are specified, but on the next POST, only user1@invoca.com is specified, then as a result of that second post, user2@invoca.com will be deleted. For this reason, POST and PUT requests are identical in their effect, although they return 201 and 200 codes respectively for ease of integration.


Parameters

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - name
    - string
    - Network name (read only).
    
  * - users
    - json array of hashes
    - 0 or more users for the network. User attributes are listed below.
    
  * - id_from_network
    - string
    - The network’s id for this User.
    
  * - email_address
    - string in RFC 2822 addr_spec format
    - The user’s email address. Unique for this user. (mandatory field)
    
  * - first_name
    - string
    - The user’s first name.
    
  * - last_name
    - string
    - The user’s last name.
    
  * - phone_number
    - string in ITU E.164 format or 10-digit US form (no punctuation)
    - The user’s phone number.
    
  * - role
    - One of: Super (default), Manager, Member, Observer, Reporting
    - The user’s role within the network.
    

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

.. api_endpoint::
   :verb: GET
   :path: /&lt;network_id&gt;/network
   :description: Get Network and its Users
   :page: empty

GET Network and its Users
-------------------------

GET `/<network_id>/network`


Examples
""""""""
----

Read network and its users

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

  {
    "name": "Invoca",
    "users": [
      {
        "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
        "email_address": "chris@nfltix.com",
        "first_name": "Chris",
        "last_name": "Dean",
        "phone_number": "800‐437‐7950",
        "role": "Manager"
      },
      {
        "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
        "email_address": "jim@nfltix.com",
        "first_name": "Jim",
        "last_name": "Williams",
        "phone_number": "800‐437‐7950",
        "role": "Observer"
      }
    ]
  }

.. api_endpoint::
   :verb: POST
   :path: /&lt;network_id&gt;/network
   :description: Create Network Users
   :page: empty

Create Network Users (POST)
---------------------------

POST `/<network_id>/network`


Examples
""""""""
----

Create network users

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "users": [
      {
        "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
        "email_address": "chris@nfltix.com",
        "first_name": "Chris",
        "last_name": "Dean",
        "phone_number": "8004377950",
        "role": "Manager"
      },
      {
        "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
        "email_address": "jim@nfltix.com",
        "first_name": "Jim",
        "last_name": "Williams",
        "phone_number": "8004377950",
        "role": "Observer"
      }
    ]
  }

Response Code: 201

.. api_endpoint::
   :verb: PUT
   :path: /&lt;network_id&gt;/network
   :description: Update Network Users
   :page: empty

Update Network Users (PUT)
--------------------------

PUT `/<network_id>/network`


Examples
""""""""
----

Update a network and its user with invalid email address

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "users": [
      {
        "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
        "email_address": "chris@",
        "first_name": "Chris",
        "last_name": "Dean",
        "phone_number": "8004377950",
        "role": "Manager"
      }
    ]
  }

Response Code: 403

Response Body:

.. code-block:: json

  {
    "errors": {
      "users": [
        {
          "email_address": [
            "is invalid"
          ]
        }
      ]
    }
  }

----

Delete network users by putting an empty user hash

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

Format: application/json

Request Body:

.. code-block:: json

  {
    "users": [
    ]
  }
