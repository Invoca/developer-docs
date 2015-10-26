.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all advertiser users for advertiser e0Fv6YEk

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     [
       {
         "email_address": "chris@nfltix.com",
         "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
         "first_name": "Chris",
         "contact_country_code": "1",
         "last_name": "Dean",
         "role": "Manager",
         "oauth_refresh_token": "556588585858585858585858858",
         "contact_phone_number": "8886033760"
       }
     ]
