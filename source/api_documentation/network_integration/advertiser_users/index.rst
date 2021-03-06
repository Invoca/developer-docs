Advertiser Users
================

For convenience, the API provides an interface for performing operations on specific advertiser users. This is useful
for situations where it is inconvenient to send an array of all existing advertiser users. Actions for this endpoint can
only be taken on users with value of false for `<can_login_via_platform>` field, indicating that the user's authentication
is managed by the network (and has access to the Invoca platform using SSO).

Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/users/<user_id_from_network>.json``

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

