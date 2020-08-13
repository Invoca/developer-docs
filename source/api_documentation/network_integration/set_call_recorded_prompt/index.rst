Call Recorded Prompt
====================

Set Play Call Recorded Prompt to Better Customize the Call Treatment
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

By default, when you choose to record the call, a prompt "This call may be recorded" will be played at the beginning of each call. This default prompt may be
redundant if you want to set up other prompts later in the ivr tree. For more information on customized prompts, please refer to Prompt Recordings page.

Important Notice
~~~~~~~~~~~~~~~~
By law, when calls are recorded, callers must be notified that the call is being recorded at the start of the call.
By disabling the “This call may be recorded” prompt, you ACCEPT  RESPONSIBILITY for providing and ACKNOWLEDGE that you will
provide your own notification to callers that calls will be recorded in accordance with state and federal laws.
For questions about this message, please contact help@invoca.com.

Set Play Call Recorded Prompt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To better customize the call treatment, set ``"play_call_recorded_prompt"`` to ``true`` or
``false`` to turn on and off the default prompt played at the beginning of each call.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns.json``

Example Request Body (complete request now shown)

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": true,
      "play_call_recorded_prompt": false,
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

PUT

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": true,
      "play_call_recorded_prompt": false,
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }
