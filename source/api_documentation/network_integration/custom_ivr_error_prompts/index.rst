Custom Wrong/No Keypress Error Prompt
======================================

Manage custom wrong keypress error prompt and custom no keypress error prompt for campaigns
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

A custom wrong keypress error prompt and custom no keypress error prompt can be created from provided text. A professional prompt recording can also be assigned to either.

* **Custom Wrong Keypress Error Prompt**: By default, if a caller presses a key that is not defined for a question they will hear a generic error tone. When this is set, that error tone will be replaced with this custom prompt.
* **Custom No Keypress Error Prompt**: By default, if a caller does not press any key for a question they will hear a generic error tone. When this is set, that error tone will be replaced with this custom prompt.

Assign custom error prompts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: create custom wrong keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_wrong_keypress_error_prompt_text": "You pressed an invalid key.",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

**Example: create custom no keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_no_keypress_error_prompt_text": "You did not make a selection.",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

**Example: create custom wrong keypress error prompt and custom no keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_wrong_keypress_error_prompt_text": "You pressed an invalid key.",
      "custom_no_keypress_error_prompt_text": "You did not make a selection.",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Assign prompt recording as custom error prompts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: assign prompt recording as custom wrong keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_wrong_keypress_error_prompt_id_from_network": "rec34",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

**Example: assign prompt recording as custom no keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_no_keypress_error_prompt_id_from_network": "rec42",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

**Example: assign prompt recordings for custom wrong keypress error prompt and custom no keypress error prompt**

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "custom_wrong_keypress_error_prompt_id_from_network": "rec34",
      "custom_no_keypress_error_prompt_id_from_network": "rec42",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Retrieve custom error prompts for a campaign
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example: retrieve custom error prompts for a campaign**

GET

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Response

.. code-block:: json

  {
    "name": "Selling Shoes",
    "status": "Activated",
    "future_terms": {
      "ivr_tree": {
        "record_calls": false,
        "custom_wrong_keypress_error_prompt_text": "You made an invalid selection.",
        "custom_wrong_keypress_error_prompt_id_from_network": "rec34",
        "custom_no_keypress_error_prompt_text": "You did not press a key.",
        "custom_no_keypress_error_prompt_id_from_network": "rec42",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }
  }
