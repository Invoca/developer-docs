Networks
========

* * *

Network users are replicated to and retrieved from the Invoca Marketing Automation Platform using this API.

The network interface is fully idempotent, and the create and update commands both expect the full set of users each time. For instance, if on one POST two users, user1@invoca.com and user2@invoca.com are specified, but on the next POST, only user1@invoca.com is specified, then as a result of that second post, user2@invoca.com will be deleted. For this reason, POST and PUT requests are identical in their effect, although they return 201 and 200 codes respectively for ease of integration.


Parameters

<table>
  <tr><th>Property</th><th>Type</th><th>Value</th></tr>
  <tr><td>name</td><td>string</td><td>Network name (read only).</td></tr>
  <tr><td>users</td><td>json array of hashes</td><td>0 or more users for the network. User attributes are listed below.</td></tr>
  <tr><td>id_from_network</td><td>string</td><td>The network’s id for this User.</td></tr>
  <tr><td>email_address</td><td>string in RFC 2822 addr_spec format</td><td>The user’s email address. Unique for this user. (mandatory field)</td></tr>
  <tr><td>first_name</td><td>string</td><td>The user’s first name.</td></tr>
  <tr><td>last_name</td><td>string</td><td>The user’s last name.</td></tr>
  <tr><td>phone_number</td><td>string in ITU E.164 format or 10-digit US form (no punctuation)</td><td>The user’s phone number.</td></tr>
  <tr><td>role</td><td>One of: Super (default), Manager, Member, Observer, Reporting</td><td>The user’s role within the network.</td></tr>
</table>

Endpoint:
`https://invoca.net/api/@version/<network_id>/network.json`

## GET Network and its Users
GET `/<network_id>/network`


### Examples
<hr>

Read network and its users

Endpoint:
`https://invoca.net/api/@version/<network_id>/network.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
  "name": "Invoca",
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@nfltix.com",
      "first_name": "Chris",
      "last_name": "Dean",
      "phone_number": "800‐437‐7950",
      "role": "Manager"
    },
    {
      "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
      "email_address": "jim@nfltix.com",
      "first_name": "Jim",
      "last_name": "Williams",
      "phone_number": "800‐437‐7950",
      "role": "Observer"
    }
  ]
}</pre></code>


## Create Network Users (POST)
POST `/<network_id>/network`


### Examples
<hr>

Create network users

Endpoint:
`https://invoca.net/api/@version/<network_id>/network.json`

Format: application/json

Request Body:
<pre><code>{
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@nfltix.com",
      "first_name": "Chris",
      "last_name": "Dean",
      "phone_number": "8004377950",
      "role": "Manager"
    },
    {
      "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
      "email_address": "jim@nfltix.com",
      "first_name": "Jim",
      "last_name": "Williams",
      "phone_number": "8004377950",
      "role": "Observer"
    }
  ]
}</pre></code>

Response Code: 201


## Update Network Users (PUT)
PUT `/<network_id>/network`


### Examples
<hr>

Update a network and its user with invalid email address

Endpoint:
`https://invoca.net/api/@version/<network_id>/network.json`

Format: application/json

Request Body:
<pre><code>{
  "users": [
    {
      "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
      "email_address": "chris@",
      "first_name": "Chris",
      "last_name": "Dean",
      "phone_number": "8004377950",
      "role": "Manager"
    }
  ]
}</pre></code>

Response Code: 403

Response Body:
<pre><code>{
  "errors": {
    "users": [
      {
        "email_address": [
          "is invalid"
        ]
      }
    ]
  }
}</pre></code>

<hr>

Delete network users by putting an empty user hash

Endpoint:
`https://invoca.net/api/@version/<network_id>/network.json`

Format: application/json

Request Body:
<pre><code>{
  "users": [
  ]
}</pre></code>
