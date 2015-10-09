Advertiser Affiliate Relationships
==================================

* * *

Changes to the Relationship between Advertiser and Affiliate on the network platform are replicated to the Invoca platform using this API.
The operations on Advertiser‐Affiliate Relationships are similar to Network, in that the interface is fully idempotent, and the create and update commands will act as “create or update”.

Relationship status is set individually but reading is available for one or all relationships for an advertiser.

Parameters for the relationships are shown below

<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>affiliate_id_from_network</td><td>string</td><td>The network id for the affiliate. (read only)</td></tr>
  <tr><td>status</td><td>One of: Pending, Approved, Suspended, Declined, Deactivated</td><td>Status of the advertiser ‐ affiliate relationship.</td></tr>
</table>

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/<advertiser_id_from_network>/affiliates/<affiliate_id_from_network>.json`


## GET all Advertiser-Affiliate relationships
GET `/advertisers/<advertiser_id>/affiliates`


### Examples
<hr>

Read all relationships for advertiser id from network 1

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/1/affiliates.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>[
  {
    "status": "Approved",
    "affiliate_id_from_network": "222"
  },
  {
    "status": "Approved",
    "affiliate_id_from_network": "34518"
  }
]</pre></code>


## GET an Advertiser-Affiliate relationship
GET `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


### Examples
<hr>

Read a single relationship

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/1/affiliates/222.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
  "status": "Approved",
  "affiliate_id_from_network": "222"
}</pre></code>


## Create an Advertiser-Affiliate relationship (POST)
POST `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


### Examples
<hr>

Create relationship between Advertiser id from network 1 and Affiliate id from network 222

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/1/affiliates/222.json`

Format: application/json

Request Body:
<pre><code>{
  "status": "Approved"
}</pre></code>

Response Code: 201

Response Body:
<pre><code>{
}</pre></code>


## Update an Advertiser-Affiliate relationship (PUT)
PUT `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`

Update an Advertiser-Affiliate relationship

## DELETE An Advertiser-Affiliate relationship
DELETE `/advertisers/<advertiser_id>/affiliates/<affiliate_id>`


### Examples
<hr>

Delete a relationship

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/1/affiliates/222.json`

Response Code: 200
