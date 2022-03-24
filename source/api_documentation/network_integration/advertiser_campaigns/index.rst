Advertiser Campaigns
====================

Advertiser Campaigns can be managed using the Network API. In addition to create, update, and show operations, this interface provides additional endpoints including go_live, archive, and quick_stats.

Note that the `<advertiser_id_from_network>` and `<advertiser_campaign_id_from_network>` are the network’s id for those objects, not Invoca’s.

``/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

We support passing back current_terms and future_terms on campaigns. The current properties of the campaign are reflected in current_terms. All changes to the campaign are staged in future_terms. Once the campaign goes live, future_terms transition over to current_terms.

You can set budgets on your campaign. There are three budget types, budget_cap_alert which is based on commissions, periodic_call_cap_alert, which is based on the number of calls in a given period, and concurrent_call_cap_alert, which is based on the number of simultaneous calls. These budget activities are only applicable for AffiliateEnabled campaigns (Known in the platform as a “Publisher Promotion” Campaign Type.)

You are not allowed to delete campaigns.

.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id
    - integer (read-only)
    - The internal Invoca id for this Advertiser Campaign.

  * - id_from_network
    - string
    - The network object_id for this Advertiser Campaign. Unique within network. Not required when auto-generation is enabled at network level.

  * - name
    - string
    - Campaign name.

  * - campaign_type
    - string
    - 3 Campaign Types Supported:

      * **AffiliateEnabled:** Advertiser Campaign that allows Affiliates to promote it. Includes Payin and Payouts for qualified Calls. 
      * **DirectOnly:** Advertiser Campaign used for internal marketing. No ability to promote via Affiliates or setup Payin and Payouts for Calls.
      * **ExternalOnly:** Advertiser Campaign used for external calls uploaded via the Call Ingestion API. See :doc:`../../call_ingestion_api/index` for more details.

  * - description
    - string
    - Campaign Description.

  * - url
    - string
    - Click URL Template.

  * - object_url
    - string (read-only)
    - URL for reaching the advertiser campaign in the UI.

  * - timezone
    - string
    - Supported Time Zones: http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html

  * - campaign_language
    - string
    - Supported Campaign Languages: “English", "French", "Spanish".

  * - campaign_country
    - string
    - Supported Countries: “US", "CA", "UK", "AU", "CN", "FI", "FR", "DE", "HK", "IT", "JP", "NL", "SG", "SE", "CH".

  * - operating_24_7
    - boolean
    -

  * - **affiliate_payout**
    -
    -

  * - **policies**
    -
    -

  * - currency
    - string
    - USD, GBP, EUR.

  * - amount
    - decimal
    - Payout Amount.

  * - condition
    - string
    - Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS All may be grouped with logic operators (AND/OR/NOT).

  * - type
    - string
    - One of: Base, Bonus.

  * - **advertiser_payin**
    -
    -

  * - **policies**
    -
    -

  * - currency
    - string
    - Supported Currencies: ‐ USD, GBP, EUR.

  * - amount
    - integer
    - Advertiser Payin Amount.

  * - condition
    - string
    - Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS. All may be grouped with logic operators (AND/OR/NOT).

  * - type
    - string
    - One of: Base, Bonus.

  * - **hours**
    -
    -

  * - [day of week]_open (e.g. friday_open)
    - string
    - Open Hours. In seconds past midnight (e.g. 0 for midnight, 32400 for 9:00 AM).

  * - [day of week]_close (e.g. friday_close)
    - string
    - Closed Hours. In seconds past midnight (e.g. 0 for midnight, 75600 for 9:00 PM).

  * - [day of week]_closed (e.g. sunday_closed)
    - string
    - true, false, or null. Whether the business is closed that day of the week.

  * - **named_regions**
    -
    -

  * - name
    - string
    - Region Name.

  * - **regions**
    -
    -

  * - region_type
    - string
    - Region Type. Can be one of: Zone, City, State, Country.

  * - value
    - string
    - Region Value, e.g. “Sacramento, CA”, or just “CA”.

  * - ivr_tree
    - hash
    - See following Advertiser Campaign IVR Section.

  * - **budget_activities**
    -
    -  Only applicable for AffiliateEnabled campaigns.

  * - **budget_cap_alert**
    -
    -

  * - reset_period
    - string  (required)
    - Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.

  * - starts_at
    - date (required)
    - Budget Start.

  * - budget_currency
    - string (required)
    - Budget Currency.

  * - time_zone
    - string (required)
    - Supported Time Zones: “Pacific Time (US & Canada)”, “Mountain Time (US & Canada)”, “Central Time (US & Canada)”, “Eastern Time (US & Canada)”, “London”, “UTC”.

  * - budget_amount
    - decimal (required)
    - Budget Amount.

  * - include_call_fees
    - boolean
    - True if you want call fees to be included in the budget.

  * - **periodic_call_cap_alert**
    -
    -

  * - reset_period
    - string (required)
    - Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.

  * - starts_at
    - date (required)
    - Call Cap Start.

  * - budget_currency
    - string (required)
    - Budget Currency.

  * - time_zone
    - string (required)
    - Supported Time Zones: “Pacific Time (US & Canada)”, “Mountain Time (US & Canada)”, “Central Time (US & Canada)”, “Eastern Time (US & Canada)”, “UTC”.

  * - budget_amount
    - decimal (required)
    - Budget Amount.

  * - auto_approve
    - string
    - One of: All, None, Approved_Affiliates Default: None This controls if affiliates are automatically approved when applying to the campaign.

  * - visibility
    - string
    - One of: All, None, Approved_Affiliates Default: All This controls the level of visibility publishers have when applying to campaigns.

  * - expiration_date
    - string
    - date string (ex. ‘2015‐01‐01’). Read only.

  * - default_creative_id_from_network
    - integer
    - Default Creative ID.

  * - **concurrent_call_cap_alert**
    -
    -

  * - budget_amount
    - decimal (required)
    - Budget Amount.

  * - timeout
    - integer
    - Seconds to wait for the campaign to go live. Between 2 and 60.

