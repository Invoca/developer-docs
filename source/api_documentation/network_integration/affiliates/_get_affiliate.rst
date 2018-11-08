

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read a specific affiliate

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/affiliates/222.json``

  Response Body:

  .. code-block:: json

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
          "email_settings:" [
            { "email_address": "userx@invoca.com", "use_for_notifications": true }
          ],
          "id_from_network": "1231",
          "first_name": "User",
          "phone_number": "805‐708‐9876",
          "last_name": "Affiliate",
          "role": "Super",
          "oauth_refresh_token": "556588585858585858585858858",
          "notify_on_budgets": true,
          "notify_on_campaign_applications": false,
          "notify_on_campaign_expirations": false,
          "notify_on_creative_duplication_requests": true,
          "notify_on_network_announcements": true,
          "notify_on_performance_notifications": false,
          "notify_on_monthly_campaign_performance_reports": true,
          "notify_on_weekly_campaign_performance_reports": false,
          "notify_on_call_activities": true,
          "can_login_via_platform": true
        }
      ],
      "status": "Approved",
      "custom_data": {
        "channel": "Online lead"
      }
    }

