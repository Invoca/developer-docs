Call Recording Condition
========================

Manage call recording conditions for campaigns
""""""""""""""""""""""""""""""""""""""""""""

A call recording condition can be set for a campaign to determine whether or not the call should be recorded. The call will be recorded if the full condition is met.

Set Call Recording Condition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To conditionally record calls, set ``"record_calls"`` to ``true`` and set ``"call_recording_condition"`` to the expression you want to evaluate.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": true,
      "call_recording_condition": "during_hours and repeat",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Record All Calls
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To record all calls (and to remove an existing call recording condition), set ``"record_calls"`` to ``true`` and set ``"call_recording_condition"`` to empty string ``""``.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": true,
      "call_recording_condition": "",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Record No Calls
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To record no calls (and to remove an existing call recording condition), set ``"record_calls"`` to ``false`` and set ``"call_recording_condition"`` to empty string ``""``.

(If ``"record_calls"`` is ``false``, no calls will be recorded even if there is a ``"call_recording_condition"`` set.)

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "record_calls": false,
      "call_recording_condition": "",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

.. include:: ../ivr_tree_conditions.rst