Advertiser Campaign IVRs
------------------------

When creating an advertiser campaign, you need to provide some call flow logic through an IVR tree. Depending on the advertiser/campaign type (direct, bundled, etc) you may use the following node types:

Node Parameters and Usage

\* => required parameter

.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Node Type
    - Parameters
    - Usage

  * - Menu
    - \*prompt

      asr_phrases

      confirm_response_enabled

    - Allows the caller to select from up to 9 choices (e.g. choosing a department, selecting a language, etc).

  * - Connect
    - prompt

      \*destination_phone_number

      \*destination_country_code

      \*destination_extension

      asr_phrases

    - Forwards the call to a selected phone number after optionally reading a prompt.

  * - EndCall
    - prompt

      asr_phrases

    - Ends the call after optionally reading a prompt.

  * - SmsPromo
    - \*prompt

      \*sms_promo_copy

      sms_promo_delay

      sms_promo_sender

      asr_phrases

    - Provide the option for a user to receive a text message with a special promotion.

  * - Condition
    - \*condition

      asr_phrases

    - If/else option for a call based on the qualities of the call/caller.

  * - VerifyLocation
    - prompt

      asr_phrases

    - Prompts the caller to verify the guessed location or confirm through input. Useful if geographical data is important or useful in a condition node.

  * - DynamicRoute (beta - read only)
    - \*dynamic_route_destination

      asr_phrases

    - Forwards the call to a destination that is extracted from a custom data field specified in dynamic_route_destination. The destination must be a phone number or if you are SIP integrated, can be a string that is routable by your SIP infrastructure.

  * - AnyKeyPress
    - \*prompt

      asr_phrases

    - Prompts the caller to make any keypress to continue the call.

  * - NumberQuestion
    - \*prompt

      \*number_question_type

      confirm_response_enabled

      error_prompt_disabled

      custom_error_prompt_text

      caller_response_custom_data_partner_name

      asr_phrases

    - Prompts the caller to respond with a multi-digit number (e.g. Phone Number, Date) and validates it if applicable. The caller's response may be saved to a marketing data field.

  * - YesOrNo
    - \*prompt

      confirm_response_enabled

      error_prompt_disabled

      custom_error_prompt_text

      asr_phrases

    - Prompts the caller to respond with either a yes or no answer. The caller's response determines how the call will continue.

