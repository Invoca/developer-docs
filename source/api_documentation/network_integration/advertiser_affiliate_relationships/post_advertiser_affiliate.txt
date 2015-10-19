.. container:: endpoint-long-description

  .. rubric:: Examples

  Create relationship between Advertiser id from network 1 and Affiliate id from network 222

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json``

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "status": "Approved"
     }

  Response Code: 201

  Response Body:

  .. code-block:: json

     {
     }
