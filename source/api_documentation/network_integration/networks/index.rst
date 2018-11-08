Networks
========

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

  * - can_login_via_platform
    - boolean (read-only)
    - Indicates if user can directly login with username and password. If false, the user is managed via SSO.


Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json``

.. api_endpoint::
   :verb: GET
   :path: /&lt;network_id&gt;/network
   :description: Get Network and its Users
   :page: get_network

.. api_endpoint::
   :verb: POST
   :path: /&lt;network_id&gt;/network
   :description: Create Network Users
   :page: post_network_users

.. api_endpoint::
   :verb: PUT
   :path: /&lt;network_id&gt;/network
   :description: Update Network Users
   :page: put_network_user