Node Details

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Node Type
    - Details

  * - Menu
    - Can have 1‐9 child nodes, with each child corresponding to keypresses 1-9. At the end of the child list, it can also optionally have failover child nodes designated by a node with a keypress_failover_type parameter (see example below). If speech recognition is enabled, the caller may also respond verbally with their menu choice, including using the phrases that have been configured in field asr_phrases for each of the child nodes. (e.g. the caller can say "sales" or "one" for 1, and "support" or "two" for 2).

  * - Connect
    - May not have any children. The prompt will be read before connecting to the provided phone number.

  * - EndCall
    - May not have any children. The prompt will be read before ending the call.

  * - SmsPromo
    - May have exactly 1 child node. After accepting or declining the promotional sms, the child node will be executed. To accept the promotional sms, the user must push 9 on the phone (this should be added as part of the prompt). Only numbers recognized as mobile phones will be offered the sms option.

  * - Condition
    - May have exactly 2 child nodes. If the conditions are met, the first child node is executed. If they are not met then the second child node is executed. See the conditions section and examples below for details on valid conditions.

  * - NearestBranch
    - May have exactly 1 child node. The caller will be prompted to verify their location prior to forwarding the call. If no branch is within ‘radius_miles’ of the caller then the child node will be executed.

  * - VerifyLocation
    - May have exactly 1 child node. The prompt will play before verifying the callers location. The child node will be executed after verifying the callers location.

  * - DynamicRoute (beta - read only)
    - May have exactly 1 child node. We will evaluate the custom data field value specified on this node's dynamic_route_destination. With non-SIP integration, if the extracted value is a valid phone number and the destination phone number is in an allowed region given your settings, we will play the prompt and transfer the call, otherwise the child node will be executed without the prompt. When SIP integrated, we also allow transferring to any string (such as an extension), in which case the destination should be routable by your SIP infrastructure.

  * - AnyKeyPress
    - May have exactly 2 child nodes. If any keypress is made, the first child node is executed. If no keypress is made, then the second child node is executed.

  * - NumberQuestion
    - May have exactly 1 child node. Requires a question type to be selected (e.g. Phone Number, Date). The prompt will play before the caller answers the question. The answer may be saved in a marketing data field. At the end of the child list, this node type can also optionally have failover child nodes, designated by a node with a keypress_failover_type parameter (see example below).

  * - YesOrNo
    - May have exactly 2 child nodes. If a keypress of 1 is made, the first child node is executed. If a kepyress of 2 is made, the second child node is executed. If speech recognition is enabled, the caller can also say "yes" for 1 and "no" for 2. At the end of the child list, this node type can also optionally have failover child nodes, designated by a node with a keypress_failover_type parameter (see example below).

Parameter Details

