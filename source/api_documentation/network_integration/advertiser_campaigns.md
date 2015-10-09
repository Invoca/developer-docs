Advertiser Campaigns
====================
<hr>

Advertiser Campaigns can be managed using the Network API. In addition to create, update, and show operations, this interface provides additional endpoints including go_live, archive, and quick_stats.

Note that the `<advertiser_id_from_network>` and `<advertiser_campaign_id_from_network>` are the network’s id for those objects, not Invoca’s.

`/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

We support passing back current_terms and future_terms on campaigns. The current properties of the campaign are reflected in current_terms. All changes to the campaign are staged in future_terms. Once the campaign goes live, future_terms transition over to current_terms.

You can set budgets on your campaign. There are two budget types, budget_cap_alert which is based on commissions, and call_cap_alert, which is based on the number of calls. These budget activities are only applicable for AffiliateEnabled campaigns (Known in the platform as a “Publisher Promotion” Campaign Type.)

You are not allowed to delete campaigns.

<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>name</td><td>string</td><td>Campaign name.</td></tr>
  <tr><td>campaign_type</td><td>string</td><td>2 Campaign Types Supported: “AffiliateEnabled” ‐ Advertiser Campaign that allows Affiliates to promote it. Includes Payin and Payouts for qualified Calls. “DirectOnly” ‐ Advertiser Campaign used for internal marketing. No ability to promote via Affiliates or setup Payin and Payouts for Calls.</td></tr>
  <tr><td>description</td><td>string</td><td>Campaign Description.</td></tr>
  <tr><td>url</td><td>string</td><td>Click URL Template.</td></tr>
  <tr><td>timezone</td><td>string</td><td>Supported Time Zones: “Pacific Time (US & Canada)”, “Mountain Time (US & Canada)”, “Central Time (US & Canada)”, “Eastern Time (US & Canada)”, “London”, “UTC”.</td></tr>
  <tr><td>operating_24_7</td><td>boolean</td><td></td></tr>
  <tr><td><b>affiliate_payout</b></td><td></td><td></td></tr>
  <tr><td>currency</td><td>string</td><td>USD, GBP, EUR.</td></tr>
  <tr><td><b>policies</b></td><td></td><td></td></tr>
  <tr><td>amount</td><td>decimal</td><td>Payout Amount.</td></tr>
  <tr><td>condition</td><td>string</td><td>Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS All may be grouped with logic operators (AND/OR/NOT).</td></tr>
  <tr><td>type</td><td>string</td><td>One of: Base, Bonus.</td></tr>
  <tr><td><b>advertiser_payin</b></td><td></td><td></td></tr>
  <tr><td>currency</td><td>string</td><td>Supported Currencies: ‐ USD, GBP, EUR.</td></tr>
  <tr><td><b>policies</b></td><td></td><td></td></tr>
  <tr><td>amount</td><td>integer</td><td>Advertiser Payin Amount.</td></tr>
  <tr><td>condition</td><td>string</td><td>Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS. All may be grouped with logic operators (AND/OR/NOT).</td></tr>
  <tr><td>type</td><td>string</td><td>One of: Base, Bonus.</td></tr>
  <tr><td><b>hours</b></td><td></td><td></td></tr>
  <tr><td>[day of week]\_open (e.g. friday_open)</td><td>string</td><td>Open Hours. In seconds past midnight (e.g. 0 for midnight, 32400 for 9:00 AM).</td></tr>
  <tr><td>[day of week]\_close (e.g. friday_close)</td><td>string</td><td>Closed Hours. In seconds past midnight (e.g. 0 for midnight, 75600 for 9:00 PM).</td></tr>
  <tr><td>[day of week]\_closed (e.g. sunday_closed)</td><td>string</td><td>true, false, or null. Whether the business is closed that day of the week.</td></tr>
  <tr><td><b>named_regions</b></td><td></td><td></td></tr>
  <tr><td>name</td><td>string</td><td>Region Name.</td></tr>
  <tr><td><b>regions</b></td><td></td><td></td></tr>
  <tr><td>region_type</td><td>string</td><td>Region Type. Can be one of: Zone, City, State, Country.</td></tr>
  <tr><td>value</td><td>string</td><td>Region Value, e.g. “Sacramento, CA”, or just “CA”.</td></tr>
  <tr><td>ivr_tree</td><td>hash</td><td>See following Advertiser Campaign IVR Section.</td></tr>
  <tr><td><b>budget_activities</b></td><td></td><td>Only applicable for AffiliateEnabled campaigns.</td></tr>
  <tr><td><b>budget_cap_alert</b></td><td></td><td></td></tr>
  <tr><td>reset_period</td><td>string(required)</td><td>Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.</td></tr>
  <tr><td>starts_at</td><td>date (required)</td><td>Budget Start.</td></tr>
  <tr><td>budget_currency</td><td>string(required)</td><td>Budget Currency.</td></tr>
  <tr><td>time_zone</td><td>string (required)</td><td>Supported Time Zones: “Pacific Time (US & Canada)”, “Mountain Time (US & Canada)”, “Central Time (US & Canada)”, “Eastern Time (US & Canada)”, “London”, “UTC”.</td></tr>
  <tr><td>budget_amount</td><td>decimal (required)</td><td>Budget Amount.</td></tr>
  <tr><td>include_call_fees</td><td>boolean</td><td>True if you want call fees to be included in the budget.</td></tr>
  <tr><td><b>call_cap_alert</b></td><td></td><td></td></tr>
  <tr><td>reset_period</td><td>string (required)</td><td>Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.</td></tr>
  <tr><td>starts_at</td><td>date (required)</td><td>Call Cap Start.</td></tr>
  <tr><td>budget_currency</td><td>string (required)</td><td>Budget Currency.</td></tr>
  <tr><td>time_zone</td><td>string (required)</td><td>Supported Time Zones: “Pacific Time (US & Canada)”, “Mountain Time (US & Canada)”, “Central Time (US & Canada)”, “Eastern Time (US & Canada)”, “UTC”.</td></tr>
  <tr><td>budget_amount</td><td>decimal (required)</td><td>Budget Amount.</td></tr>
  <tr><td>auto_approve</td><td>string</td><td>One of: All, None, Approved_Affiliates Default: None This controls if affiliates are automatically approved when applying to the campaign.</td></tr>
  <tr><td>visibility</td><td>string</td><td>One of: All, None, Approved_Affiliates Default: All This controls the level of visibility publishers have when applying to campaigns.</td></tr>
  <tr><td>expiration_date</td><td>string</td><td>date string (ex. ‘2015‐01‐01’). Read only.</td></tr>
  <tr><td>default_creative_id_from_network</td><td>integer</td><td>Default Creative ID.</td></tr>
  <tr><td>max_promo_numbers</td><td>integer</td><td>Maximum Promo Numbers.</td></tr>
</table>

### Advertiser Campaign IVRs

When creating an advertiser campaign, you need to provide some call flow logic through an IVR tree. Depending on the advertiser/campaign type (direct, bundled, etc) you may use the following node types:

Node Parameters and Usage

* => required parameter

<table>
  <tr><th>Node Type</th><th>Parameters</th><th>Usage</th></tr>
  <tr><td>Menu</td><td>\*prompt</td><td>Allows the caller to select from up to 9 choices (e.g. choosing a department, selecting a language, etc).</td></tr>
  <tr><td>Connect</td><td>prompt</td><td></td></tr>
  <tr><td>&nbsp;</td><td>\*destination_phone_number</td><td>Forwards the call to a selected phone number after optionally reading a prompt.</td></tr>
  <tr><td>&nbsp;</td><td>\*destination_country_code</td><td>&nbsp;</td></tr>
  <tr><td>EndCall</td><td>prompt</td><td>Ends the call after optionally reading a prompt.</td></tr>
  <tr><td>SmsPromo</td><td>\*prompt</td><td>Provide the option for a user to receive a text message with a special promotion.</td></tr>
  <tr><td>&nbsp;</td><td>\*sms_promo_copy</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>sms_promo_delay</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>sms_promo_sender</td><td>&nbsp;</td></tr>
  <tr><td>Condition</td><td>\*condition</td><td>If/else option for a call based on the qualities of the call/caller.</td></tr>
  <tr><td>VerifyLocation</td><td>prompt</td><td>Prompt the caller to verify the guessed location or confirm through input. Useful if geographical data is important or useful in a condition node.</td></tr>
</table>

Node Details

<table>
  <tr><th>Node Type</th><th>Details</th></tr>
  <tr><td>Menu</td><td>Can have 1‐9 child nodes, with each child corresponding to the 1‐9 buttons.</td></tr>
  <tr><td>Connect</td><td>May not have any children. The prompt will be read before connecting to the provided phone number.</td></tr>
  <tr><td>EndCall</td><td>May not have any children. The prompt will be read before connecting to the provided phone number.</td></tr>
  <tr><td>SmsPromo</td><td>May have exactly 1 child node. After accepting or declining the promotional sms, the child node will be played. To accept the promotional sms, the user must push 9 on the phone (this should be added as part of the prompt). Only numbers recognized as mobile phones will be offered the sms option.</td></tr>
  <tr><td>Condition</td><td>May have exactly 2 child nodes. If the conditions are met, the first child is played. If they are not met then the second child plays. See the conditions section and examples below for details on valid conditions.</td></tr>
  <tr><td>NearestBranch</td><td>May have exactly 1 child node. The caller will be prompted to verify their location prior to forwarding the call. If no branch is within ‘radius_miles’ of the caller then the child node will be played.</td></tr>
  <tr><td>VerifyLocation</td><td>May have exactly 1 child node. The prompt will play before verifying the callers location. The child node will be played after verifying the callers location.</td></tr>
</table>


Parameter Details

<table>
  <tr><th>Node Type</th><th>Type</th><th>Value</th></tr>
  <tr><td>condition</td><td>String</td><td>The boolean condition that decided if the first or second child will be played in a condition node.</td></tr>
  <tr><td>destination_country_code</td><td>String</td><td>The country code for the destination_phone_number.</td></tr>
  <tr><td>destination_phone_number</td><td>String</td><td>The phone number to forward the caller to.</td></tr>
  <tr><td>prompt</td><td>String</td><td>The text that will be read before a nodes action occurs. An empty string will result in no prompt being read, and the following action will occur immediately.</td></tr>
  <tr><td>sms_promo_copy</td><td>String</td><td>The text that will be sent to the caller if they accept the promotional sms.</td></tr>
  <tr><td>sms_promo_delay</td><td>Integer</td><td>The time delay in seconds before sending the promotional sms. This may be 1 (Immediately), 1800 (30 minutes), 86400 (1 day), 604800 (7 days), or 2592000 (30 days).</td></tr>
  <tr><td>sms_promo_sender</td><td>String</td><td>The email address that will be shown in the sms. This defaults to sms@invoca.net.</td></tr>
</table>


Conditions

<table>
  <tr><th>Condition</th><th>Details</th></tr>
  <tr><td>during_hours</td><td>True if the caller is calling during the hours specified in the campaign.</td></tr>
  <tr><td>in_region</td><td>True if the caller is calling from the region specified in the campaign.</td></tr>
  <tr><td>landline</td><td>True if the caller is calling from a landline phone.</td></tr>
  <tr><td>mobile</td><td>True if the caller is calling from a mobile phone.</td></tr>
  <tr><td>pressed[key]</td><td>True if the caller pressed the named key.</td></tr>
  <tr><td>repeat</td><td>True if the caller has already called this campaign in the last N days (the interval N can be set on the campaign; the default is 30 days).</td></tr>
  <tr><td>sms_sent</td><td>The caller chose to receive a text message during the call.</td></tr>
  <tr><td>and</td><td>Joins two conditions and is true if both conditions are true.</td></tr>
  <tr><td>or</td><td>Joins two conditions and is true if either condition is true.</td></tr>
  <tr><td>not</td><td>Inverts the following condition.</td></tr>
  <tr><td>( )</td><td>Used for grouping.</td></tr>
</table>


Example Consitions

<table>
  <tr><th>Example</th><th>Condition</th></tr>
  <tr><td>Call duration was a minute and a half or longer</td><td>duration >= 1 min 30 sec.</td></tr>
  <tr><td>Call came in during business hours</td><td>during_hours.</td></tr>
  <tr><td>Call was from a mobile phone where the caller pressed the 2 key in response to the first menu</td><td>mobile and pressed[2].</td></tr>
  <tr><td>Call was from the selected geographic region or was longer than 12 seconds</td><td>in_region or duration > 12 sec.</td></tr>
  <tr><td>Caller pressed 1 to the first question in a series and was not in the geographic region or calling during business hours</td><td>pressed[a 1] and not (in_region or during_hours).</td></tr>
</table>


Note that and is higher precedence than or. So if you use both in a condition like this:

    mobile or in_region and during_hours

it is equivalent to this:

    mobile or (in_region and during_hours)



Endpoint:

`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`


## GET all campaigns for an Advertiser
GET `/advertiser_campaigns`

### Examples
<hr>
Read all campaigns for Advertiser 2 id from network

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/2/advertiser_campaigns.json`

