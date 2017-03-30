

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create an advertiser user

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json``

  Request Body:

  .. code-block:: json

     {
       "user": {
         "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
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
     }
