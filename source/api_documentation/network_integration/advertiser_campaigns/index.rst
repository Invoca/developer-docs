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

  * - name
    - string
    - Campaign name.

  * - campaign_type
    - string
    - 2 Campaign Types Supported: “AffiliateEnabled” ‐ Advertiser Campaign that allows Affiliates to promote it. Includes Payin and Payouts for qualified Calls. “DirectOnly” ‐ Advertiser Campaign used for internal marketing. No ability to promote via Affiliates or setup Payin and Payouts for Calls.

  * - description
    - string
    - Campaign Description.

  * - url
    - string
    - Click URL Template.

  * - timezone
    - string
    - Supported Time Zones: http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html

  * - campaign_language
    - string
    - Supported Campaign Languages: “English", "French", "Spanish".


  * - operating_24_7
    - boolean
    -

  * - **affiliate_payout**
    -
    -

  * - currency
    - string
    - USD, GBP, EUR.

  * - **policies**
    -
    -

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

  * - currency
    - string
    - Supported Currencies: ‐ USD, GBP, EUR.

  * - **policies**
    -
    -

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

  * - max_promo_numbers
    - integer
    - Maximum Promo Numbers.

  * - **concurrent_call_cap_alert**
    -
    -

  * - budget_amount
    - decimal (required)
    - Budget Amount.


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
    - Allows the caller to select from up to 9 choices (e.g. choosing a department, selecting a language, etc).

  * - Connect
    - prompt

      \*destination_phone_number

      \*destination_country_code

      \*destination_extension

    -

      Forwards the call to a selected phone number after optionally reading a prompt.

  * - EndCall
    - prompt
    - Ends the call after optionally reading a prompt.

  * - SmsPromo
    - \*prompt

      \*sms_promo_copy

      sms_promo_delay

      sms_promo_sender

    - Provide the option for a user to receive a text message with a special promotion.

  * - Condition
    - \*condition
    - If/else option for a call based on the qualities of the call/caller.

  * - VerifyLocation
    - prompt
    - Prompt the caller to verify the guessed location or confirm through input. Useful if geographical data is important or useful in a condition node.

Node Details

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Node Type
    - Details

  * - Menu
    - Can have 1‐9 child nodes, with each child corresponding to the 1‐9 buttons.

  * - Connect
    - May not have any children. The prompt will be read before connecting to the provided phone number.

  * - EndCall
    - May not have any children. The prompt will be read before connecting to the provided phone number.

  * - SmsPromo
    - May have exactly 1 child node. After accepting or declining the promotional sms, the child node will be played. To accept the promotional sms, the user must push 9 on the phone (this should be added as part of the prompt). Only numbers recognized as mobile phones will be offered the sms option.

  * - Condition
    - May have exactly 2 child nodes. If the conditions are met, the first child is played. If they are not met then the second child plays. See the conditions section and examples below for details on valid conditions.

  * - NearestBranch
    - May have exactly 1 child node. The caller will be prompted to verify their location prior to forwarding the call. If no branch is within ‘radius_miles’ of the caller then the child node will be played.

  * - VerifyLocation
    - May have exactly 1 child node. The prompt will play before verifying the callers location. The child node will be played after verifying the callers location.

Parameter Details

.. list-table::
  :widths: 20 8 60
  :header-rows: 1
  :class: parameters

  * - Node Type
    - Type
    - Value

  * - condition
    - String
    - The boolean condition that decided if the first or second child will be played in a condition node.

  * - destination_country_code
    - String
    - The country code for the destination_phone_number.

  * - destination_phone_number
    - String
    - The phone number to forward the caller to.

  * - destination_extension
    - String
    - Extension keypresses on the destination number. Commas indicate pause (e.g. 1,,,234 means a keypress of "1" is executed followed by a 3 second pause and an extension keypress of "234").

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


Endpoint
--------

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
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;
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
   :verb: GET
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/go_live
   :description: Set Campaign State to Live
   :page: get_advertiser_campaign_go_live

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/go_live
   :description: Set Campaign State to Live
   :page: post_advertiser_campaign_go_live

.. api_endpoint::
   :verb: GET
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/archive
   :description: Set Campaign State to Archived
   :page: get_advertiser_campaign_archive

.. api_endpoint::
   :verb: POST
   :path: /advertiser_campaigns/&lt;advertiser_campaign_id&gt;/archive
   :description: Set Campaign State to Archived
   :page: post_advertiser_campaign_archive

