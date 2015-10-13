GET  /advertiser_campaigns/<advertiser_campaign_id>/archive
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. rubric:: Examples

If a campaign has previously been set to live, either through the API or through the UI, it can be archived, which effectively shuts it down. An archived campaign can be returned to live at a later time. To archive a campaign use this the following endpoint URL:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/archive.json`
