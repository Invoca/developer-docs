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

  * - advertiser_promo_line_description
    - Promo Number Description
    - Additional details about the transaction source.

  * - virtual_line_id
    - Promo Number ID
    - The Promo Number ID from the network.

  * - call_result_description_detail_managed_advertiser
    - Call Result
    - Status of the transaction.

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

  * - call_outcome_outcome_name
    - Outcome Name
    - The name describing the outcome event.

  * - call_outcome_description
    - Call Outcome Description
    - Free form text for providing additional details about the outcome.

  * - call_outcome_partner_unique_id
    - Call Outcome Partner ID
    - Unique identifier, to distinguish between updating an existing outcome (for example correcting a sale that was reported) versus adding a second sale to the call (for example a reservation made while on the call and then an add on item purchased later).

  * - call_outcome_occurred_at
    - Call Outcome Occurred At
    - 10 digit time that the outcome occurred, in UTC seconds since 1/1/70, also known as Unix time_t.

  * - call_outcome_source
    - Call Outcome Source
    - The source of the call outcome.  Possible values are :UserOverride, :Api, :Import, :Expression, :Ivr, and :Machine

  * - call_outcome_value
    - Call Outcome value
    - True or false as to whether the outcome was met or not.

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
    - The phone number where the call was transferred to (useful if an IVR transfers to multiple destinations). Up-to 20 character string, can contain numeric characters (i.e. 0-9) and the following additional characters: ‘-‘, ‘#’, ‘*’, ‘x’, and ‘,’.
