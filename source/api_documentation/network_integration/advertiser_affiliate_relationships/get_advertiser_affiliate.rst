.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a single relationship

  Endpoint:
  `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/1/affiliates/222.json`

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     {
       "status": "Approved",
       "affiliate_id_from_network": "222"
     }
