

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an advertiser with users

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers.json``

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "name": "NFL Tickets Exchange",
       "id_from_network": "cFUyYnFHy",
       "oauth_refresh_token": "7464644784457575757494930303",
       "approval_status": "Approved",
       "web_integration_phone_number": "8004377950",
       "default_creative_id_from_network": "222",
       "users": [
         {
           "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
           "email_settings": [
             { "email_address": "chris@nfltix.com", "use_for_notifications": true }
           ],
           "first_name": "Chris",
           "last_name": "Dean",
           "contact_phone_number": "805-555-5555",
           "oauth_refresh_token": "556588585858585858585858858",
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
         },
         {
           "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
           "email_settings": [
             { "email_address": "jim@nfltix.com", "use_for_notifications": true }
           ],
           "first_name": "Jim",
           "last_name": "Williams",
           "contact_phone_number": "2135555555",
           "oauth_refresh_token": "4222424241628298228222",
           "role": "Observer",
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
           "id_from_network": "315",
           "name": "315.blog.com"
         },
         {
           "id_from_network": "996",
           "name": "996.blog.com"
         }
       ],
       "custom_data": {
         "channel": "Offline lead"
       }
     }

  Response Body:

  Same as a GET response, includes all the advertiser properties.
