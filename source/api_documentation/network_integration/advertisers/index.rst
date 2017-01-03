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
    - This user’s role in this organization. (A user may have different roles in different organizations)


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


Custom Data Dictionary
''''''''''''''''''''''''
The Custom Data Dictionary is a list of all of the fields that can be applied to the advertiser.
The dictionary is configured by an Invoca representative, and will be returned in each response when viewing or updating an advertiser under the field name ``custom_data_dictionary``.
The dictionary is read only and will be ignored in any create or update requests.

.. list-table::
  :widths: 11 8 40
  :header-rows: 1
  :class: parameters

  * - Field Value
    - Type
    - Value

  * - created_at
    - date
    - Date of creation for the particular field.

  * - friendly_name
    - string
    - The applied friendly name, used for display purposes.

  * - partner_name
    - string
    - The applied partner name, used for reference in APIs.

  * - field_values
    - array
    - Pre-configured values that users may choose from. These values are recommendations. The field may have other values applied.

  * - data_type
    - string
    - One of:

      * category

      * text_field

      * text_field_long

  * - default_data_mapping
    - string
    - The dynamic Invoca value that will be automatically applied to calls through the advertiser. E.g. Transaction ID, Destination Phone Number, etc.

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
