.. container:: endpoint-long-description

  .. rubric:: Examples

  Read Campaign 100 for Advertiser 2

  Endpoint:

  `https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_>/quick_stats.json`

  Response Body:

  .. code-block:: json

     {
       "stats": {
         "last_30days": {
           "call_avg_total_duration": 0.0,
           "call_count": 0
         },
         "last_7days": {
           "call_avg_total_duration": 0.0,
           "call_count": 0
         },
         "today": {
           "call_avg_total_duration": 0.0,
           "call_count": 0
         }
       }
     }
