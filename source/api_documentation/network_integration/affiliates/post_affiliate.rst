.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an affiliate with users

  Endpoint:

  `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json`

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "name": "Surf Oz Magazine",
      "status": "Approved",
      "users": [
        {
          "phone_number": "805‐708‐9876",
          "id_from_network": 123,
          "role": "Super",
          "last_name": "Affiliate",
          "first_name": "User",
          "email_address": "userx@invoca.com"
        }
      ],
      "sites": [
        {
          "id_from_network": 33567,
          "name": "http://www.surfoz.au"
        },
        {
          "id_from_network": 44920,
          "name": "http://www.blogspot.com/surfoz"
        }
      ]
    }

  Response Body:

  .. code-block:: json

    {
    }

