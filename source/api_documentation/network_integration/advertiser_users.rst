Advertiser Users
================
----

For convenience, the API provides an interface for performing operations on specific advertiser users. This is useful
for situations where it is inconvenient to send an array of all existing advertiser users.

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/users/<user_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/users
   :description: Get all Advertiser Users for Advertiser
   :page: empty

GET all Advertiser Users for Advertiser
---------------------------------------

GET `/advertisers/<advertiser_id>/users`

Examples
""""""""
----

Read all advertiser users for advertiser e0Fv6YEk

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   [
     {
       "email_address": "chris@nfltix.com",
       "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
       "first_name": "Chris",
       "contact_country_code": "1",
       "last_name": "Dean",
       "role": "Manager",
       "oauth_refresh_token": "556588585858585858585858858",
       "contact_phone_number": "8886033760"
     }
   ]

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Get an Advertiser User
   :page: empty

GET an Advertiser User
----------------------

GET `/advertisers/<advertiser_id>/users/<user_id>`

Examples
""""""""
----

Read a specific advertiser user

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users/549494858585Dxlj2uCX0ijqXP4nAW.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   {
     "email_address": "chris@nfltix.com",
     "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
     "first_name": "Chris",
     "contact_country_code": "1",
     "last_name": "Dean",
     "role": "Manager",
     "oauth_refresh_token": "556588585858585858585858858",
     "contact_phone_number": "8886033760"
   }

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;/users
   :description: Create an Advertiser User
   :page: empty

Create and Advertiser User (POST)
---------------------------------

POST `/advertisers/<advertiser_id>/users`

Examples
""""""""
----

Create an advertiser user

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json`

Request Body:

.. code-block:: json

   {
     "user": {
       "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
       "email_address": "chris@nfltix.com",
       "first_name": "Chris",
       "last_name": "Dean",
       "contact_phone_number": "8055555555",
       "oauth_refresh_token": "556588585858585858585858858",
       "role": "Manager"
     }
   }

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Update an Advertiser User
   :page: empty

Update an Advertiser User (PUT)
-------------------------------

PUT `/advertisers/<advertiser_id>/users/<user_id>`

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Delete an Advertiser User
   :page: empty

DELETE An Advertiser User
-------------------------

DELETE `/advertisers/<advertiser_id>/users/<user_id>`


Examples
""""""""
----

Delete an advertiser user

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users/549494858585Dxlj2uCX0ijqXP4nAW.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   {
   }
