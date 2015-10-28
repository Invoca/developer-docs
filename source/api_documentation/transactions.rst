Transactions
============

The Transactions API provides an interface for retrieving call transactions for your organization.
This provides you with a superset of the information available on the Reporting Details tab.
The API is designed to be polled at any interval over 5 minutes. You should store the last transaction id you have downloaded
in order to pass it as the start_after_transaction_id with the next request. Typical usage on the polling interval
is to repeatedly call the API until no rows are returned, meaning you have downloaded all transactions.
If an existing transaction is corrected, the correction will appear as a new transaction that refers to the original
through the corrects_transaction_id field. When you receive a correction, replace the original transaction's
attributes with the new attributes from the correction.

URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - csv
    - Comma-Separated Values, or really Anything-Separated Values (see column_separator= below). Returns an optional header row followed by one row for each transaction, with delimited values for each row. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERESION/networks/transactions/33.csv``

  * - xml
    - Returns an XML document with an array of Transaction elements. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERESION/networks/transactions/33.xml``

  * - json
    - Returns a JSON array of transaction objects. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERESION/networks/transactions/33.json``

Authentication
--------------

The API uses OAuth Authentication to authenticate that access is allowed.
Pass the OAuth Token like any other query parameter, however, please note that the OAuth token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page. You must be a super user to get an OAuth Token and use the API.

Query Parameters
----------------

The API takes the following optional query parameters:

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description

  * - from=
    - Starting date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-01. Inclusive.

  * - to=
    - Ending date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-07. Inclusive.

  * - limit=
    -  Max number of transactions to return at a time. Defaults to 1000. Limited to at most 4000.

  * - start_after_transaction_id=
    - Transaction_id to start retrieving after. This should be the last value retrieved previously. Default (or empty string) means start at the oldest.

  * - column_separator=
    - [.csv format only] Separator between columns. Default is , for comma-separated values. (Can be set to any other separator like \| for pipe-separated values or %09 for tab-separated values.)

  * - row_separator=
    -  [.csv format only] Separator between lines. Defaults to %0A for \n (line feed). Use %0D%0A for \r\n (carriage return + line feed).

  * - include_header=
    - [.csv format only] 1 to include a header row; 0 to omit the header row. Default is 1.

  * - force_quotes=
    - [.csv format only] 1 to quote all CSV fields; 0 to only quote fields that contain separators. Default is 0.

In order to ensure that all transactions are returned when using the from= and to= date query parameters,
you should store the last transaction id you have downloaded and pass it as the start_after_transaction_id to the next request.
Typical usage on the polling interval is to repeatedly call the API until no rows are returned, meaning you have downloaded all transactions.
Please note, the "to" and "from" date range parameters are both necessary, providing only one or the other will not filter the results.

Example:

Send request 1:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERESION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>&from=2015-03-26&to=2015-03-27``

returns 500 rows, grab the last transaction_id (in this example 500) and send request 2:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERESION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>U&from=2015-03-26&to=2015-03-27&start_after_transaction_id=500``

then repeat as necessary to get all call records within date range.

Response
--------

The data returned has the following fields:

