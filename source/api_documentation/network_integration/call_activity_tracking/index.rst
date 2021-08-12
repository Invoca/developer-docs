Call Activity Tracking
======================

Manage call activity tracking for campaigns
"""""""""""""""""""""""""""""""""""""""""""

Call activity tracking can be set for a campaign to determine whether or not call activity should be tracked. The call activity will be tracked if the full condition is met.

Set Call Activity Tracking
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To conditionally track call activity, set ``"call_activity_tracking"`` to the tracking option you want.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "call_activity_tracking": "NoTracking",
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Conditions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
  :widths: 30 50 30
  :header-rows: 1
  :class: parameters

  * - Option
    - Details

  * - NoTracking (Default)
    - Default is NoTracking. When set to NoTracking, no IVR or call activity data will be tracked during the call.

  * - PurgeActivityOnCallImport
    - When set to PurgeActivityOnCallImport, IVR and call activity data will be tracked during the call for use while the call is happening but will be purged when the call finishes.

  * - SaveActivityOnCallImport
    - When set to SaveActivityOnCallImport, IVR and call activity data will be tracked during the call and will be saved in the Invoca platform after the call finishes.
