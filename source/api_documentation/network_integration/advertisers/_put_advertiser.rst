

.. container:: endpoint-long-description

  .. rubric:: Examples

  Update a user from advertiser

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/cFUyYnFHy.json``

  Format: application/json

  Request Body:

  .. code-block:: json

     {
       "name": "NFL Tickets Exchange",
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
           "contact_phone_number": "8055555555",
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
         }
       ],
       "sites": [
         {
           "id_from_network": "315",
           "name": "315.blog.com"
         }
       ],
       "custom_data": {
         "channel": "Offline lead"
       }
     }

  Response Body:

  Same as a GET response, includes all the advertiser properties.
