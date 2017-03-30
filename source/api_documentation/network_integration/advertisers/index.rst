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

  * - id
    - integer (read-only)
    - The internal Invoca id for this Advertiser.

  * - id_from_network
    - string (required)
    - The network id for this Advertiser. Unique within network. Not required when auto-generation is enabled at network level.

  * - name
    - string (required)
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

  * - default_creative_id_from_network
    - integer
    -

  * - object_url
    - string (read-only)
    - URL for reaching the advertiser in the UI.

  * - **sites**
    - json array of hashes
    - 1 or more pairs of id_from_network [and name].

  * - id_from_network
    - integer site_id (PID)
    - The site_id (PID). At least one is required. The first becomes the default.

  * - name
    - string
    - The site name that matches site_id.

  * - **users**
    - JSON array of hashes
    - 0 or more users for the organization. Each must have first 5 fields below.

  * - id_from_network
    - string
    - The network id for this User.

  * - email_settings
    - JSON array of hashes
    - Each hash has two required fields:

      ``email_address``: string in RFC 2822 addr-spec format. The user’s email address. Unique for this user.

      ``use_for_notifications``: boolean used to indicate if notifications should be sent to the email address.

      A user must have at least one email address where ``use_for_notifications`` is true.

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
    - This user’s role in this organization. (A user may have different roles in different organizations)

  * - notify_on_budgets
    - boolean, optional, defaults to false
    - 

  * - notify_on_campaign_applications
    - boolean, optional, defaults to false
    - 

  * - notify_on_campaign_expirations
    - boolean, optional, defaults to false
    - 

  * - notify_on_creative_duplication_requests
    - boolean, optional, defaults to false
    - 

  * - notify_on_network_announcements
    - boolean, optional, defaults to false
    - 

  * - notify_on_performance_notifications
    - boolean, optional, defaults to false
    - 

  * - notify_on_monthly_campaign_performance_reports
    - boolean, optional, defaults to false
    - 

  * - notify_on_weekly_campaign_performance_reports
    - boolean, optional, defaults to false
    - 

  * - notify_on_call_activities
    - boolean, optional, defaults to false
    - 


Custom Data
'''''''''''''
Advertisers may have Custom Data Fields applied to them, which will be applied to calls originating through the advertiser.
To apply Custom Data Values to an advertiser, the top level parameter ``custom_data`` should be assigned a hash with each pair's key corresponding to a partner name.
The value of the pair should be the value to be applied.

For the following example, we would apply the value "Offline newspaper" to the Custom Data Field "channel".

.. code-block:: json

  {
    "custom_data": {
      "channel": "Offline newspaper"
    }
  }


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
   :path: /advertisers
   :description: Create an Advertiser
   :page: post_advertiser

.. api_endpoint::
   :verb: PUT
   :path: /advertisers/&lt;advertiser_id&gt;
   :description: Update an Advertiser
   :page: put_advertiser
