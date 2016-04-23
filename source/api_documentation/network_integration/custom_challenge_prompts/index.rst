Custom Challenge Prompts
========================

Manage custom challenge prompt for campaigns
""""""""""""""""""""""""""""""""""""""""""""

A custom challenge prompt can be created from provided text or a professional prompt recordings can be assigned as custom challenge prompt.

Create custom challenge prompt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: create custom challenge prompt**

POST

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
            "record_calls": false,
            "custom_challenge_prompt_text": "Thank you for calling.",
            "root": {
                "node_type": "Connect",
                "destination_phone_number": "8056173768",
                "destination_country_code": ""
            }
      }
  }

Assign prompt recording as custom challenge prompt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: assign prompt recording as custom challenge prompt**

POST

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
            "record_calls": false,
            "custom_challenge_prompt_id_from_network": "rec34",
            "root": {
                "node_type": "Connect",
                "destination_phone_number": "8056173768",
                "destination_country_code": ""
            }
      }
  }

Retrieve custom challenge prompt for a campaign
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: retrieve custom challenge prompt for a campaign**

GET

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Response

.. code-block:: json

  {
    "name": "Selling Shoes",
    "status": "Activated",
    "future_terms": {
      "ivr_tree": {
        "record_calls": false,
        "custom_challenge_prompt_text": "Thank you for calling.",
        "custom_challenge_prompt_id_from_network": "rec34",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }
  }
