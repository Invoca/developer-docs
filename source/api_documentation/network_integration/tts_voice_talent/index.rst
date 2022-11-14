TTS Voice Talent
======================

For full details on creating and updating campaigns via the API, see :doc:`Advertiser Campaigns <../advertiser_campaigns/index>`.

Manage TTS voice talent for campaigns
"""""""""""""""""""""""""""""""""""""""""""

TTS voice talent can be sent for a campaign to use different accents for TTS prompts on a call.

Set TTS Voice Talent
~~~~~~~~~~~~~~~~~~~~~~~~~~

To generate voice prompts using a certain voice talent for a given campaign, set ``"tts_voice_talent_id"`` on the IVR you want.

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "tts_voice_talent_id": 3,
      "root": {
        "node_type": "Connect",
        "destination_phone_number": "8056173768",
        "destination_country_code": ""
      }
    }
  }

Conditions
~~~~~~~~~~

English voice options
---------------------

.. list-table::
  :widths: 10 10 10 10
  :header-rows: 1
  :class: parameters

  * - Option
    - Voice Name
    - Gender
    - Language code (Country)

  * - 3 (Default)
    - Julie
    - Female
    - en-US (United States)

  * - 7
    - Bridget
    - Female
    - en-UK (United Kingdom)

  * - 8
    - Nicole
    - Female
    - en-AU (Australia)

  * - 9
    - Russell
    - Male
    - en-AU (Australia)

  * - 10
    - Amy
    - Female
    - en-UK (United Kingdom)

  * - 11
    - Emma
    - Female
    - en-UK (United Kingdom)

  * - 12
    - Brian
    - Male
    - en-UK (United Kingdom)

  * - 13
    - Aditi
    - Female
    - en-IN (India)

  * - 14
    - Raveena
    - Female
    - en-IN (India)

  * - 15
    - Joanna
    - Female
    - en-US (United States)

  * - 16
    - Kendra
    - Female
    - en-US (United States)

  * - 17
    - Kimberly
    - Female
    - en-US (United States)

  * - 18
    - Salli
    - Female
    - en-US (United States)

  * - 19
    - Joey
    - Male
    - en-US (United States)

  * - 20
    - Matthew
    - Male
    - en-US (United States)

  * - 21
    - Geraint
    - Male
    - en-UK (United Kingdom)


French voice options
--------------------

.. list-table::
  :widths: 10 10 10 10
  :header-rows: 1
  :class: parameters

  * - Option
    - Voice Name
    - Gender
    - Language code (Country)

  * - 22
    - Celine
    - Female
    - fr-FR (France)

  * - 23
    - Lea
    - Female
    - fr-FR (France)

  * - 24
    - Mathieu
    - Male
    - fr-FR (France)

  * - 25
    - Chantal
    - Female
    - fr-CA (Canada)


Spanish voice options
---------------------

.. list-table::
  :widths: 10 10 10 10
  :header-rows: 1
  :class: parameters

  * - Option
    - Voice Name
    - Gender
    - Language code (Country)

  * - 26
    - Conchita
    - Female
    - es-ES (Spain)

  * - 27
    - Lucia
    - Female
    - es-ES (Spain)

  * - 28
    - Enrique
    - Male
    - es-ES (Spain)

  * - 29
    - Mia
    - Female
    - es-MX (Mexico)

  * - 30
    - Lupe
    - Female
    - es-US (United States)

  * - 31
    - Penelope
    - Female
    - es-US (United States)

  * - 32
    - Miguel
    - Male
    - es-US (United States)

