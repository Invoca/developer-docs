.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all relationships for advertiser id from network 1

  Endpoint:
  `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates.json`

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     [
       {
         "status": "Approved",
         "affiliate_id_from_network": "222"
       },
       {
         "status": "Approved",
         "affiliate_id_from_network": "34518"
       }
     ]
