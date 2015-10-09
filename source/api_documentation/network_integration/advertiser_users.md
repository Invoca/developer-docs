Advertiser Users
================

* * *

For convenience, the API provides an interface for performing operations on specific advertiser users. This is useful
for situations where it is inconvenient to send an array of all existing advertiser users.

Endpoint:

    https://invoca.net/api/@version/&lt;network_id&gt;/advertisers/&lt;advertiser_id_from_network&gt;/users/&lt;user_id_from_network&gt;.json

## GET all Advertiser Users for Advertiser
GET `/advertisers/<advertiser_id>/users`

### Examples
<hr>

Read all advertiser users for advertiser e0Fv6YEk

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/e0Fv6YEk/users.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>[
  {
    "email_address": "chris@nfltix.com",
    "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
    "first_name": "Chris",
    "contact_country_code": "1",
    "last_name": "Dean",
    "role": "Manager",
    "oauth_refresh_token": "556588585858585858585858858",
    "contact_phone_number": "8886033760"
  }
]</pre></code>


## GET an Advertiser User
GET `/advertisers/<advertiser_id>/users/<user_id>`

### Examples
<hr>

Read a specific advertiser user

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/e0Fv6YEk/users/549494858585Dxlj2uCX0ijqXP4nAW.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
  "email_address": "chris@nfltix.com",
  "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
  "first_name": "Chris",
  "contact_country_code": "1",
  "last_name": "Dean",
  "role": "Manager",
  "oauth_refresh_token": "556588585858585858585858858",
  "contact_phone_number": "8886033760"
}</pre></code>


## Create and Advertiser User (POST)
POST `/advertisers/<advertiser_id>/users`


### Examples
<hr>

Create an advertiser user

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/e0Fv6YEk/users.json`

Request Body:
<pre><code>{
  "user": {
    "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
    "email_address": "chris@nfltix.com",
    "first_name": "Chris",
    "last_name": "Dean",
    "contact_phone_number": "8055555555",
    "oauth_refresh_token": "556588585858585858585858858",
    "role": "Manager"
  }
}</pre></code>


## Update an Advertiser User (PUT)
PUT `/advertisers/<advertiser_id>/users/<user_id>`

## DELETE An Advertiser User
DELETE `/advertisers/<advertiser_id>/users/<user_id>`


### Examples
<hr>

Delete an advertiser user

Endpoint:
`https://invoca.net/api/@version/<network_id>/advertisers/e0Fv6YEk/users/549494858585Dxlj2uCX0ijqXP4nAW.json`

Format: application/json

Response Code: 200

Response Body:
<pre><code>{
}</pre></code>
