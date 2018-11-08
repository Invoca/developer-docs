

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an affiliate with users

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "name": "Surf Oz Magazine",
      "status": "Approved",
      "id_from_network": "222",
      "users": [
        {
          "phone_number": "805‐708‐9876",
          "id_from_network": 123,
          "role": "Super",
          "last_name": "Affiliate",
          "first_name": "User",
          "email_settings": [
            { "email_address": "userx@invoca.com",  "use_for_notifications": true }
          ],
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
      ],
      "custom_data": {
        "channel": "Offline lead"
      }
    }

  Response Body:

  Same as a GET response, includes all the affiliate properties.
