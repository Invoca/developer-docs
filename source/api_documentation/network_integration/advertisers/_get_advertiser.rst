:orphan:

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a single advertiser

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     {
       "id_from_network": "cFUyYnFHy",
       "web_integration_phone_number": "8004377950",
       "approval_status": "Approved",
       "sites": [
         {
           "id_from_network": "315",
           "name": "315.blog.com"
         },
         {
           "id_from_network": "996",
           "name": "996.blog.com"
         }
       ],
       "name": "NFL Tickets Exchange",
       "users": [
         {
           "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
           "email_address": "chris@nfltix.com",
           "first_name": "Chris",
           "phone_number": "888‐603‐3760",
           "last_name": "Dean",
           "role": "Manager",
           "oauth_refresh_token": "556588585858585858585858858"
         },
         {
           "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
           "email_address": "jim@nfltix.com",
           "first_name": "Jim",
           "phone_number": "888‐603‐3760",
           "last_name": "Williams",
           "role": "Observer",
           "oauth_refresh_token": "4222424241628298228222"
         }
       ],
       "default_creative_id_from_network": "222",
       "oauth_refresh_token": "7464644784457575757494930303"
     }

