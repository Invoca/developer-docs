Bulk Ringpool API
=================

Before using the Bulk RingPool API, contact [questions@invoca.com](mailto:questions@invoca.com) to enable the Bulk RingPool API feature. It is recommended that before you enable the feature on your production platform, testing occurs on a demo or test platform.

### Overview
<hr>

The Bulk RingPool API is designed to efficiently handle a high volume of requests per second. A persistent connection is strongly recommended.

The Bulk RingPool API can be enabled on the Network, Advertiser, or Publisher level. Note that once enabled, all new or edited RingPools are served by the Bulk RingPool API and not the RingPool API.  Therefore, if the Bulk RingPool API is enabled for your organization,
 attempting to access a RingPool with the RingPool API results in an error.

Finally, also note that only the custom RingPool type is supported by the Bulk RingPool API.

<b>
Example API URL:
</b>

`POST ﻿https://pnapi.invoca.net/api/@pnapi_version/bulk.json`


### Request Body
<hr>

The JSON POST body of the request has a top level key "request" which maps to an array of hashes, where each hash contains a RingPool API URL. The array must contain at least one entry. The requests follow a similar format to the RingPool API, which can be found here.

Each hash in the array must contain a key/value pair with a key of "api_suffix". The value must be the suffix of the RingPool API URL after /api/\<date>.

At least one RingPool parameter must be present in each allocation request, even if the value is an empty string.

Each element may also include a key/value pair with a key of "request_id". If provided, it is echoed in the response for context. This parameter is optional and does not have to be unique across the hashes.

Individual responses and request IDs are returned in the same order as the requests.

Below is an example of the JSON request body:


<pre><code>{
 "requests":[
  {"api_suffix":"<RING_POOL_ID>/allocate_number.json?ring_pool_key=<RING_POOL_KEY>&m1=autos&m2=ford","request_id":"193C5F"},
  {"api_suffix":"<RING_POOL_ID>/allocate_number.json?ring_pool_key=<RING_POOL_KEY>&m1=antiques","request_id":"58CD4F"},
  {"api_suffix":"<RING_POOL_ID>/allocate_number.json?ring_pool_key=<RING_POOL_KEY>&m1=electronics","request_id":"E3901B"}
 ]
}</pre></code>


### Response Body
<hr>

The response format is in <b>JSON</b>.

Below is an example response (whitespace added for clarity):

 <pre><code>{
 "responses":[
  {"request_id":"193C5F","promo_number_formatted":"888-390-6665","promo_number":"8883906665","tracking_url":"http://ringrevenue.com/c/1/14-11-109?us=http%3A%2F%2Fwww2.ringrevenue.com.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8883906665%26PPCPN%3D8883906665"},
  {"request_id":"58CD4F","promo_number_formatted":"877-455-1120","promo_number":"8774551120","tracking_url":"http://ringringrevenue.com/c/1/19-99-210?us=http%3A%2F%2Fwww2.ringrevenue.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8774551120%26PPCPN%3D8774551120"},
  {"request_id":"E3901B","promo_number_formatted":"866-971-5703","promo_number":"8669715703","tracking_url":"http://ringringrevenue.com/c/1/38-240-19?us=http%3A%2F%2Fwww2.ringrevenue.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8669715703%26PPCPN%3D8669715703","overflow":true}
 ]
}</pre></code>

Note the last response above has `"overflow":true`.  This indicates that the number returned is the overflow number for that RingPool.  To simplify the normal case when the number is not overflow, the key-value pair is omitted when the value would be `false`.

Additionally, Bulk API responses return the total server processing (this does not include transit) time for the request in the header under the key “processing-time”, and is reported in milliseconds.

### Errors
<hr>

The Bulk RingPool API clearly identifies errors when a request can not be processed. For example, when the parameters are incorrect, an error response will be returned for that row in the response as shown below:

<pre><code>{
 "responses":[
{"request_id":"193C5F","promo_number_formatted":"888-390-6665","promo_number":"8883906665","tracking_url":"http://ringrevenue.com/c/1/14-11-109?us=http%3A%2F%2Fwww2.ringrevenue.com.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8883906665%26PPCPN%3D8883906665"},
{"request_id":"58CD4F","error_class":"InvalidKey","message":"API Key 'A329F4DC002168' is not valid for resource '1'"},
{"request_id":"E3901B","promo_number_formatted":"866-971-5703","promo_number":"8669715703","tracking_url":"http://ringringrevenue.com/c/1/38-240-19?us=http%3A%2F%2Fwww2.ringrevenue.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8669715703%26PPCPN%3D8669715703"}
]
}</pre></code>

As another example, the following exception occurs when attempting to allocate a number with the RingPool API against a RingPool that has been set up to use the Bulk RingPool API:

<pre><code>{
    "errors":
    {
        "invalid_data":"Numbers are automatically allocated by the PNAPI server",
        "class”:”OnlyBulkNumberAllocationAllowed"
    }
}</pre></code>


If a system error occurs, an InternalServiceError will be returned with an integer error handle.

Contact [questions@invoca.com](mailto:questions@invoca.com) to determine the root cause of such an error.
