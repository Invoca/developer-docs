

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all advertisers for this network

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

     [
       {
         "id": 43838,
         "id_from_network": "cFUyYnFHy",
         "web_integration_phone_number": "8004377950",
         "approval_status": "Approved",
         "object_url": "https://invoca.net/as/43838/dashboards/ui",
         "sites": [
           {
             "id_from_network": "315",
             "name": "315.blog.com"
           }
         ],
         "name": "NFL Tickets Exchange",
         "users": [
           {
             "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
             "email_settings": [
               { "email_address": "chris@nfltix.com", "use_for_notifications": true }
             ],
             "first_name": "Chris",
             "phone_number": "888‐603‐3760",
             "last_name": "Dean",
             "role": "Manager",
             "oauth_refresh_token": "556588585858585858585858858",
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
         "default_creative_id_from_network": "222",
         "oauth_refresh_token": "7464644784457575757494930303",
         "custom_data": {
           "channel": "Online lead"
         }
       }
     ]

