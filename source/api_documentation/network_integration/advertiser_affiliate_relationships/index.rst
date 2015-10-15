Advertiser Affiliate Relationships
==================================

----

Changes to the Relationship between Advertiser and Affiliate on the network platform are replicated to the Invoca platform using this API.
The operations on Advertiser‐Affiliate Relationships are similar to Network, in that the interface is fully idempotent, and the create and update commands will act as “create or update”.

Relationship status is set individually but reading is available for one or all relationships for an advertiser.

Parameters for the relationships are shown below

.. list-table::
  :widths: 11 34 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - affiliate_id_from_network
    - string
    - The network id for the affiliate. (read only)

  * - status
    - One of: Pending, Approved, Suspended, Declined, Deactivated
    - Status of the advertiser ‐ affiliate relationship.

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/affiliates/<affiliate_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates
   :description: Get all Advertiser-Affiliate relationships
   :page: get_advertiser_affiliates

GET all Advertiser-Affiliate relationships
------------------------------------------

GET `/advertisers/<advertiser_id>/affiliates`


Examples
""""""""
----

Read all relationships for advertiser id from network 1

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   [
     {
       "status": "Approved",
       "affiliate_id_from_network": "222"
     },
     {
       "status": "Approved",
       "affiliate_id_from_network": "34518"
     }
   ]

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Get an Advertiser-Affiliate relationship
   :page: get_advertiser_affiliate

GET an Advertiser-Affiliate relationship
----------------------------------------

GET `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


Examples
""""""""
----

Read a single relationship

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json`

Format: application/json

Response Code: 200

Response Body:

.. code-block:: json

   {
     "status": "Approved",
     "affiliate_id_from_network": "222"
   }

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Create an Advertiser-Affiliate relationship
   :page: post_advertiser_affiliate

Create an Advertiser-Affiliate relationship (POST)
--------------------------------------------------

POST `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


Examples
""""""""
----

Create relationship between Advertiser id from network 1 and Affiliate id from network 222

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json`

Format: application/json

Request Body:

.. code-block:: json

   {
     "status": "Approved"
   }

Response Code: 201

Response Body:

.. code-block:: json

   {
   }

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Update an Advertiser-Affiliate relationship
   :page: put_advertiser_affiliate

Update an Advertiser-Affiliate relationship (PUT)
-------------------------------------------------

PUT `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`

Update an Advertiser-Affiliate relationship

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Delete an Advertiser-Affiliate relationship
   :page: delete_advertiser_affiliate

DELETE An Advertiser-Affiliate relationship
-------------------------------------------

DELETE `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


Examples
""""""""
----

Delete a relationship

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json`

Response Code: 200
