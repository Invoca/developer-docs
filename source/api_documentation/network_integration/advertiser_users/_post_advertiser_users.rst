

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an advertiser user

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json``

  Request Body:

  .. code-block:: json

     {
       "user": {
         "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
         "email_address": "chris@nfltix.com",
         "first_name": "Chris",
         "last_name": "Dean",
         "contact_phone_number": "8055555555",
         "role": "Manager"
       }
     }
