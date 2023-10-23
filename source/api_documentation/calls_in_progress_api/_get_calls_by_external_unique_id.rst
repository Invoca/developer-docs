.. container:: endpoint-long-description

  .. rubric:: Example

  Get calls in progress for the External Unique ID `mycalls00001`.
  Note: External Unique ID must be set by using the Update function of this API before you can use it to look up a call.
  Be sure to use your own organization_type and id.

  Endpoint:

  ``https://invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress/current_calls.json?id=<organization_id>&organization_type=<organization_type>&external_unique_id=mycalls00001``

  Parameters: `external_unique_id` is required for this request

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_calls": [
        {
          "transaction_id": "ABCD1234-ABCD1234",
          "call_status": "bridged",
          "external_unique_id": "mycalls00001",
          "calling_phone_number": "+15559999999",
          "destination_phone_number": "+18555595599",
          "called_phone_number": "+18557174046",
          "bridge_start_time": "2023-04-03T16:02:36-07:00",
          "call_record_id": "Z6E5-C7397356976E",
          "phone_type": "Mobile",
          "advertiser_campaign_country": "USA",
          "advertiser_campaign_id": "SampleCampaignID-123",
          "advertiser_campaign_id_from_network": "NetworkCampaignID-456",
          "advertiser_campaign_name": "Sample Campaign Name",
          "advertiser_id": "AdvertiserID-789",
          "advertiser_id_from_network": "NetworkAdvertiserID-012",
          "advertiser_name": "Sample Advertiser Name",
          "affiliate_campaign_id_from_network": "NetworkAffiliateCampaignID-345",
          "affiliate_commissions_ranking": "Top 10%",
          "affiliate_conversion_rate_ranking": "Top 20%",
          "affiliate_id": "AffiliateID-678",
          "affiliate_id_from_network": "NetworkAffiliateID-901",
          "affiliate_name": "Sample Affiliate Name",
          "affiliate_volume_ranking": "Top 5%",
          "city": "New York",
          "destination_phone_number": "+18555555555",
          "external_unique_id": "ExternalID-234",
          "keypress_1": "1",
          "keypress_2": "2",
          "keypress_3": "3",
          "keypress_4": "4",
          "key presses": "1,2,3,4",
          "media_type": "Online",
          "phone_type": "Mobile",
          "promo_number_description": "Sample Promo Description",
          "promo_number_id": "PromoID-567",
          "qualified_regions": "East Coast",
          "region": "North East",
          "source": "Web",
          "start_time": "2023-04-03T16:00:00-07:00",
          "transaction_id": "TransactionID-890",
          "verified_zip_code": "10001",
          "zip_code": "10001"
          "custom_data": {
                "utm_source": {
                    "value": "google.com",
                    "source": "VirtualLine"
                },
                "calling_page": {
                    "value": "https://www.doggydaycare.com/boarding",
                    "source": "DynamicAttribution"
                },
                "g_cid": {
                    "value": "asdf-1234-zxcv-5678",
                    "source": "DynamicAttribution"
                },
                "channel": {
                    "value": "SEM",
                    "source": "DynamicAttribution"
                },
                "lead_type": {
                    "value": "StoreCall",
                    "source": "VirtualLine"
                },
                "demographics_data": {}
            }
        }
      ]
    }
