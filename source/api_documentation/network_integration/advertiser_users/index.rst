Advertiser Users
================

For convenience, the API provides an interface for performing operations on specific advertiser users. This is useful
for situations where it is inconvenient to send an array of all existing advertiser users.

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/users/<user_id_from_network>.json`

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/users
   :description: Get all Advertiser Users for Advertiser
   :page: get_advertiser_users

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Get an Advertiser User
   :page: get_advertiser_user

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;/users
   :description: Create an Advertiser User
   :page: post_advertiser_users

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Update an Advertiser User
   :page: put_advertiser_user

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;/users/&lt;user_id&gt;
   :description: Delete an Advertiser User
   :page: delete_advertiser_user

