Affiliates
==========

* * *

The operations on Affiliate are similar to Network, in that the interface is fully idempotent,
and the create and update commands both expect the full set of affiliate sites and users each time.
Similar to advertisers, you are not allowed to delete if one or more campaigns exist for this affiliate.

<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>id_from_network</td><td>string</td><td>The network object_id for this Affiliate. Unique within network.</td></tr>
  <tr><td>name</td><td>string</td><td>The name of the Affiliate. Unique within the network.</td></tr>
  <tr><td>status</td><td>string (one of): Applied, Approved (default), Declined, Suspended, Archived</td><td>Approval status for this affiliate.</td></tr>
  <tr><td><b>sites</b></td><td>json array of hashes</td><td>1 or more pairs of id_from_network [and name].</td></tr>
  <tr><td>id_from_network</td><td>string</td><td>the site id (PID).</td></tr>
  <tr><td>name</td><td>string</td><td>The site name that matches site id_from_network.</td></tr>
  <tr><td><b>users</b></td><td>json array of hashes</td><td>0 or more users for the organization. Each must have the first 5 fields below.</td></tr>
  <tr><td>id_from_network</td><td>string</td><td>The network object_id for this user.</td></tr>
  <tr><td>email_address</td><td>string in RFC 2822 addr-spec format</td><td>The user’s email address. Unique for this user.</td></tr>
  <tr><td>first_name</td><td>string(must not be blank)</td><td>The user’s first name.</td></tr>
  <tr><td>last_name</td><td>string(must not be blank)</td><td>The user’s last name.</td></tr>
  <tr><td>phone_number</td><td>string in ITU E.164 format or 10-digit US form (no punctuation)</td><td>The user’s phone number.</td></tr>
  <tr><td>role</td><td>One of: Super (default), Manager, Member, Observer</td><td>This user’s role in this organization. (A user mayhave different roles indifferent organizations)</td></tr>
</table>

Endpoint:
`https://invoca.net/api/@version/<network_id>/affiliates/<affiliate_id_from_network>.json`

## GET all Affiliates
GET `/affiliates`


### Examples
<hr>

Read all Affiliates for this network

Endpoint:
`https://invoca.net/api/@version/<network_id>/affiliates.json`

Request Body:
<pre><code>[
  {
    "id_from_network": "222",
    "sites": [
      {
        "id_from_network": "33567",
        "name": "http://www.surfoz.au"
      },
      {
        "id_from_network": "44920",
        "name": "http://www.blogspot.com/surfoz"
      }
    ],
    "name": "Surf Oz Magazine",
    "users": [
      {
        "email_address": "userx@invoca.com",
        "id_from_network": "1231",
        "first_name": "User",
        "phone_number": "805‐708‐9876",
        "last_name": "Affiliate",
        "role": "Super"
      }
    ],
    "status": "Approved"
  }
]</pre></code>

## GET an Affiliate
GET `/affiliates/<affiliate_id>`


### Examples
<hr>

Read a specific affiliate

Endpoint:
`https://invoca.net/api/@version/<network_id>/affiliates/222.json`

Response Body:
<pre><code>{
  "id_from_network": "222",
  "sites": [
    {
      "id_from_network": "33567",
      "name": "http://www.surfoz.au"
    },
    {
      "id_from_network": "44920",
      "name": "http://www.blogspot.com/surfoz"
    }
  ],
  "name": "Surf Oz Magazine",
  "users": [
    {
      "email_address": "userx@invoca.com",
      "id_from_network": "1231",
      "first_name": "User",
      "phone_number": "805‐708‐9876",
      "last_name": "Affiliate",
      "role": "Super"
    }
  ],
  "status": "Approved"
}</pre></code>


## DELETE An Affiliate
DELETE `/affiliates/<affiliate_id>`


### Examples
<hr>

Delete a single affiliate

Endpoint:
`https://invoca.net/api/@version/<network_id>/affiliates/222.json`


Response Body:
<pre><code>{
}</pre></code>

## Create an Affiliate (POST)
POST `/affiliates/<affiliate_id>`


### Examples
<hr>

Create an affiliate with users

Endpoint:
`https://invoca.net/api/@version/<network_id>/affiliates/222.json`

Format: application/json

Request Body:
<pre><code>{
  "name": "Surf Oz Magazine",
  "status": "Approved",
  "users": [
    {
      "phone_number": "805‐708‐9876",
      "id_from_network": 123,
      "role": "Super",
      "last_name": "Affiliate",
      "first_name": "User",
      "email_address": "userx@invoca.com"
    }
  ],
  "sites": [
    {
      "id_from_network": 33567,
      "name": "http://www.surfoz.au"
    },
    {
      "id_from_network": 44920,
      "name": "http://www.blogspot.com/surfoz"
    }
  ]
}</pre></code>

Response Body:
<pre><code>{
}</pre></code>


## Update an Affiliate (PUT)
PUT `/affiliates/<affiliate_id>`


### Examples
<hr>

Update a single affiliate

Endpoint:
`https://invoca.net/api/api/@version/<network_id>/affiliates/222.json`

Request Body:
<pre><code>{
  "name": "Updated Surf Oz Magazine"
}</pre></code>