.. list-table::
  :widths: 20 8 60
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - asr_phrases
    - Array of hashes
    - A list of phrases that apply to the child of a Menu node. Can only be used when speech recognition is enabled. Allows the caller to respond verbally with one of the configured phrases instead of making a keypress. For example, the first child of a Menu node may have a value of [{"phrase": "sales"}, {"phrase": "support"}] for "asr_phrases", where the caller may say "sales" or "support" to select the Menu option instead of pressing 1.

  * - caller_response_custom_data_partner_name
    - String
    - The partner name of the custom data field that will be used to save the caller's response to the NumberQuestion prompt.

  * - condition
    - String
    - The boolean condition that decided if the first or second child will be executed in a condition node.

  * - confirm_response_enabled
    - Boolean
    - When enabled, the system will read back the caller's answer to the prompt and ask for confirmation. The caller can press 1 for "yes" and 2 for "no". If speech recogition is enabled, callers can also confirm their response by saying "yes" or "no".

  * - custom_error_prompt_text
    - String
    - Custom text that will be played to the caller when they provide an invalid response or no response.

  * - destination_country_code
    - String
    - The country code for the destination_phone_number.

  * - destination_phone_number
    - String
    - The phone number to forward the caller to.

  * - destination_extension
    - String
    - Extension keypresses on the destination number. Commas indicate pause (e.g. 1,,,234 means a keypress of "1" is executed followed by a 3 second pause and an extension keypress of "234").

  * - dynamic_route_destination (beta - read only)
    - Strings
    - The custom data field partner name you want to use as the destination in a dynamic route node. Typically a phone number in e164 format.

  * - error_prompt_disabled
    - Boolean
    - If set to true, no error sound or prompt will play when the caller provides an invalid response or no response. If set to false, when the caller provides an invalid response or no response, an error sound will play, or you can optionally define a custom error prompt via the parameter custom_error_prompt_text.

  * - keypress_failover_type
    - String
    - The failover type to use for a child node of a Menu. "Wrong" for when a wrong keypress is pressed by the caller on any attempt for the parent menu (shown in reporting as keypress "W"). "None" for when there is no keypress by the caller for all attempts for the parent menu (shown in reporting as keypress "N"). Omit this parameter for normal keypresses. See example below.

  * - number_question_type
    - String
    - The type of question you want to ask as part of the NumberQuestion node type. This may be "Digits", "Number", "PhoneNumber", "Date", "Currency", "Time", or "ZipCode".

  * - prompt
    - String
    - The text that will be read before a nodes action occurs. An empty string will result in no prompt being read, and the following action will occur immediately.

  * - sms_promo_copy
    - String
    - The text that will be sent to the caller if they accept the promotional sms.

  * - sms_promo_delay
    - Integer
    - The time delay in seconds before sending the promotional sms. This may be 1 (Immediately), 1800 (30 minutes), 86400 (1 day), 604800 (7 days), or 2592000 (30 days).

  * - sms_promo_sender
    - String
    - The email address that will be shown in the sms. This defaults to sms@invoca.net.

Conditions

.. list-table::
  :widths: 7 40
  :header-rows: 1
  :class: parameters

  * - Condition
    - Details

  * - during_hours
    - True if the caller is calling during the hours specified in the campaign.

  * - in_region
    - True if the caller is calling from the region specified in the campaign.

  * - landline
    - True if the caller is calling from a landline phone.

  * - mobile
    - True if the caller is calling from a mobile phone.

  * - pressed[key]
    - True if the caller pressed the named key.

  * - repeat
    - True if the caller has already called this campaign in the last N days (the interval N can be set on the campaign; the default is 30 days).

  * - sms_sent
    - The caller chose to receive a text message during the call.

  * - and
    - Joins two conditions and is true if both conditions are true.

  * - or
    - Joins two conditions and is true if either condition is true.

  * - not
    - Inverts the following condition.

  * - ( )
    - Used for grouping.



Example Conditions

.. list-table::
  :widths: 40 11
  :header-rows: 1
  :class: parameters

  * - Example
    - Condition

  * - Call duration was a minute and a half or longer
    - duration >= 1 min 30 sec.

  * - Call came in during business hours
    - during_hours.

  * - Call was from a mobile phone where the caller pressed the 2 key in response to the first menu
    - mobile and pressed[2].

  * - Call was from the selected geographic region or was longer than 12 seconds
    - in_region or duration > 12 sec.

  * - Caller pressed 1 to the first question in a series and was not in the geographic region or calling during business hours
    - pressed[a 1] and not (in_region or during_hours).

Note that **and** is higher precedence than **or**. So if you use both in a condition like this:

``mobile or in_region and during_hours``

it is equivalent to this:

``mobile or (in_region and during_hours)``

Caller ID options can also be configured by optionally including a ``caller_id`` object inside ``ivr_tree``:

