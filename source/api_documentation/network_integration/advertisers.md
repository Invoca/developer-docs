Advertisers
===========

* * *

The operations on Advertiser are similar to Network, in that the interface is fully idempotent,
and the create and update commands both expect the full set of advertiser sites and users each time.
You are not allowed to delete an advertiser if it has one or more campaigns.

<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>id_from_network</td><td>string (Required)</td><td>The network id for this Advertiser. Unique within network.</td></tr>
  <tr><td>name</td><td>string (Required)</td><td>The name of the Advertiser. Unique within network.</td></tr>
  <tr><td>oauth_refresh_token</td><td>string</td><td>For internal use only.</td></tr>
  <tr><td>approval_status</td><td>string (one of): Applied, Approved (default), Declined, Suspended, Archived</td><td>Approval status for this advertiser.</td></tr>
  <tr><td>web_integration_phone_number</td><td>string</td><td></td></tr>
  <tr><td>default_creative_if_from_network</td><td>integer</td><td></td></tr>
  <tr><td>sites</td><td>json array of hashes</td><td>1 or more pairs of id_from_network [and name].</td></tr>
  <tr><td>id_from_network</td><td>integer site_if (PID)</td><td>The site_id (PID). At least one is required. The first becomes the default.</td></tr>
  <tr><td>name</td><td>string</td><td>The site name that matches side_id.</td></tr>
  <tr><td>users</td><td>json array of hashes</td><td>0 or more users for the organization. Each must have first 5 fields below.</td></tr>
  <tr><td>id_from_network</td><td>string</td><td>The network id for this User.</td></tr>
  <tr><td>email_address</td><td>string in RFC 2822 addr-spec format</td><td>The user’s email address. Unique for this user.</td></tr>
  <tr><td>first_name</td><td>string (Required)</td><td>The user’s first name.</td></tr>
  <tr><td>last_name</td><td>string (Required)</td><td>The user’s last name.</td></tr>
  <tr><td>contact_phone_number</td><td>string in ITU E.164 format or 10-digit US form (no punctuation)</td><td>The user’s phone number.</td></tr>
  <tr><td>oauth_refresh_token</td><td>string</td><td>Not used. Reserved.</td></tr>
  <tr><td>role</td><td>One of: Super (default), Manager, Member, Observer</td><td>This user’s role in this organization. (A user may hace different roles in different organizations)</td></tr>
</table>

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>.json`


## GET all Advertisers
GET `/advertisers`


### Examples
<hr>

Read all advertisers for this network

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>[
  {
    "id_from_network": "cFUyYnFHy",
    "web_integration_phone_number": "8004377950",
    "approval_status": "Approved",
    "sites": [
      {
        "id_from_network": "315",
        "name": "315.blog.com"
      }
    ],
    "name": "NFL Tickets Exchange",
    "users": [
      {
        "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
        "email_address": "chris1@nfltix.com",
        "first_name": "Chris",
        "phone_number": "888‐603‐3760",
        "last_name": "Dean",
        "role": "Manager",
        "oauth_refresh_token": "556588585858585858585858858"
      }
    ],
    "default_creative_id_from_network": "222",
    "oauth_refresh_token": "7464644784457575757494930303"
  }
]</pre></code>


## GET an Advertiser
GET `/advertisers/<advertiser_id>`


### Examples
<hr>

Read a single advertiser

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
  "id_from_network": "cFUyYnFHy",
  "web_integration_phone_number": "8004377950",
  "approval_status": "Approved",
  "sites": [
    {
      "id_from_network": "315",
      "name": "315.blog.com"
    },
    {
      "id_from_network": "996",
      "name": "996.blog.com"
    }
  ],
  "name": "NFL Tickets Exchange",
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@nfltix.com",
      "first_name": "Chris",
      "phone_number": "888‐603‐3760",
      "last_name": "Dean",
      "role": "Manager",
      "oauth_refresh_token": "556588585858585858585858858"
    },
    {
      "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
      "email_address": "jim@nfltix.com",
      "first_name": "Jim",
      "phone_number": "888‐603‐3760",
      "last_name": "Williams",
      "role": "Observer",
      "oauth_refresh_token": "4222424241628298228222"
    }
  ],
  "default_creative_id_from_network": "222",
  "oauth_refresh_token": "7464644784457575757494930303"
}</pre></code>


## DELETE An Advertiser
DELETE `/advertisers/<advertiser_id>`


### Examples
<hr>

Delete a single advertiser

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
}</pre></code>


## Create an Advertiser (POST)
POST `/advertisers/<advertiser_id>`


### Examples
<hr>

Create an advertiser with users

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Response Body:
<pre><code>{
  "name": "NFL Tickets Exchange",
  "oauth_refresh_token": "7464644784457575757494930303",
  "approval_status": "Approved",
  "web_integration_phone_number": "8004377950",
  "default_creative_id_from_network": "222",
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@nfltix.com",
      "first_name": "Chris",
      "last_name": "Dean",
      "contact_phone_number": "8055555555",
      "oauth_refresh_token": "556588585858585858585858858",
      "role": "Manager"
    },
    {
      "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
      "email_address": "jim@nfltix.com",
      "first_name": "Jim",
      "last_name": "Williams",
      "contact_phone_number": "2135555555",
      "oauth_refresh_token": "4222424241628298228222",
      "role": "Observer"
    }
  ],
  "sites": [
    {
      "id_from_network": "315",
      "name": "315.blog.com"
    },
    {
      "id_from_network": "996",
      "name": "996.blog.com"
    }
  ]
}</pre></code>


## Update an Advertiser (PUT)
PUT `/advertisers/<advertiser_id>`


### Examples
<hr>

Update a user from advertiser

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/cFUyYnFHy.json`

Format: application/json

Request Body:
<pre><code>{
  "name": "NFL Tickets Exchange",
  "oauth_refresh_token": "7464644784457575757494930303",
  "approval_status": "Approved",
  "web_integration_phone_number": "8004377950",
  "default_creative_id_from_network": "222",
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@nfltix.com",
      "first_name": "Chris",
      "last_name": "Dean",
      "contact_phone_number": "8055555555",
      "oauth_refresh_token": "556588585858585858585858858",
      "role": "Manager"
    }
  ],
  "sites": [
    {
      "id_from_network": "315",
      "name": "315.blog.com"
    }
  ]
}</pre></code>
