

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update a user from advertiser

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json``

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "name": "NFL Tickets Exchange",
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
           "role": "Manager"
         }
       ],
       "sites": [
         {
           "id_from_network": "315",
           "name": "315.blog.com"
         }
       ]
     }

  Response Body:

  Same as a GET response, includes all the advertiser properties.
