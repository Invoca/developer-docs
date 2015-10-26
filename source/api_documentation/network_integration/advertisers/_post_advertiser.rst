.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an advertiser with users

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json``

  Format: application/json

  Response Body:

  .. code-block:: json

     {
       "name": "NFL Tickets Exchange",
       "oauth_refresh_token": "7464644784457575757494930303",
       "approval_status": "Approved",
       "web_integration_phone_number": "8004377950",
       "default_creative_id_from_network": "222",
       "users": [
         {
           "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
           "email_address": "chris@nfltix.com",
           "first_name": "Chris",
           "last_name": "Dean",
           "contact_phone_number": "8055555555",
           "oauth_refresh_token": "556588585858585858585858858",
           "role": "Manager"
         },
         {
           "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
           "email_address": "jim@nfltix.com",
           "first_name": "Jim",
           "last_name": "Williams",
           "contact_phone_number": "2135555555",
           "oauth_refresh_token": "4222424241628298228222",
           "role": "Observer"
         }
       ],
       "sites": [
         {
           "id_from_network": "315",
           "name": "315.blog.com"
         },
         {
           "id_from_network": "996",
           "name": "996.blog.com"
         }
       ]
     }
