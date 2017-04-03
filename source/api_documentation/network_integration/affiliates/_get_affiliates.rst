

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all Affiliates for this network

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates.json``

  Request Body:

  .. code-block:: json

    [
      {
        "id": 19,
        "id_from_network": "222",
        "object_url": "https://invoca.net/ps/19/dashboards/ui",
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
            "email_settings": [
              { "email_address": "userx@invoca.com",  "use_for_notifications": true }
            ],
            "id_from_network": "1231",
            "first_name": "User",
            "phone_number": "805‐708‐9876",
            "last_name": "Affiliate",
            "role": "Super"
          }
        ],
        "status": "Approved",
        "custom_data": {
          "channel": "Online lead"
        }
      }
    ]

