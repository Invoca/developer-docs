Advertisers
===========
----

The operations on Advertiser are similar to Network, in that the interface is fully idempotent,
and the create and update commands both expect the full set of advertiser sites and users each time.
You are not allowed to delete an advertiser if it has one or more campaigns.

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id_from_network
    - string (Required)
    - The network id for this Advertiser. Unique within network.

  * - name
    - string (Required)
    - The name of the Advertiser. Unique within network.

  * - oauth_refresh_token
    - string
    - For internal use only.

  * - approval_status
    - string (one of): Applied, Approved (default), Declined, Suspended, Archived
    - Approval status for this advertiser.

  * - web_integration_phone_number
    - string
    - 

  * - default_creative_if_from_network
    - integer
    - 

  * - sites
    - json array of hashes
    - 1 or more pairs of id_from_network [and name].

  * - id_from_network
    - integer site_if (PID)
    - The site_id (PID). At least one is required. The first becomes the default.

  * - name
    - string
    - The site name that matches side_id.

  * - users
    - json array of hashes
    - 0 or more users for the organization. Each must have first 5 fields below.

  * - id_from_network
    - string
    - The network id for this User.

  * - email_address
    - string in RFC 2822 addr-spec format
    - The user’s email address. Unique for this user.

  * - first_name
    - string (Required)
    - The user’s first name.

  * - last_name
    - string (Required)
    - The user’s last name.

  * - contact_phone_number
    - string in ITU E.164 format or 10-digit US form (no punctuation)
    - The user’s phone number.

  * - oauth_refresh_token
    - string
    - Not used. Reserved.

  * - role
    - One of: Super (default), Manager, Member, Observer
    - This user’s role in this organization. (A user may hace different roles in different organizations)

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /advertisers
   :description: Get all Advertisers
   :page: empty

GET all Advertisers
-------------------

GET `/advertisers`

Examples
""""""""
----

Read all advertisers for this network

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   [
     {
       "id_from_network": "cFUyYnFHy",
       "web_integration_phone_number": "8004377950",
       "approval_status": "Approved",
       "sites": [
         {
           "id_from_network": "315",
           "name": "315.blog.com"
         }
       ],
       "name": "NFL Tickets Exchange",
       "users": [
         {
           "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
           "email_address": "chris1@nfltix.com",
           "first_name": "Chris",
           "phone_number": "888‐603‐3760",
           "last_name": "Dean",
           "role": "Manager",
           "oauth_refresh_token": "556588585858585858585858858"
         }
       ],
       "default_creative_id_from_network": "222",
       "oauth_refresh_token": "7464644784457575757494930303"
     }
   ]

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Get an Advertiser
   :page: empty

GET an Advertiser
-----------------

GET `/advertisers/<advertiser_id>`

Examples
""""""""
----

Read a single advertiser

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   {
     "id_from_network": "cFUyYnFHy",
     "web_integration_phone_number": "8004377950",
     "approval_status": "Approved",
     "sites": [
       {
         "id_from_network": "315",
         "name": "315.blog.com"
       },
       {
         "id_from_network": "996",
         "name": "996.blog.com"
       }
     ],
     "name": "NFL Tickets Exchange",
     "users": [
       {
         "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
         "email_address": "chris@nfltix.com",
         "first_name": "Chris",
         "phone_number": "888‐603‐3760",
         "last_name": "Dean",
         "role": "Manager",
         "oauth_refresh_token": "556588585858585858585858858"
       },
       {
         "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
         "email_address": "jim@nfltix.com",
         "first_name": "Jim",
         "phone_number": "888‐603‐3760",
         "last_name": "Williams",
         "role": "Observer",
         "oauth_refresh_token": "4222424241628298228222"
       }
     ],
     "default_creative_id_from_network": "222",
     "oauth_refresh_token": "7464644784457575757494930303"
   }

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Delete an Advertiser
   :page: empty

DELETE An Advertiser
--------------------

DELETE `/advertisers/<advertiser_id>`

Examples
""""""""
----

Delete a single advertiser

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   {
   }

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Create an Advertiser
   :page: empty

Create an Advertiser (POST)
---------------------------

POST `/advertisers/<advertiser_id>`

Examples
""""""""
----

Create an advertiser with users

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Body:

.. code-block:: json

   {
     "name": "NFL Tickets Exchange",
     "oauth_refresh_token": "7464644784457575757494930303",
     "approval_status": "Approved",
     "web_integration_phone_number": "8004377950",
     "default_creative_id_from_network": "222",
     "users": [
       {
         "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
         "email_address": "chris@nfltix.com",
         "first_name": "Chris",
         "last_name": "Dean",
         "contact_phone_number": "8055555555",
         "oauth_refresh_token": "556588585858585858585858858",
         "role": "Manager"
       },
       {
         "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
         "email_address": "jim@nfltix.com",
         "first_name": "Jim",
         "last_name": "Williams",
         "contact_phone_number": "2135555555",
         "oauth_refresh_token": "4222424241628298228222",
         "role": "Observer"
       }
     ],
     "sites": [
       {
         "id_from_network": "315",
         "name": "315.blog.com"
       },
       {
         "id_from_network": "996",
         "name": "996.blog.com"
       }
     ]
   }

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Update an Advertiser
   :page: empty

Update an Advertiser (PUT)
--------------------------

PUT `/advertisers/<advertiser_id>`

Examples
""""""""
----

Update a user from advertiser

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Request Body:

.. code-block:: json

   {
     "name": "NFL Tickets Exchange",
     "oauth_refresh_token": "7464644784457575757494930303",
     "approval_status": "Approved",
     "web_integration_phone_number": "8004377950",
     "default_creative_id_from_network": "222",
     "users": [
       {
         "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
         "email_address": "chris@nfltix.com",
         "first_name": "Chris",
         "last_name": "Dean",
         "contact_phone_number": "8055555555",
         "oauth_refresh_token": "556588585858585858585858858",
         "role": "Manager"
       }
     ],
     "sites": [
       {
         "id_from_network": "315",
         "name": "315.blog.com"
       }
     ]
   }
