Speech Recognition
======================

For full details on creating and updating campaigns via the API, see :doc:`Advertiser Campaigns <../advertiser_campaigns/index>`.

Manage speech recognition for campaigns
"""""""""""""""""""""""""""""""""""""""""""

Speech recognition can be set for a campaign to determine whether or not the caller may respond verbally to prompts in the IVR. When set to true, the caller can respond both verbally and with keypresses.

Set Speech Recognition
~~~~~~~~~~~~~~~~~~~~~~~~~~

To enable speech recognition for a campaign, set ``"asr_enabled"`` to true.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "asr_enabled": true,
      "root": {
        "node_type": "YesOrNo",
        "prompt": "Are you having a good day?",
        "children": [
            {
                "node_type": "Connect",
                "destination_phone_number": "8007381560",
                "destination_country_code": "1"
            },
            {
                "node_type": "Connect",
                "destination_phone_number": "8007381560",
                "destination_country_code": "1"
            }
        ]
      }
    }
  }
