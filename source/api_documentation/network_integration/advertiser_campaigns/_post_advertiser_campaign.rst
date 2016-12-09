

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create Campaign fJauFbSEGHKw8ADEGv for Advertiser cFUyYnFHyiYA42TrpM

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns.json``

  Request Body:

  .. code-block:: json

     {
       "id_from_network": "fJauFbSEGHKw8ADEGv",
       "name": "PostSeason Promotion 11 fJauFbSEGHKw8ADEGv",
       "description": "August promotion to sell post-season tickets at half price.",
       "url": "http://www.nfltix.com/postseasonnow",
       "timezone": "Pacific Time (US & Canada)",
       "operating_24_7": false,
       "campaign_type": "AffiliateEnabled",
       "default_creative_id_from_network": "111",
       "hours": {
         "friday_open": 32400,
         "wednesday_open": 32400,
         "sunday_close": 50999,
         "monday_open": 32400,
         "friday_close": 75600,
         "wednesday_close": 75600,
         "friday_closed": true,
         "thursday_open": 32400,
         "sunday_closed": true,
         "sunday_open": 32400,
         "saturday_open": 32400,
         "monday_closed": false,
         "thursday_close": 75600,
         "tuesday_closed": true,
         "tuesday_close": 75600,
         "tuesday_open": 32400,
         "saturday_closed": true,
         "saturday_close": 75600,
         "monday_close": 75600,
         "thursday_closed": false,
         "wednesday_closed": false
       },
       "named_regions": [
         {
           "name": "West Coast",
           "regions": [
             {
               "region_type": "State",
               "value": "CA"
             },
             {
               "region_type": "State",
               "value": "OR"
             },
             {
               "region_type": "State",
               "value": "WA"
             }
           ]
         },
         {
           "name": "East Coast",
           "regions": [
             {
               "region_type": "State",
               "value": "NY"
             },
             {
               "region_type": "State",
               "value": "NJ"
             }
           ]
         }
       ],
       "advertiser_payin": {
         "policies": [
           {
             "condition": "duration > 2 min 30 sec",
             "type": "Base",
             "currency": "USD",
             "amount": 7.0
           }
         ]
       },
       "affiliate_payout": {
         "policies": [
           {
             "condition": "",
             "amount": 4.5,
             "currency": "USD",
             "type": "Base"
           },
           {
             "condition": "duration > 60",
             "amount": 2.75,
             "currency": "USD",
             "type": "Bonus"
           }
         ]
       },
       "ivr_tree": {
         "record_calls": true,
         "root": {
           "node_type": "Condition",
           "condition": "during_hours",
           "children": [
             {
               "node_type": "Connect",
               "destination_phone_number": "8004377950",
               "destination_country_code": "1",
               "prompt": ""
             },
             {
               "node_type": "Connect",
               "destination_phone_number": "8004377950",
               "destination_country_code": "1",
               "prompt": ""
             }
           ]
         }
       },
       "customer_data": {
         "channel": "Offline leads"
       }
     }

  Response Body:

  Same as a GET response, includes all the advertiser campaign properties.