.. list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters

  * - Field
    - Name in Reports
    - Description

  * - transaction_id
    - Transaction ID
    - Globally unique identifier for this transaction. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-". This is the Primary Key of the results.

  * - corrects_transaction_id
    - Corrects Call
    - [Correction only] Id of the original transaction that this transaction updates. Values in this row are the corrected ones and should replace the original values. Same format as transaction_id. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - transaction_type
    - Type
    - The type of transaction - Call, Sale or Web Conversion.

  * - original_order_id
    - Order ID
    - [Sales reporting only] Id of the original transaction that this row is in reference to. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - advertiser_id
    - Media Channel ID (Invoca ID)
    - The Invoca identifier of the media channel.

  * - advertiser_id_from_network
    - Media Channel ID
    - Media Channel ID from the network as set on the Invoca media channel.

  * - advertiser_name
    - Media Channel
    - Name of the media channel.

  * - advertiser_campaign_id
    - Media Channel Campaign ID (Invoca ID)
    - The Invoca identifier of the campaign.

  * - advertiser_campaign_id_from_network
    - Media Channel Campaign ID
    - The Campaign ID from the network as set on the media channel campaign.

  * - advertiser_campaign_name
    - Media Channel Campaign
    - Name of the campaign.

  * - affiliate_id
    - Media Outlet ID (Invoca ID)
    - The Invoca identifier of the media outlet.

  * - affiliate_id_from_network
    - Media Outlet ID
    - Media Outlet ID from the network as set on the Invoca media outlet.

  * - affiliate_name
    - Media Outlet
    - Name of the media outlet.

  * - affiliate_commissions_ranking
    - Media Outlet Commissions Ranking
    - Network ranking of media outlet's commissions (0 to 5, and -1 being 'new'). Blank if no media outlet.

  * - affiliate_call_volume_ranking
    - Media Outlet Volume Ranking
    - Network ranking of media outlet's call volume (0 to 5, and -1 being 'new'). Blank if no media outlet.

  * - affiliate_conversion_rate_ranking
    - Media Outlet Conversion Rate Ranking
    - Network ranking of media outlet's conversion rate (0 to 5, and -1 being 'new'). Blank if no media outlet.

  * - media_type
    - Media Type
    - Media type of the transaction source.

  * - call_source_description
    - Source
    - Source of the transaction.

  * - promo_line_description
    - Promo Number Description
    - Additional details about the transaction source.

  * - virtual_line_id
    - Promo Number ID
    - The Promo Number ID from the network.

  * - signal_1_value
    - Signal: Credit Card
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_2_value
    - Signal: Competitors
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_3_value
    - Signal: Rack Server
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_4_value
    - Signal: Blade Server
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_5_value
    - Signal: Power Play
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_6_value
    - Signal: Amazon
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_7_value
    - Signal: 7
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_8_value
    - Signal: Telecom Competitors
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_9_value
    - Signal: 9
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - signal_10_value
    - Signal: 10
    - Signals are configurable metrics that are tracked across calls, configured with rules about when the Signal is met (1 if Signal is met, 0 if Signal was applied to the call but not met, null if Signal was not applied to call)

  * - call_result_description_detail
    - Call Result
    - Status of the transaction.

  * - call_fee_localized
    - Fees
    - Telecommunications fee associated with transaction.

  * - advertiser_call_fee_localized
    - Media Channel Fees
    - Media Channel Telecommunications fee associated with transaction.

  * - city
    - City
    - City where transaction originated.

  * - region
    - Region
    - Region (state, province or country) where transaction originated.

  * - qualified_regions
    - Qualified Regions
    - The list of regions that that the caller matched.

  * - repeat_calling_phone_number
    - Repeat Caller
    - Whether the call was a repeat call. Repeat call detection is not applied to shared or unavailable caller ids.

  * - calling_phone_number
    - Caller ID
    - Caller ID. Formatted as 12 characters like "866-555-1234".

  * - mobile
    - Phone Type
    - "Landline" or "Mobile" or empty string if type is unknown.

  * - duration
    - Total Duration (HH:MM:SS)
    - Duration of the call in seconds. Includes any time spent in an IVR tree before transferring to the call center.

  * - connect_duration
    - Connected Duration (HH:MM:SS)
    - Duration in seconds that the call that was connected to the call center.

  * - ivr_duration
    - IVR Duration (HH:MM:SS)
    - Duration in seconds that the call spent in the IVR tree.

  * - keypresses
    - Keypresses
    - List of unique keynames that were pressed during the call.

  * - keypress_1
    - Key 1
    - Name of the first key that was pressed.

  * - keypress_2
    - Key 2
    - Name of the second key that was pressed.

  * - keypress_3
    - Key 3
    - Name of the third key that was pressed.

  * - keypress_4
    - Key 4
    - Name of the fourth key that was pressed.

  * - dynamic_number_pool_referrer_search_engine
    - Traffic Source
    - [Number pooling links only] Search engine used.

  * - dynamic_number_pool_referrer_search_keywords
    - Keywords
    - [Adwords only] Search keywords used

  * - dynamic_number_pool_referrer_search_keywords_id
    - AdWords Keywords ID
    - [Adwords only] AdWords Keyword ID, provided by Google.

  * - dynamic_number_pool_referrer_ad
    - AdWords Ad
    - [Adwords only] AdWords Ad Headline copy, provided by Google.

  * - dynamic_number_pool_referrer_ad_id
    - AdWords Ad ID
    - [Adwords only] AdWords Ad ID, provided by Google.

  * - dynamic_number_pool_referrer_ad_group
    - AdWords Ad Group
    - [Adwords only] AdWords Ad Group name, provided by Google.

  * - dynamic_number_pool_referrer_ad_group_id
    - AdWords Ad Group ID
    - [Adwords only] AdWords Ad Group ID, provided by Google.

  * - dynamic_number_pool_referrer_referrer_campaign
    - AdWords Campaign
    - [Adwords only] AdWords Campaign name, provided by Google.

  * - dynamic_number_pool_referrer_referrer_campaign_id
    - AdWords Campaign ID
    - [Adwords only] AdWords Campaign ID, provided by Google.

  * - dynamic_number_pool_referrer_param1_name
    - Pool Param 1 Name
    - [Number pooling links only] The name for parameter 1.

  * - dynamic_number_pool_referrer_param1_value
    - Pool Param 1 Value
    - [Number pooling links only] The value for parameter 1.

  * - dynamic_number_pool_referrer_param2_name
    - Pool Param 2 Name
    - [Number pooling links only] The name for parameter 2.

  * - dynamic_number_pool_referrer_param2_value
    - Pool Param 2 Value
    - [Number pooling links only] The value for parameter 2.

  * - dynamic_number_pool_referrer_param3_name
    - Pool Param 3 Name
    - [Number pooling links only] The name for parameter 3.

  * - dynamic_number_pool_referrer_param3_value
    - Pool Param 3 Value
    - [Number pooling links only] The value for parameter 3.

  * - dynamic_number_pool_referrer_param4_name
    - Pool Param 4 Name
    - [Number pooling links only] The name for parameter 4.

  * - dynamic_number_pool_referrer_param4_value
    - Pool Param 4 Value
    - [Number pooling links only] The value for parameter 4.

  * - dynamic_number_pool_referrer_param5_name
    - Pool Param 5 Name
    - [Number pooling links only] The name for parameter 5.

  * - dynamic_number_pool_referrer_param5_value
    - Pool Param 5 Value
    - [Number pooling links only] The value for parameter 5.

  * - dynamic_number_pool_referrer_param6_name
    - Pool Param 6 Name
    - [Number pooling links only] The name for parameter 6.

  * - dynamic_number_pool_referrer_param6_value
    - Pool Param 6 Value
    - [Number pooling links only] The value for parameter 6.

  * - dynamic_number_pool_referrer_param7_name
    - Pool Param 7 Name
    - [Number pooling links only] The name for parameter 7.

  * - dynamic_number_pool_referrer_param7_value
    - Pool Param 7 Value
    - [Number pooling links only] The value for parameter 7.

  * - dynamic_number_pool_referrer_param8_name
    - Pool Param 8 Name
    - [Number pooling links only] The name for parameter 8.

  * - dynamic_number_pool_referrer_param8_value
    - Pool Param 8 Value
    - [Number pooling links only] The value for parameter 8.

  * - dynamic_number_pool_referrer_param9_name
    - Pool Param 9 Name
    - [Number pooling links only] The name for parameter 9.

  * - dynamic_number_pool_referrer_param9_value
    - Pool Param 9 Value
    - [Number pooling links only] The value for parameter 9.

  * - dynamic_number_pool_referrer_param10_name
    - Pool Param 10 Name
    - [Number pooling links only] The name for parameter 10.

  * - dynamic_number_pool_referrer_param10_value
    - Pool Param 10 Value
    - [Number pooling links only] The value for parameter 10.

  * - dynamic_number_pool_referrer_search_type
    - Search Type
    - [Number pooling links only] "Paid" or "Organic".

  * - dynamic_number_pool_pool_type
    - Pool Type
    - [Number pooling links only] The type of pool: "Search", "SearchKeyword" or "Custom".

  * - dynamic_number_pool_id
    - Pool ID
    - [Number pooling links only] The ID of the pool.

  * - start_time_local
    - Call Start Time
    - Start of the call in the API user's time zone, followed by offset from GMT.

  * - start_time_xml
    - Call Start Time (XML formatted)
    - Start of the call in Soap XML formatted time.

  * - start_time_utc
    - Call Start Time (UTC timestamp)
    - Start of the call in milliseconds since Jan 1, 1970. Divide by 1000 to get Unix epoch time.

  * - corrected_at
    - Corrected At
    - [Correction only] Date and time the transaction was corrected, in user's time zone, followed by offset from GMT.

  * - opt_in_SMS
    - Opt In Sms
    - Whether the caller opted in to receive an SMS promotion.

  * - complete_call_id
    - Call Record ID
    - Globally unique identifier for the call this transaction is part of. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - transfer_from_type
    - Transfer Type
    - Where the call came from.

  * - notes
    - Notes
    - Free-form notations on transaction.

  * - reason_code
    - Reason Code
    - [Call center integration only] Call center-specific status code giving the disposition of the call.

  * - email_address
    - Email Address (Reported)
    - [Call center integration only] Email address as given to the call center.

  * - name
    - Name (Reported)
    - [Call center integration only] Customer's full name as given to the call center.

  * - address1
    - Address (Reported)
    - [Call center integration only] Customer's street address as given to the call center (first line).

  * - address2
    - Address 2 (Reported)
    - [Call center integration only] Customer's street address as given to the call center (second line).

  * - order_city
    - City (Reported)
    - [Call center integration only] Customer's city as given to the call center.

  * - state_or_province
    - State or Province (Reported)
    - [Call center integration only] Customer's state or province as given to the call center.

  * - zip_code
    - Zip Code (Reported)
    - [Call center integration only] Customer's zip code as given to the call center.

  * - country
    - Country (Reported)
    - [Call center integration only] Customer's country as given to the call center.

  * - home_phone_number
    - Home Phone (Reported)
    - [Call center integration only] Customer's home phone number as given to the call center.

  * - cell_phone_number
    - Cell Phone (Reported)
    - [Call center integration only] Customer's cell phone number as given to the call center.

  * - sku_list
    - SKU List
    - [Call center integration only] Comma-separated list of order SKUs as reported by the call center.

  * - quantity_list
    - Quantity List
    - [Call center integration only] Comma-separated list of order quantities as reported by the call center. Each quantity in the list matches the sku_list entry in that same position.

  * - sale_amount
    - Sale Amount
    - [Call center integration only] Total order amount (not including shipping) as reported by the call center.

  * - call_center_call_id
    - Call Center Call Id
    - [Call center integration only] The unique identifier assigned to the call by the call center.

  * - destination_phone_number
    - Destination Phone Number
    - The phone number where the call was transferred to (useful if an IVR transfers to multiple destinations). Up-to 20 character string, can contain numeric characters (i.e. 0-9) and the following additional characters: '-', '#', '\*', 'x', and ','.


