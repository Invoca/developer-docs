  
..  list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters
  
  * - Field
    - Name in Reports
    - Description

  * - transaction_id
    - Transaction Id
    - Globally unique identifier for this transaction. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-". This is the Primary Key of the results.

  * - corrects_transaction_id
    - Corrects Call
    - [Correction only] Id of the original transaction that this transaction updates. Values in this row are the corrected ones and should replace the original values. Same format as transaction_id. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - transaction_type
    - Type
    - The type of transaction - Call, Reported Conversion or Signal.

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

  * - call_result_description_detail
    - Call Result
    - Status of the Transaction

  * - media_type
    - Media Type
    - Media type of the transaction source.

  * - call_source_description
    - Source
    - Source of the transaction.
  
  * - city
    - City
    - City where transaction originated.

  * - region
    - Region
    - Region (state, province or country) where transaction originated.

  * - qualified_regions
    - Qualified Regions
    - The list of regions that that the caller matched.

  * - connect_duration
    - Connected Duration (HH:MM:SS)
    - Duration in seconds that the call that was connected to the call center.

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
    - Call Record ID
    - Globally unique identifier for the call this transaction is part of. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the "-".

  * - notes
    - Notes
    - Free form notations on the transcript

  * - reason_code
    - Reason Code
    - [Call center integration only] Call center-specific status code giving the disposition of the call.

  * - virtual_line_id
    - Promo Number ID
    - The Promo Number ID from the network.

  * - verified_zip 
    - Verified Zip Code
    - Zip Code entered by callers when prompted during call treatment  

