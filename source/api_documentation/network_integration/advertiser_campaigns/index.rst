Advertiser Campaigns
====================

Advertiser Campaigns can be managed using the Network API. In addition to create, update, and show operations, this interface provides additional endpoints including go_live, archive, and quick_stats.

Note that the `<advertiser_id_from_network>` and `<advertiser_campaign_id_from_network>` are the network’s id for those objects, not Invoca’s.

`/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

We support passing back current_terms and future_terms on campaigns. The current properties of the campaign are reflected in current_terms. All changes to the campaign are staged in future_terms. Once the campaign goes live, future_terms transition over to current_terms.

You can set budgets on your campaign. There are two budget types, budget_cap_alert which is based on commissions, and call_cap_alert, which is based on the number of calls. These budget activities are only applicable for AffiliateEnabled campaigns (Known in the platform as a “Publisher Promotion” Campaign Type.)

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

    -

      Forwards the call to a selected phone number after optionally reading a prompt.

Endpoint
--------

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

.. raw:: html

  <div class="panel-group">
    <div class="endpoint-list">

      <div class="panel-heading" id="headingOne">
        <a class="collapsed" data-toggle="collapse" data-target="#one" aria-expanded="false" aria-controls="one">
          <div class='action'>GET</div>
          <div class='path'>/advertiser_campaigns</div>
          <div class='description'>Get all campaigns for an Advertiser</div>
        </a>
      </div>
      <div id="one" class="panel collapse" aria-labelledby="headingOne">
        <div class="panel-body">

..include

.. rubric:: Examples

        Read Campaign 100 for Advertiser 2

        Endpoint:

        `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/2/advertiser_campaigns/100.json`

        Response Body:

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

.. raw:: html

           </div>
        </div>
      </div>
      </div>
    </div>
  </div>


.. toctree::
   :maxdepth: 2
   :hidden:

   get_advertiser_campaigns
   get_advertiser_campaign
   post_advertiser_campaign
   put_advertiser_campaign
   get_advertiser_campaign_quick_stats
   get_advertiser_campaign_go_live
   post_advertiser_campaign_go_live
   get_advertiser_campaign_archive
   post_advertiser_campaign_archive
