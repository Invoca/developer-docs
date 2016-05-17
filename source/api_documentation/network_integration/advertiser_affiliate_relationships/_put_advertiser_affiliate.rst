

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update an Advertiser-Affiliate relationship with id from network 1 and Affiliate id from network 222

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json``

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "status": "Approved"
     }

  Response Code: 200

  Response Body:

  .. code-block:: json

     {
     }
