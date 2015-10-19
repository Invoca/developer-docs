.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all advertisers for this network

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     [
       {
         "id_from_network": "cFUyYnFHy",
         "web_integration_phone_number": "8004377950",
         "approval_status": "Approved",
         "sites": [
           {
             "id_from_network": "315",
             "name": "315.blog.com"
           }
         ],
         "name": "NFL Tickets Exchange",
         "users": [
           {
             "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
             "email_address": "chris1@nfltix.com",
             "first_name": "Chris",
             "phone_number": "888‐603‐3760",
             "last_name": "Dean",
             "role": "Manager",
             "oauth_refresh_token": "556588585858585858585858858"
           }
         ],
         "default_creative_id_from_network": "222",
         "oauth_refresh_token": "7464644784457575757494930303"
       }
     ]

