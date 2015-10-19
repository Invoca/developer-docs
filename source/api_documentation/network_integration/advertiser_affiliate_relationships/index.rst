Advertiser Affiliate Relationships
==================================

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

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/affiliates/<affiliate_id_from_network>.json``

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates
   :description: Get all Advertiser-Affiliate relationships
   :page: get_advertiser_affiliates

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Get an Advertiser-Affiliate relationship
   :page: get_advertiser_affiliate

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Create an Advertiser-Affiliate relationship
   :page: post_advertiser_affiliate

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Update an Advertiser-Affiliate relationship
   :page: put_advertiser_affiliate

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;/affiliates/&lt;affiliate_id&gt;
   :description: Delete an Advertiser-Affiliate relationship
   :page: delete_advertiser_affiliate

