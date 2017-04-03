

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read network and its users

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "name": "Invoca",
      "users": [
        {
          "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
          "email_settings": [
             "email_address": "chris@nfltix.com", "use_for_notifications": true }
          ],
          "first_name": "Chris",
          "last_name": "Dean",
          "phone_number": "800‐437‐7950",
          "role": "Manager"
        },
        {
          "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
          "email_address": "jim@nfltix.com",
          "first_name": "Jim",
          "last_name": "Williams",
          "phone_number": "800‐437‐7950",
          "role": "Observer"
        }
      ]
    }
