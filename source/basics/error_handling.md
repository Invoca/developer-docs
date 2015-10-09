Error Handling
==============

### AdvertiserCampaign RingPools
<hr>

Not found – 404:

`https://invoca.net/api/2014­-01-­01/<network_id>/advertisers/1/advertiser_campaigns/100/ring_pools/123.json`

<pre><code>{
  "errors": {
    "invalid_data": "Could not find RingPool 123 for advertiser campaign 100 and advertiser 1",
    "class": "RecordNotFound"
  }
}
</code></pre>


### Affiliate Campaign RingPools
<hr>

Not found – 404:

`https://invoca.net/api/2014­-01-­01/<network_id>/advertisers/1/advertiser_campaigns/100/affiliates/300/affiliate_campaigns/ring_pools/123.json`

<pre><code>{
  "errors": {
    "invalid_data": "Could not find RingPool 123 for affiliate 300 and advertiser campaign 100",
    "class": "RecordNotFound"
  }
}
</code></pre>


### Common RingPool errors:
<hr>

Validation failed – 403 – Body contains a json with validation errors for each field:

<pre><code>{
  "errors": {
    "pool_type": [
      "can't be blank"
    ],
    "destination_type": [
      "can't be blank"
    ],
    "name": [
      "can't be blank"
    ]
  }
}
</code></pre>


Service error – 500 – Body contains a json Error with a unique handle (to use as a
cross‐reference with Invoca):

<pre><code>{
  "errors": {
    "invalid_data": "refer to error handle 1228118400",
    "class": "InternalServiceError"
  }
}
</code></pre>
