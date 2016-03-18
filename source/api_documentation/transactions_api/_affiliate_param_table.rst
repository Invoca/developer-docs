

..  list-table::
    :widths: 30 8 40
    :header-rows: 1
    :class: parameters

  * - Field
    - Name in Reports
    - Description

  * - address1
    - Address (Reported)
    - [Call center integration only] &nbsp;Customer's street address as given to the call center (first line).

  * - address2
    - Address 2 (Reported)
    - [Call center integration only] &nbsp;Customer's street address as given to the call center (second line).

  * - advertiser_campaign_id
    - @@Advertiser Campaign ID (Invoca ID)
    - The Invoca identifier of the campaign.

  * - advertiser_campaign_id_from_network
    - @@Advertiser Campaign ID
    - The Campaign ID from the network as set on the @@advertiser campaign.

  * - advertiser_campaign_name
    - @@Advertiser Campaign
    - Name of the campaign.

  * - advertiser_id
    - @@Advertiser ID (Invoca ID)
    - The Invoca identifier of the @@advertiser

  * - advertiser_id_from_network
    - @@Advertiser ID
    - @@Advertiser ID from the network as set on the Invoca @@advertiser.

  * - advertiser_name
    - @@Advertiser
    - Name of the @@advertiser.

  * - affiliate_payout_localized
    - Earnings
    - Amount paid out to the @@affiliate

  * - bundled_destination_ids
    - Bundled Destination Ids
    - Bundled Destination Ids

  * - bundled_destination_ids_from_network
    - Bundled Destination Ids From Network
    - Bundled Destination Ids

  * - call_center_call_id
    - Call Center Call Id
    - [Call center integration only] &nbsp;The unique identifier assigned to the call by the call center

  * - call_outcome_custom_parameter_1
    - Call Outcome Custom Param 1
    - Call Outcome Custom Param 1

  * - call_outcome_custom_parameter_2
    - Call Outcome Custom Param 2
    - Call Outcome Custom Param 2

  * - call_outcome_custom_parameter_3
    - Call Outcome Custom Param 3
    - Call Outcome Custom Param 3

  * - call_outcome_description
    - Call Outcome Description
    - [Outcome API only] The description of a Call Outcome, can contain alphanumeric characters.

  * - call_outcome_occurred_at
    - Call Outcome Occurred At
    - The timestamp that the Call Outcome occurred (defaults to when the Call Outcome was reported to Invoca), but when reporting via API the customer can override with a specific time.

  * - call_outcome_outcome_name
    - Outcome Name
    - The name of the Outcome that was reported.

  * - call_outcome_outcome_name_2
    - Outcome Name 2
    - Outcome Name 2

  * - call_outcome_partner_unique_id
    - Call Outcome Partner ID
    - [Outcome API only] Unique id from customer's system associated to the Call Outcome

  * - call_outcome_source
    - Call Outcome Source
    - The source of the Call Outcome ('Api' or 'Ivr').

  * - call_outcome_value
    - Call Outcome Value
    - Whether the outcome was met, 1 = outcome met, 0 = outcome not met (defaults to 1).

  * - call_result_description_detail
    - Call Result
    - Status of the transaction

  * - call_source_description
    - Source
    - Source of the transaction

  * - calling_phone_number
    - Caller ID
    - Caller ID. Formatted as 12 characters like "866-555-1234"

  * - cell_phone_number
    - Cell Phone (Reported)
    - [Call center integration only] &nbsp;Customer's cell phone number as given to the call center.

  * - city
    - City
    - City where transaction originated

  * - complete_call_id
    - Call Record ID
    - Globally unique identifier for the call this transaction is part of. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - connect_duration
    - Connected Duration (HH:MM:SS)
    - Duration in seconds that the call that was connected to the call center.

  * - corrected_at
    - Corrected At
    - [Correction only] &nbsp;Date and time the transaction was corrected, in user's time zone, followed by offset from GMT.

  * - corrects_transaction_id
    - Corrects Call
    - [Correction only] &nbsp;Id of the original transaction that this transaction updates. Values in this row are the corrected ones and should replace the original values. Same format as transaction_id. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - country
    - Country (Reported)
    - [Call center integration only] &nbsp;Customer's country as given to the call center.

  * - duration
    - Total Duration (HH:MM:SS)
    - Duration of the call in seconds. Includes any time spent in an IVR tree before transferring to the call center.

  * - dynamic_number_pool_id
    - Pool ID
    - [Number pooling links only] &nbsp;The ID of the pool.

  * - dynamic_number_pool_pool_type
    - Pool Type
    - [Number pooling links only] &nbsp;The type of pool: "Search", "SearchKeyword" or "Custom"

  * - dynamic_number_pool_referrer_ad
    - AdWords Ad
    - AdWords Ad Headline copy, provided by Google

  * - dynamic_number_pool_referrer_ad_group
    - AdWords Ad Group
    - AdWords Ad Group name, provided by Google

  * - dynamic_number_pool_referrer_ad_group_id
    - AdWords Ad Group ID
    - AdWords Ad Group ID, provided by Google

  * - dynamic_number_pool_referrer_ad_id
    - AdWords Ad ID
    - AdWords Ad ID, provided by Google

  * - dynamic_number_pool_referrer_param1
    - Dynamic Number Pool Referrer Param1 Value
    - [Number pooling links only] &nbsp;name=value for parameter 1, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param10
    - Dynamic Number Pool Referrer Param10 Value
    - [Number pooling links only] &nbsp;name=value for parameter 10, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param10_name
    - Pool Param 10 Name
    - [Number pooling links only] &nbsp;The name for parameter 10

  * - dynamic_number_pool_referrer_param10_value
    - Pool Param 10 Value
    - [Number pooling links only] &nbsp;The value for parameter 10

  * - dynamic_number_pool_referrer_param11_name
    - Pool Param 11 Name
    - [Number pooling links only] &nbsp;The name for parameter 11

  * - dynamic_number_pool_referrer_param11_value
    - Pool Param 11 Value
    - [Number pooling links only] &nbsp;The value for parameter 11

  * - dynamic_number_pool_referrer_param12_name
    - Pool Param 12 Name
    - [Number pooling links only] &nbsp;The name for parameter 12

  * - dynamic_number_pool_referrer_param12_value
    - Pool Param 12 Value
    - [Number pooling links only] &nbsp;The value for parameter 12

  * - dynamic_number_pool_referrer_param13_name
    - Pool Param 13 Name
    - [Number pooling links only] &nbsp;The name for parameter 13

  * - dynamic_number_pool_referrer_param13_value
    - Pool Param 13 Value
    - [Number pooling links only] &nbsp;The value for parameter 13

  * - dynamic_number_pool_referrer_param14_name
    - Pool Param 14 Name
    - [Number pooling links only] &nbsp;The name for parameter 14

  * - dynamic_number_pool_referrer_param14_value
    - Pool Param 14 Value
    - [Number pooling links only] &nbsp;The value for parameter 14

  * - dynamic_number_pool_referrer_param15_name
    - Pool Param 15 Name
    - [Number pooling links only] &nbsp;The name for parameter 15

  * - dynamic_number_pool_referrer_param15_value
    - Pool Param 15 Value
    - [Number pooling links only] &nbsp;The value for parameter 15

  * - dynamic_number_pool_referrer_param16_name
    - Pool Param 16 Name
    - [Number pooling links only] &nbsp;The name for parameter 16

  * - dynamic_number_pool_referrer_param16_value
    - Pool Param 16 Value
    - [Number pooling links only] &nbsp;The value for parameter 16

  * - dynamic_number_pool_referrer_param17_name
    - Pool Param 17 Name
    - [Number pooling links only] &nbsp;The name for parameter 17

  * - dynamic_number_pool_referrer_param17_value
    - Pool Param 17 Value
    - [Number pooling links only] &nbsp;The value for parameter 17

  * - dynamic_number_pool_referrer_param18_name
    - Pool Param 18 Name
    - [Number pooling links only] &nbsp;The name for parameter 18

  * - dynamic_number_pool_referrer_param18_value
    - Pool Param 18 Value
    - [Number pooling links only] &nbsp;The value for parameter 18

  * - dynamic_number_pool_referrer_param19_name
    - Pool Param 19 Name
    - [Number pooling links only] &nbsp;The name for parameter 19

  * - dynamic_number_pool_referrer_param19_value
    - Pool Param 19 Value
    - [Number pooling links only] &nbsp;The value for parameter 19

  * - dynamic_number_pool_referrer_param1_name
    - Pool Param 1 Name
    - [Number pooling links only] &nbsp;The name for parameter 1

  * - dynamic_number_pool_referrer_param1_value
    - Pool Param 1 Value
    - [Number pooling links only] &nbsp;The value for parameter 1

  * - dynamic_number_pool_referrer_param2
    - Dynamic Number Pool Referrer Param2 Value
    - [Number pooling links only] &nbsp;name=value for parameter 2, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param20_name
    - Pool Param 20 Name
    - [Number pooling links only] &nbsp;The name for parameter 20

  * - dynamic_number_pool_referrer_param20_value
    - Pool Param 20 Value
    - [Number pooling links only] &nbsp;The value for parameter 20

  * - dynamic_number_pool_referrer_param21_name
    - Pool Param 21 Name
    - [Number pooling links only] &nbsp;The name for parameter 21

  * - dynamic_number_pool_referrer_param21_value
    - Pool Param 21 Value
    - [Number pooling links only] &nbsp;The value for parameter 21

  * - dynamic_number_pool_referrer_param22_name
    - Pool Param 22 Name
    - [Number pooling links only] &nbsp;The name for parameter 22

  * - dynamic_number_pool_referrer_param22_value
    - Pool Param 22 Value
    - [Number pooling links only] &nbsp;The value for parameter 22

  * - dynamic_number_pool_referrer_param23_name
    - Pool Param 23 Name
    - [Number pooling links only] &nbsp;The name for parameter 23

  * - dynamic_number_pool_referrer_param23_value
    - Pool Param 23 Value
    - [Number pooling links only] &nbsp;The value for parameter 23

  * - dynamic_number_pool_referrer_param24_name
    - Pool Param 24 Name
    - [Number pooling links only] &nbsp;The name for parameter 24

  * - dynamic_number_pool_referrer_param24_value
    - Pool Param 24 Value
    - [Number pooling links only] &nbsp;The value for parameter 24

  * - dynamic_number_pool_referrer_param25_name
    - Pool Param 25 Name
    - [Number pooling links only] &nbsp;The name for parameter 25

  * - dynamic_number_pool_referrer_param25_value
    - Pool Param 25 Value
    - [Number pooling links only] &nbsp;The value for parameter 25

  * - dynamic_number_pool_referrer_param2_name
    - Pool Param 2 Name
    - [Number pooling links only] &nbsp;The name for parameter 2

  * - dynamic_number_pool_referrer_param2_value
    - Pool Param 2 Value
    - [Number pooling links only] &nbsp;The value for parameter 2

  * - dynamic_number_pool_referrer_param3
    - Dynamic Number Pool Referrer Param3 Value
    - [Number pooling links only] &nbsp;name=value for parameter 3, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param3_name
    - Pool Param 3 Name
    - [Number pooling links only] &nbsp;The name for parameter 3

  * - dynamic_number_pool_referrer_param3_value
    - Pool Param 3 Value
    - [Number pooling links only] &nbsp;The value for parameter 3

  * - dynamic_number_pool_referrer_param4
    - Dynamic Number Pool Referrer Param4 Value
    - [Number pooling links only] &nbsp;name=value for parameter 4, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param4_name
    - Pool Param 4 Name
    - [Number pooling links only] &nbsp;The name for parameter 4

  * - dynamic_number_pool_referrer_param4_value
    - Pool Param 4 Value
    - [Number pooling links only] &nbsp;The value for parameter 4

  * - dynamic_number_pool_referrer_param5
    - Dynamic Number Pool Referrer Param5 Value
    - [Number pooling links only] &nbsp;name=value for parameter 5, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param5_name
    - Pool Param 5 Name
    - [Number pooling links only] &nbsp;The name for parameter 5

  * - dynamic_number_pool_referrer_param5_value
    - Pool Param 5 Value
    - [Number pooling links only] &nbsp;The value for parameter 5

  * - dynamic_number_pool_referrer_param6
    - Dynamic Number Pool Referrer Param6 Value
    - [Number pooling links only] &nbsp;name=value for parameter 6, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param6_name
    - Pool Param 6 Name
    - [Number pooling links only] &nbsp;The name for parameter 6

  * - dynamic_number_pool_referrer_param6_value
    - Pool Param 6 Value
    - [Number pooling links only] &nbsp;The value for parameter 6

  * - dynamic_number_pool_referrer_param7
    - Dynamic Number Pool Referrer Param7 Value
    - [Number pooling links only] &nbsp;name=value for parameter 7, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param7_name
    - Pool Param 7 Name
    - [Number pooling links only] &nbsp;The name for parameter 7

  * - dynamic_number_pool_referrer_param7_value
    - Pool Param 7 Value
    - [Number pooling links only] &nbsp;The value for parameter 7

  * - dynamic_number_pool_referrer_param8
    - Dynamic Number Pool Referrer Param8 Value
    - [Number pooling links only] &nbsp;name=value for parameter 8, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param8_name
    - Pool Param 8 Name
    - [Number pooling links only] &nbsp;The name for parameter 8

  * - dynamic_number_pool_referrer_param8_value
    - Pool Param 8 Value
    - [Number pooling links only] &nbsp;The value for parameter 8

  * - dynamic_number_pool_referrer_param9
    - Dynamic Number Pool Referrer Param9 Value
    - [Number pooling links only] &nbsp;name=value for parameter 9, url escaped. Example: name%3Dvalue

  * - dynamic_number_pool_referrer_param9_name
    - Pool Param 9 Name
    - [Number pooling links only] &nbsp;The name for parameter 9

  * - dynamic_number_pool_referrer_param9_value
    - Pool Param 9 Value
    - [Number pooling links only] &nbsp;The value for parameter 9

  * - dynamic_number_pool_referrer_referrer_campaign
    - AdWords Campaign
    - AdWords Campaign name, provided by Google

  * - dynamic_number_pool_referrer_referrer_campaign_id
    - AdWords Campaign ID
    - AdWords Campaign ID, provided by Google

  * - dynamic_number_pool_referrer_search_engine
    - Traffic Source
    - [Number pooling links only] &nbsp;Search engine used.

  * - dynamic_number_pool_referrer_search_keywords
    - Keywords
    - [Number pooling links only] &nbsp;Search keywords used

  * - dynamic_number_pool_referrer_search_keywords_id
    - AdWords Keywords ID
    - AdWords Keyword ID, provided by Google

  * - dynamic_number_pool_referrer_search_type
    - Search Type
    - [Number pooling links only] &nbsp;"Paid" or "Organic".

  * - email_address
    - Email Address (Reported)
    - [Call center integration only] &nbsp;Email address as given to the call center.

  * - external_data
    - External Data
    - Additional data associated with the transaction

  * - home_phone_number
    - Home Phone (Reported)
    - [Call center integration only] &nbsp;Customer's home phone number as given to the call center.

  * - ivr_duration
    - IVR Duration (HH:MM:SS)
    - Duration in seconds that the call spent in the IVR tree.

  * - keypress_1
    - Key 1
    - Name of the first key that was pressed

  * - keypress_2
    - Key 2
    - Name of the second key that was pressed

  * - keypress_3
    - Key 3
    - Name of the third key that was pressed

  * - keypress_4
    - Key 4
    - Name of the fourth key that was pressed

  * - keypresses
    - Keypresses
    - List of unique keynames that were pressed during the call

  * - matching_affiliate_payout_policies
    - Matching @@Affiliate Payout Policies
    - List of @@affiliate policies that matched (<span class="code">base, bonus1, bonus2</span>, etc.) to determine the @@affiliate payout, separated by <span class="code">+</span>. For example, <span class="code">base+bonus2</span>. Note that if there was any @@affiliate payout, this field guaranteed to start with <span class="code">base</span>.

  * - media_type
    - Media Type
    - Media type of the transaction source

  * - mobile
    - Phone Type
    - "Landline" or "Mobile" or empty string if type is unknown

  * - name
    - Name (Reported)
    - [Call center integration only] &nbsp;Customer's full name as given to the call center.

  * - notes
    - Notes
    - Free-form notations on transaction

  * - opt_in_SMS
    - Opt In Sms
    - Whether the caller opted in to receive an SMS promotion.

  * - order_city
    - City (Reported)
    - [Call center integration only] &nbsp;Customer's city as given to the call center.

  * - original_order_id
    - Order ID
    - [Sales reporting only] &nbsp;Id of the original transaction that this row is in reference to. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - payout_conditions
    - Payout Conditions
    - Base condition with { highlighting } around the term(s) that disqualified affiliate payout.<br /> For example:<br /><span class="code">duration > 1 min and {in_region}</span>

  * - promo_line_description
    - Promo Number Description
    - Additional details about the transaction source

  * - qualified_regions
    - Qualified Regions
    - The list of regions that that the caller matched

  * - quantity_list
    - Quantity List
    - [Call center integration only] &nbsp;Comma-separated list of order quantities as reported by the call center. Each quantity in the list matches the sku_list entry in that same position.

  * - reason_code
    - Reason Code
    - [Call center integration only] &nbsp;Call center-specific status code giving the disposition of the call.

  * - recording
    - Recording
    - URL to the call recording, if available

  * - region
    - Region
    - Region (state, province or country) where transaction originated

  * - repeat_calling_phone_number
    - Repeat Caller
    - Whether the call was a repeat call. Repeat call detection is not applied to shared or unavailable caller ids.

  * - sale_amount
    - Sale Amount
    - [Call center integration only] &nbsp;Total order amount (not including shipping) as reported by the call center.

  * - sku_list
    - SKU List
    - [Call center integration only] &nbsp;Comma-separated list of order SKUs as reported by the call center.

  * - start_time_local
    - Call Start Time
    - Start of the call in the API user's time zone, followed by offset from GMT.

  * - start_time_utc
    - Call Start Time (UTC timestamp)
    - Start of the call in milliseconds since Jan 1, 1970. Divide by 1000 to get Unix epoch time.

  * - start_time_xml
    - Call Start Time (XML formatted)
    - Start of the call in Soap XML formatted time.

  * - state_or_province
    - State or Province (Reported)
    - [Call center integration only] &nbsp;Customer's state or province as given to the call center.

  * - syndicated_ident
    - Syndicated ID
    - The syndicated id for this call.  Uniquely identifies syndication sources for a campaign.

  * - transaction_id
    - Transaction ID
    - Globally unique identifier for this transaction. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-". This is the Primary Key of the results.

  * - transaction_type
    - Type
    - The type of transaction - Call or Reported Conversion.

  * - transfer_from_type
    - Transfer Type
    - Where the call came from

  * - verified_zip
    - Verified Zip Code
    - Zip Code entered by callers when prompted during call treatment

  * - virtual_line_id
    - Promo Number ID
    - The Promo Number ID from the network

  * - zip_code
    - Zip Code (Reported)
    - [Call center integration only] &nbsp;Customer's zip code as given to the call center.


