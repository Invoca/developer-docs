Whisper Prompts
===============

Manage whisper prompts for campaigns
""""""""""""""""""""""""""""""""""""

A whisper prompt can be created from provided text or a professional prompt recordings can be assigned as whisper prompt.

Create whisper prompt
~~~~~~~~~~~~~~~~~~~~~

**Example: create whisper prompt**

POST

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "whisper_prompt_text": "How are you today?",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Assign prompt recording as whisper prompt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: assign prompt recording as whisper prompt**

POST

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "whisper_prompt_id_from_network": "rec34",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Retrieve whisper prompt for a campaign
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: retrieve whisper prompt for a campaign**

GET

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Response (*complete response not shown*)

.. code-block:: json

  {
    "name": "Selling Shoes",
    "status": "Activated",
    "future_terms": {
      "ivr_tree": {
        "record_calls": false,
        "whisper_prompt_text": "How are you today?",
        "whisper_prompt_id_from_network": "rec34",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }
  }