.. list-table::
  :widths: 10 20 20 30
  :header-rows: 1
  :class: parameters

  * - Setting
    - Mask
    - Example
    - Details

  * - "original"
    - None
    - { setting: "original" }
    - Display caller's caller id to call center agent. (Default)

  * - "promo"
    - None
    - { setting: "promo" }
    - Display affiliate promo number to call center agent. (Only if forwarding to a local number.)

  * - "specific"
    - String containing phone number
    - { setting: "specific", mask: "800-555-5555" }
    - Display a specific caller ID number.

  * - "partial"
    - String containing mask format
    - { setting: "partial", mask: "800-555-XXXX" }
    - Display caller's caller ID with digits replaced.

Custom Data
'''''''''''''
Advertiser campaigns may have Custom Data Fields applied to them, which will be applied to calls originating through the advertiser campaign.
To apply Custom Data Values to an advertiser campaign, the top level parameter ``custom_data`` should be assigned a hash with each pair's key corresponding to a partner name.
The value of the pair should be the value to be applied.

For the following example, we would apply the value "Offline newspaper" to the Custom Data Field "channel".

.. code-block:: json

  {
    "custom_data": {
      "channel": "Offline newspaper"
    }
  }


Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

.. api_endpoint::
   :verb: GET
   :path: /advertiser_campaigns
   :description: Get all campaigns for an Advertiser
   :page: get_advertiser_campaigns

.. api_endpoint::
   :verb: GET
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;
   :description: Get a campaign for an Advertiser
   :page: get_advertiser_campaign

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns
   :description: Create an Advertiser Campaign
   :page: post_advertiser_campaign

.. api_endpoint::
   :verb: PUT
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;
   :description: Update an Advertiser Campaign
   :page: put_advertiser_campaign

.. api_endpoint::
   :verb: GET
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/quick_stats
   :description: Quick Stats
   :page: get_advertiser_campaign_quick_stats

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/go_live
   :description: Set Campaign State to Live
   :page: post_advertiser_campaign_go_live

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/archive
   :description: Set Campaign State to Archived
   :page: post_advertiser_campaign_archive

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/unarchive
   :description: Unarchive a Campaign
   :page: post_advertiser_campaign_unarchive

Keypress Failover Type
--------------

**Example IVR Tree utilizing keypress_failover_type**

.. code-block:: json

  "ivr_tree": {
    "root": {
      "node_type":"Menu",
      "prompt":"Press 1 for sales, press 2 for support.",
      "children": [
        {
          "node_type": "Connect",
          "destination_phone_number": "8004377950",
          "destination_country_code": "1",
          "prompt": "Directing you to sales"
        },
        {
          "node_type": "Connect",
          "destination_phone_number": "8004377951",
          "destination_country_code": "1",
          "prompt": "Directing you to support"
        },
        {
          "node_type": "Connect",
          "destination_phone_number": "8004377952",
          "destination_country_code": "1",
          "prompt":"Forwarding you to an operator.",
          "keypress_failover_type":"Wrong"
        },
        {
          "node_type":"EndCall",
          "prompt":"No key was selected, goodbye.",
          "keypress_failover_type":"None"
        }
      ]
    }
  }

Error Handling
--------------

Forbidden – 403:

PUT/POST
''''''''

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertiser/<advertiser_id_from_network>/advertiser_campaign/<advertiser_campaign_id_from_network>/advertiser_campaigns/<advertiser_campaign_id>.json``

Content Type: application/json

Response Code: 403

**Request Body**

.. code-block:: json

  {
    "node_type":"Menu",
    "prompt":"Prompt text",
    "prompt_id_from_network":"",
    "prompt_url":null,
    "prompt_recieved":null,
    "children": [
      {
        "node_type":"Menu",
        "prompt":"",
        "prompt_id_from_network":"",
        "prompt_url":null,
        "prompt_recieved":null,
        "children": [
          {
            "node_type":"EndCall",
            "prompt":"",
            "prompt_id_from_network":"",
            "prompt_url":null,
            "prompt_recieved":null
          }
        ]
      }
    ]
  }

**Response Body**

.. code-block:: json

  {
    "error": {
      "ivr_tree": {
        "children": [
          {
            "0": {
              "prompt": [
                "cannot be empty"
              ]
            }
          }
        ]
      }
    }
  }

The number in error message represents the index of the child node in the tree, or in other words, it is the keypress of the node containing the error minus one.
