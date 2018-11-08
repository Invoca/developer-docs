

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update a network and its user with invalid email address

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "users": [
        {
          "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
          "email_settings" : [
            { "email_address": "chris@domain.com",  "use_for_notifications": true }
          ],
          "first_name": "Chris",
          "last_name": "Dean",
          "phone_number": "8004377950",
          "role": "Manager",
          "notify_on_budgets": true,
          "notify_on_campaign_applications": false,
          "notify_on_campaign_expirations": false,
          "notify_on_creative_duplication_requests": true,
          "notify_on_network_announcements": true,
          "notify_on_performance_notifications": false,
          "notify_on_monthly_campaign_performance_reports": true,
          "notify_on_weekly_campaign_performance_reports": false,
          "notify_on_call_activities": true
        }
      ]
    }

  Response Code: 403

  Response Body:

  .. code-block:: json

    {
      "errors": {
        "users": [
          {
            "email_settings": [
              { "email_address": ["is invalid"] }
            ]
          }
        ]
      }
    }

  .. raw:: html

    <hr>

  Delete network users by putting an empty user hash

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "users": [
      ]
    }