.. list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters

  * - | Potentially Extra Params

      | (Network Attribute Flags)
    -
    -

  * - advertiser_payin_localized
    - Earned
    - Amount paid in by media channel.

  * - affiliate_payout_localized
    - Paid
    - Amount paid out to the publisher.

  * - margin_localized
    - Margin
    - Difference between advertiser_payin_localized and affiliate_payout_localized.

  * - matching_advertiser_payin_policies
    - Matching Media Channel Payin Policies
    - List of media channel policies that matched (base, bonus1, bonus2, etc.) to determine the media channel payin, separated by +. For example,base+bonus1+bonus3. Note that if there was any media channel payin, this field guaranteed to start with base.

  * - matching_affiliate_payout_policies
    - Matching Publisher Payout Policies
    - List of publisher policies that matched (base, bonus1, bonus2, etc.) to determine the publisher payout, separated by +. For example,base+bonus2. Note that if there was any publisher payout, this field guaranteed to start with base.

  * - payout_conditions
    - Payout Conditions
    - “Base condition with { highlighting } around the term(s) that disqualified publisher payout. For example: duration > 1 min and {in_region}”.

  * - payin_conditions
    - Payin Conditions
    - “Base condition with { highlighting } around the term(s) that disqualified media channel payin. For example: duration > 1 min and {in_region}”.

  * - recording
    - Recording
    - URL to the call recording, if available.

  * - dynamic_number_pool_referrer_param11_value
    - Pool Param 11 Value
    - [Number pooling links only] The value for parameter 11.

  * - dynamic_number_pool_referrer_param11_name
    - Pool Param 11 Name
    - [Number pooling links only] The name for parameter 11.

  * - dynamic_number_pool_referrer_param12_value
    - Pool Param 12 Value
    - [Number pooling links only] The value for parameter 12.

  * - dynamic_number_pool_referrer_param12_name
    - Pool Param 12 Name
    - [Number pooling links only] The name for parameter 12.

  * - dynamic_number_pool_referrer_param13_value
    - Pool Param 13 Value
    - [Number pooling links only] The value for parameter 13.

  * - dynamic_number_pool_referrer_param13_name
    - Pool Param 13 Name
    - [Number pooling links only] The name for parameter 13.

  * - dynamic_number_pool_referrer_param14_value
    - Pool Param 14 Value
    - [Number pooling links only] The value for parameter 14.

  * - dynamic_number_pool_referrer_param14_name
    - Pool Param 14 Name
    - [Number pooling links only] The name for parameter 14.

  * - dynamic_number_pool_referrer_param15_value
    - Pool Param 15 Value
    - [Number pooling links only] The value for parameter 15.

  * - dynamic_number_pool_referrer_param15_name
    - Pool Param 15 Name
    - [Number pooling links only] The name for parameter 15.

  * - dynamic_number_pool_referrer_param16_value
    - Pool Param 16 Value
    - [Number pooling links only] The value for parameter 16.

  * - dynamic_number_pool_referrer_param16_name
    - Pool Param 16 Name
    - [Number pooling links only] The name for parameter 16.

  * - dynamic_number_pool_referrer_param17_value
    - Pool Param 17 Value
    - [Number pooling links only] The value for parameter 17.

  * - dynamic_number_pool_referrer_param17_name
    - Pool Param 17 Name
    - [Number pooling links only] The name for parameter 17.

  * - dynamic_number_pool_referrer_param18_value
    - Pool Param 18 Value
    - [Number pooling links only] The value for parameter 18.

  * - dynamic_number_pool_referrer_param18_name
    - Pool Param 18 Name
    - [Number pooling links only] The name for parameter 18.

  * - dynamic_number_pool_referrer_param19_value
    - Pool Param 19 Value
    - [Number pooling links only] The value for parameter 19.

  * - dynamic_number_pool_referrer_param19_name
    - Pool Param 19 Name
    - [Number pooling links only] The name for parameter 19.

  * - dynamic_number_pool_referrer_param20_value
    - Pool Param 20 Value
    - [Number pooling links only] The value for parameter 20.

  * - dynamic_number_pool_referrer_param20_name
    - Pool Param 20 Name
    - [Number pooling links only] The name for parameter 20.

  * - dynamic_number_pool_referrer_param21_value
    - Pool Param 21 Value
    - [Number pooling links only] The value for parameter 21.

  * - dynamic_number_pool_referrer_param21_name
    - Pool Param 21 Name
    - [Number pooling links only] The name for parameter 21.

  * - dynamic_number_pool_referrer_param22_value
    - Pool Param 22 Value
    - [Number pooling links only] The value for parameter 22.

  * - dynamic_number_pool_referrer_param22_name
    - Pool Param 22 Name
    - [Number pooling links only] The name for parameter 22.

  * - dynamic_number_pool_referrer_param23_value
    - Pool Param 23 Value
    - [Number pooling links only] The value for parameter 23.

  * - dynamic_number_pool_referrer_param23_name
    - Pool Param 23 Name
    - [Number pooling links only] The name for parameter 23.

  * - dynamic_number_pool_referrer_param24_value
    - Pool Param 24 Value
    - [Number pooling links only] The value for parameter 24.

  * - dynamic_number_pool_referrer_param24_name
    - Pool Param 24 Name
    - [Number pooling links only] The name for parameter 24.

  * - dynamic_number_pool_referrer_param25_value
    - Pool Param 25 Value
    - [Number pooling links only] The value for parameter 25.

  * - dynamic_number_pool_referrer_param25_name
    - Pool Param 25 Name
    - [Number pooling links only] The name for parameter 25.

  * - display_name_data_append
    - Display Name (Data Append)
    - Data from caller demographics lookup

  * - first_name_data_append
    - First Name (Data Append)
    - Data from caller demographics lookup

  * - last_name_data_append
    - Last Name (Data Append)
    - Data from caller demographics lookup

  * - age_range_data_append
    - Age Range (Data Append)
    - Data from caller demographics lookup

  * - address_type_data_append
    - Address Type (Data Append)
    - Data from caller demographics lookup

  * - address_full_street_data_append
    - Street Address (Data Append)
    - Data from caller demographics lookup

  * - address_city_data_append
    - City (Data Append)
    - Data from caller demographics lookup

  * - address_state_data_append
    - State (Data Append)
    - Data from caller demographics lookup

  * - address_zip_data_append
    - Zip (Data Append)
    - Data from caller demographics lookup

  * - address_country_data_append
    - Country (Data Append)
    - Data from caller demographics lookup

  * - carrier_data_append
    - Carrier (Data Append)
    - Data from caller demographics lookup

  * - line_type_data_append
    - Line Type (Data Append)
    - Data from caller demographics lookup

  * - is_prepaid_data_append
    - Is Prepaid (Data Append)
    - Data from caller demographics lookup

  * - do_not_call_data_append
    - Do Not Call (Data Append)
    - Data from caller demographics lookup

  * - gender_data_append
    - Gender (Data Append)
    - Data from caller demographics lookup

Example
-------

For example, if you have this OAuth API token:

.. list-table::
  :widths: 1
  :header-rows: 1
  :class: parameters

  * - OAuth API token

  * - YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU’

Here is an example using curl to get the next 20 transactions that occurred after transaction id C624DA2C-CF3367C3:

.. code-block:: bash

  curl -k "https://mynetwork.invoca.net/networks/transactions/33.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU"

The -k option asks curl to not bother checking the SSL certificate authority chain as that requires extra configuration.

Endpoint:

``https://invoca.net/api/@@TRANSACTION_API_VERESION/<account_type>/transactions/``
