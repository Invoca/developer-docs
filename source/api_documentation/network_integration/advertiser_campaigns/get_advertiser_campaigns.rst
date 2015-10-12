GET  /advertiser_campaigns
""""""""""""""""""""""""""

.. rubric:: Examples

Read Campaign 100 for Advertiser 2

Endpoint:
`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/2/advertiser_campaigns/100.json`

.. code-block:: json
   :linenos:

   {
       "current_terms": {
         "description": "August promotion to sell post-season tickets at half price.",
         "timezone": "Pacific Time (US & Canada)",
         "visibility": "All",
         "created_at": "2015-05-13 07:45:08 -0800",
         "id": "215",
         "operating_24_7": false,
         "go_live_date": null,
         "default_creative_id_from_network": "222",
         "advertiser_payin": {
           "min": 7,
           "currency": "EUR",
           "pricing": "€7.00 per call if duration > 2 min 30 sec",
           "max": 7,
           "policies": [
             {
               "type": "Base",
               "currency": "EUR",
               "condition": "duration > 2 min 30 sec",
               "amount": 7
             }
           ],
           "range": "€7.00 per call"
         },
         "pricing_type": "Fixed",
         "ivr_tree": {
           "root": {
             "condition": "during_hours",
             "children": [
               {
                 "destination_phone_number": "8004377950",
                 "destination_country_code": "1",
                 "prompt": "",
                 "node_type": "Connect"
               },
               {
                 "destination_phone_number": "8004377950",
                 "destination_country_code": "1",
                 "prompt": "",
                 "node_type": "Connect"
               }
             ],
             "node_type": "Condition"
           },
           "record_calls": true
         },
         "auto_approve": "None",
         "expiration_date": null,
         "campaign_type": "AffiliateEnabled",
         "affiliate_payout": {
           "min": 4.5,
           "currency": "USD",
           "pricing": "Base: $4.50 per call Bonus: $2.75 per call if duration > 60",
           "max": 7.25,
           "policies": [
             {
               "type": "Base",
               "currency": "USD",
               "condition": "",
               "amount": 4.5
             },
             {
               "type": "Bonus",
               "currency": "USD",
               "condition": "duration > 60",
               "amount": 2.75
             }
           ],
           "range": "$4.50 - $7.25 per call"
         },
         "updated_at": "2015-05-13 07:45:08 -0800",
         "url": "http://www.nfltix.com/postseasonnow",
         "hours": {
           "saturday_open": 32400,
           "sunday_open": 32400,
           "monday_closed": false,
           "tuesday_open": 32400,
           "thursday_open": 32400,
           "friday_close": 75600,
           "sunday_close": 50999,
           "wednesday_closed": false,
           "thursday_closed": false,
           "tuesday_close": 75600,
           "friday_open": 32400,
           "saturday_closed": true,
           "sunday_closed": true,
           "tuesday_closed": true,
           "wednesday_close": 75600,
           "friday_closed": true,
           "monday_open": 32400,
           "saturday_close": 75600,
           "monday_close": 75600,
           "thursday_close": 75600,
           "wednesday_open": 32400
         },
         "named_regions": [
           {
             "regions": [
               {
                 "region_type": "State",
                 "value": "CA",
                 "text": "TBD"
               },
               {
                 "region_type": "State",
                 "value": "OR",
                 "text": "TBD"
               },
               {
                 "region_type": "State",
                 "value": "WA",
                 "text": "TBD"
               }
             ],
             "name": "West Coast"
           },
           {
             "regions": [
               {
                 "region_type": "State",
                 "value": "NY",
                 "text": "TBD"
               },
               {
                 "region_type": "State",
                 "value": "NJ",
                 "text": "TBD"
               }
             ],
             "name": "East Coast"
           }
         ]
       },
       "future_terms": {
         "description": "August promotion to sell post-season tickets at half price.",
         "timezone": "Pacific Time (US & Canada)",
         "visibility": "All",
         "created_at": "2015-05-13 08:46:43 -0800",
         "id": "",
         "operating_24_7": false,
         "go_live_date": null,
         "default_creative_id_from_network": "123",
         "advertiser_payin": {
           "min": 7,
           "currency": "EUR",
           "pricing": "€7.00 per call if duration > 2 min 30 sec",
           "max": 7,
           "policies": [
             {
               "type": "Base",
               "currency": "EUR",
               "condition": "duration > 2 min 30 sec",
               "amount": 7
             }
           ],
           "range": "€7.00 per call"
         },
         "budget_activities": {
           "call_cap_alert": {
             "budget_amount": 200.0,
             "budget_currency": "USD",
             "reset_period": "Ongoing",
             "start_at": "2014-04-17T00:00:00-07:00",
             "total_amount": 0.0,
             "time_zone": "Pacific Time (US & Canada)"
           },
           "budget_cap_alert": {
             "budget_amount": 100.0,
             "budget_currency": "USD",
             "reset_period": "Monthly",
             "start_at": "2014-04-01T00:00:00-07:00",
             "total_amount": 0.0,
             "time_zone": "Pacific Time (US & Canada)"
           },
           "pricing_type": "Fixed",
           "ivr_tree": {
             "root": {
               "condition": "during_hours",
               "children": [
                 {
                   "destination_phone_number": "8004377950",
                   "destination_country_code": "1",
                   "prompt": "",
                   "node_type": "Connect"
                 },
                 {
                   "destination_phone_number": "8004377950",
                   "destination_country_code": "1",
                   "prompt": "",
                   "node_type": "Connect"
                 }
               ],
               "node_type": "Condition"
             },
             "record_calls": true
           },
           "auto_approve": "None",
           "expiration_date": "2015-05-18T23:59:59-08:00",
           "campaign_type": "AffiliateEnabled",
           "affiliate_payout": {
             "min": 4.5,
             "currency": "USD",
             "pricing": "Base: $4.50 per call Bonus: $2.75 per call if duration > 60",
             "max": 7.25,
             "policies": [
               {
                 "type": "Base",
                 "currency": "USD",
                 "condition": "",
                 "amount": 4.5
               },
               {
                 "type": "Bonus",
                 "currency": "USD",
                 "condition": "duration > 60",
                 "amount": 2.75
               }
             ],
             "range": "$4.50 - $7.25 per call"
           },
           "updated_at": "2015-05-13 08:46:43 -0800",
           "url": "http://www.nfltix.com/postseasonnow",
           "hours": {
             "saturday_open": 32400,
             "sunday_open": 32400,
             "monday_closed": false,
             "tuesday_open": 32400,
             "thursday_open": 32400,
             "friday_close": 75600,
             "sunday_close": 50999,
             "wednesday_closed": false,
             "thursday_closed": false,
             "tuesday_close": 75600,
             "friday_open": 32400,
             "saturday_closed": true,
             "sunday_closed": true,
             "tuesday_closed": true,
             "wednesday_close": 75600,
             "friday_closed": true,
             "monday_open": 32400,
             "saturday_close": 75600,
             "monday_close": 75600,
             "thursday_close": 75600,
             "wednesday_open": 32400
           },
           "named_regions": [
             {
               "regions": [
                 {
                   "region_type": "State",
                   "value": "CA",
                   "text": "TBD"
                 },
                 {
                   "region_type": "State",
                   "value": "OR",
                   "text": "TBD"
                 },
                 {
                   "region_type": "State",
                   "value": "WA",
                   "text": "TBD"
                 }
               ],
               "name": "West Coast"
             },
             {
               "regions": [
                 {
                   "region_type": "State",
                   "value": "NY",
                   "text": "TBD"
                 },
                 {
                   "region_type": "State",
                   "value": "NJ",
                   "text": "TBD"
                 }
               ],
               "name": "East Coast"
             }
           ]
         },
         "status": "Entry",
         "name": "PostSeason Promotion 11 fJauFbSEGHKw8ADEGv",
         "max_promo_numbers": 10
       }
     }
