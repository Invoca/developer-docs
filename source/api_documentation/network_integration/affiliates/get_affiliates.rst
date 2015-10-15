.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all Affiliates for this network

  Endpoint:
  `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates.json`

  Request Body:

  .. code-block:: json

    [
      {
        "id_from_network": "222",
        "sites": [
          {
            "id_from_network": "33567",
            "name": "http://www.surfoz.au"
          },
          {
            "id_from_network": "44920",
            "name": "http://www.blogspot.com/surfoz"
          }
        ],
        "name": "Surf Oz Magazine",
        "users": [
          {
            "email_address": "userx@invoca.com",
            "id_from_network": "1231",
            "first_name": "User",
            "phone_number": "805‐708‐9876",
            "last_name": "Affiliate",
            "role": "Super"
          }
        ],
        "status": "Approved"
      }
    ]