Response Body:
An array of campaigns are returned.

<hr>

## GET a campaign for an Advertiser
GET `/advertiser_campaigns/<advertiser_campaign_id>`

### Examples

Read Campaign 100 for Advertiser 2

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/2/advertiser_campaigns/100.json`

Response Body:
<pre><code>{
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
}</pre></code>

<hr>

## Create an Advertiser Campaign
POST `/advertiser_campaigns/<advertiser_campaign_id>`

### Examples
<hr>
Example POST to non‐existing Advertiser Campaign fJauFbSEGHKw8ADEGv under Advertiser cFUyYnFHyiYA42TrpM in the Demo Network.

POST
`https://demo.invoca.net/api/@version/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json`

With an existing advertiser, the IVR tree may be updated independently of other attributes. Below is a curl command that only needs network API credentials, a network id and an advertiser id. This will create an advertiser campaign with id 445566. The campaign id may be changed freely.

Endpoint:
`https://demo.invoca.net/api/@version/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json`

<pre><code>curl­ -XPOST­ -H "Content­Type: application/json"­ -u 'login:pass'
'https://vanity.invoca.net/api/@version/advertisers/advertiser_id/advertiser_campaigns/445566.json' \
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
' -v</pre></code>

Create Campaign fJauFbSEGHKw8ADEGv for Advertiser cFUyYnFHyiYA42TrpM on network 1 (POST)

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/cFUyYnFHyiYA42TrpM/advertiser_campaigns/fJauFbSEGHKw8ADEGv.json`

Request Body

<pre><code>{
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
}</pre></code>

## Update an Advertiser Campaign
PUT `/advertiser_campaigns/<advertiser_campaign_id>`

### Examples
<hr>
Assuming you used the curl command to create the campaign with id 445566, the following commands will update that campaign to have a new IVR tree.

Example IVR Tree updates:

(1) Verify the callers location, then if on the West Coast (setup previously) forward to a call center, otherwise hang up after playing a prompt.

<pre><code>curl­ -XPUT -H "Content­Type: application/json" -­u 'login:pass'
'https://vanity.invoca.net/api/@version/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
-d '
{"ivr_tree":
 {"root":
   {"node_type":"VerifyLocation",
    "children":
     [{"node_type":"Condition",
       "condition":"in_region[West Coast]",
       "children":
         [{"children":[],
           "condition":"",
           "node_type":"Connect",
           "destination_phone_number":"8004377950",
           "destination_country_code":"1"},
           {"node_type":"EndCall",
            "prompt":"We are sorry, we currently cannot service your area. Goodbye."}]}]
   },
   "record_calls":true}}'  -v
</code></pre>

(2) Present the options for multiple departments, if sales is selected check if office is open. If the office is open, forward the call, if not play a prompt and then hangup.

<pre class="prettyprint theme-github"><code>curl -XPUT -H "Content­Type: application/json" -u 'login:pass'
'https://vanity.invoca.net/api/@version/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
-d '
{"ivr_tree":{
   "record_calls":true,
   "root":{
     "node_type":"Menu",
     "prompt":"Please press 1 for sales or 2 for 24 hour support",
     "children":[
       { "node_type":"Condition",
         "condition":"during_hours",
         "children":[
           { "node_type":"Connect",
             "destination_phone_number":"8004377950",
             "destination_country_code":"1",
             "prompt":"Thank you, transferring you now"
           },
           { "node_type":"EndCall",
             "prompt":"We are currently closed. Please call back during business hours. Goodbye"
           }]},
       { "node_type":"Connect",
         "destination_phone_number":"8004377950",
         "destination_country_code":"1",
         "prompt":"Thank you, transferring you now"
       }]}}}'  -v
</code></pre>

(3) Offer an sms to see current offers and then connect to a call center.

<pre class="prettyprint theme-github"><code>curl -XPUT -H "Content­Type: application/json" -u 'login:pass'
'https://vanity.invoca.net/api/@version/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
-d '
{"ivr_tree":{
   "record_calls":true,
   "root":{
     "node_type":"Menu",
     "prompt":"Please press 1 for sales or 2 for 24 hour support",
     "children":[
       { "node_type":"Condition",
         "condition":"during_hours",
         "children":[
           { "node_type":"Connect",
             "destination_phone_number":"8004377950",
             "destination_country_code":"1",
             "prompt":"Thank you, transferring you now"
           },
           { "node_type":"EndCall",
             "prompt":"We are currently closed. Please call back during business hours. Goodbye"
           }]},
       { "node_type":"Connect",
         "destination_phone_number":"8004377950",
         "destination_country_code":"1",
         "prompt":"Thank you, transferring you now"
       }]}}}'  -v
</code></pre>

## Quick Stats
GET `/advertiser_campaigns/<advertiser_campaign_id>/quick_stats`

### Examples
<hr>
The full range of statistics for a campaign are available through the reporting UI. However, a quick set of overview statistics for a campaign are available through the API using the following endpoint.

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_>/quick_stats.json`

