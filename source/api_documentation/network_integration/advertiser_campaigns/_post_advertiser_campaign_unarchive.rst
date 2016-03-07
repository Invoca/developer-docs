.. container:: endpoint-long-description

  .. rubric:: Examples

  Archived campaigns should be unarchived using this endpoint. It changes campaign status to paused. After that you can activate the campaign using a go_live request.

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/unarchive.json``

  Response Body:

  .. code-block:: json

     {}
