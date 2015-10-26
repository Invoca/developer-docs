.. container:: endpoint-long-description

  .. rubric:: Examples

  Example POST to non‐existing Advertiser Campaign fJauFbSEGHKw8ADEGv under Advertiser cFUyYnFHyiYA42TrpM in the Demo Network.

  POST

  ``https://demo.invoca.net/api/@@NETWORK_API_VERSION/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json``

  With an existing advertiser, the IVR tree may be updated independently of other attributes. Below is a curl command that only needs network API credentials, a network id and an advertiser id. This will create an advertiser campaign with id 445566. The campaign id may be changed freely.

  Endpoint:

  ``https://demo.invoca.net/api/@@NETWORK_API_VERSION/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json``

  .. code-block:: bash

     curl­ -XPOST­ -H "Content­Type: application/json"­ -u 'login:pass'
     'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/advertisers/advertiser_id/advertiser_campaigns/445566.json' \
     -d '
     {
       "hours": {
         "tuesday_close": 61200,
         "wednesday_close": 61200,
         "saturday_open": 28800,
         "wednesday_closed": false,
         "friday_open": 28800,
         "thursday_close": 61200,
         "thursday_closed": false,
         "friday_close": 61200,
         "monday_close": 61200,
         "wednesday_open": 28800,
         "sunday_open": 28800,
         "thursday_open": 28800,
         "friday_closed": false,
         "monday_open": 28800,
         "tuesday_closed": false,
         "monday_closed": false,
         "saturday_close": 61200,
         "saturday_closed": false,
         "sunday_close": 61200,
         "sunday_closed": false,
         "tuesday_open": 28800
       },
       "name": "NFLCampaign",
       "timezone": "PacificTime(US&Canada)",
       "description": "Augustpromotion tosellpost­seasonticketsathalf price.",
       "ivr_tree": {
         "root": {
           "children": [

           ],
           "condition": "",
           "node_type": "Connect",
           "destination_phone_number": "8052844300",
           "destination_country_code": "1"
         },
         "record_calls": true
       },
       "named_regions": [
         {
           "name": "WestCoast",
           "regions": [
             {
               "value": "CA",
               "region_type": "State"
             },
             {
               "value": "OR",
               "region_type": "State"
             },
             {
               "value": "WA",
               "region_type": "State"
             }
           ]
         },
         {
           "name": "EastCoast",
           "regions": [
             {
               "value": "NY",
               "region_type": "State"
             },
             {
               "value": "NJ",
               "region_type": "State"
             }
           ]
         }
       ],
       "operating_24_7": false,
       "url": "http://www.nfltix.com/postseasonnow"
     }
     ' -v

  .. raw:: html

      <hr>

  Create Campaign fJauFbSEGHKw8ADEGv for Advertiser cFUyYnFHyiYA42TrpM on network 1 (POST)

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json``

  Request Body

  .. code-block:: json

     {
       "name": "PostSeason Promotion 11 fJauFbSEGHKw8ADEGv",
       "description": "August promotion to sell post-season tickets at half price.",
       "url": "http://www.nfltix.com/postseasonnow",
       "timezone": "Pacific Time (US & Canada)",
       "operating_24_7": false,
       "campaign_type": "AffiliateEnabled",
       "max_promo_numbers": 6,
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
       }
     }
