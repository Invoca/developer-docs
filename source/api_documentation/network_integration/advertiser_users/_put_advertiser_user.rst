

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update an Advertiser User

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users/<user_id>``

  Request Body:

  .. code-block:: json

     {
       "user": {
         "first_name": "Chris",
         "last_name": "Dean",
         "contact_phone_number": "8055555555",
         "role": "Manager"
       }
     }
