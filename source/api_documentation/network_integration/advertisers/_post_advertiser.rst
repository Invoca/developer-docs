

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an advertiser with users

  Endpoints:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers.json``

  or...

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>.json``

  If you prefer the ``/advertisers.json`` endpoint but receive an error, your network will need to be enabled to auto-generate ids from network.

  If you prefer the ``/advertisers/<advertiser_id_from_network>.json`` endpoint, you can also include an id from network in the json body.
  However, note that the body's id from network will take precedence over the endpoint's.

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "name": "NFL Tickets Exchange",
       "id_from_network": "cFUyYnFHy",
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
         },
         {
           "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
           "email_address": "jim@nfltix.com",
           "first_name": "Jim",
           "last_name": "Williams",
           "contact_phone_number": "2135555555",
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

  Response Body:

  Same as a GET response, includes all the advertiser properties.
