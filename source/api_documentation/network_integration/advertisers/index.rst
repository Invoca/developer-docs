Advertisers
===========

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

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>.json``

.. api_endpoint::
   :verb: GET
   :path: /advertisers
   :description: Get all Advertisers
   :page: get_advertisers

.. api_endpoint::
   :verb: GET
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Get an Advertiser
   :page: get_advertiser

.. api_endpoint::
   :verb: DELETE
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Delete an Advertiser
   :page: delete_advertiser

.. api_endpoint::
   :verb: POST
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Create an Advertiser
   :page: post_advertiser

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Update an Advertiser
   :page: put_advertiser