Response Body:
<pre class="prettyprint theme-github"><code>{
 "stats": {
   "last_30days": {
     "call_avg_total_duration": 0.0,
     "call_count": 0
   },
   "last_7days": {
     "call_avg_total_duration": 0.0,
     "call_count": 0
   },
   "today": {
     "call_avg_total_duration": 0.0,
     "call_count": 0
   }
 }
}</code></pre>

## Set Campaign State to Live (GET)

GET `/advertiser_campaigns/<advertiser_campaign_id>/go_live`

### Examples
<hr>

Advertiser campaigns can have their state controlled through this API. When a campaign is created through the API, its “future terms” are being set, and its state is not yet live. When the go_live endpoint is hit, the “future terms” are promoted to “current terms” and the campaign becomes live.

Use this request url format:

`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/go_live.json`

## Set Campaign State to Live (POST)

POST `/advertiser_campaigns/<advertiser_campaign_id>/go_live`

### Examples
<hr>

Advertiser campaigns can have their state controlled through this API. When a campaign is created through the API, its “future terms” are being set, and its state is not yet live. When the go_live endpoint is hit, the “future terms” are promoted to “current terms” and the campaign becomes live.

Use this request url format:

`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/go_live.json`

## Set Campaign State to Archived (GET)

GET `/advertiser_campaigns/<advertiser_campaign_id>/archive`

### Examples
<hr>

If a campaign has previously been set to live, either through the API or through the UI, it can be archived, which effectively shuts it down. An archived campaign can be returned to live at a later time. To archive a campaign use this the following endpoint URL:

`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/archive.json`

## Set Campaign State to Archived (POST)

GET `/advertiser_campaigns/<advertiser_campaign_id>/archive`

### Examples
<hr>

If a campaign has previously been set to live, either through the API or through the UI, it can be archived, which effectively shuts it down. An archived campaign can be returned to live at a later time. To archive a campaign use this the following endpoint URL:

`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/archive.json`
