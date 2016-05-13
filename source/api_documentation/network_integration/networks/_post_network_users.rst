

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create network users

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "users": [
        {
          "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
          "email_address": "chris@nfltix.com",
          "first_name": "Chris",
          "last_name": "Dean",
          "phone_number": "8004377950",
          "role": "Manager"
        },
        {
          "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
          "email_address": "jim@nfltix.com",
          "first_name": "Jim",
          "last_name": "Williams",
          "phone_number": "8004377950",
          "role": "Observer"
        }
      ]
    }

  Response Code: 201
