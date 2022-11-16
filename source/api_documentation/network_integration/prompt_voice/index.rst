Prompt Voice
======================

For full details on creating and updating campaigns via the API, see :doc:`Advertiser Campaigns <../advertiser_campaigns/index>`.

Manage Prompt Voice for Campaigns
"""""""""""""""""""""""""""""""""""""""""""

A prompt voice can be set on the campaign's IVR to configure the accent used for a campaign's prompts.

Set Prompt Voice
~~~~~~~~~~~~~~~~~~~~~~~~~~

To use a particular prompt voice for your campaign, set ``"tts_voice_talent_id"`` on the IVR. See the tables in the **Conditions** section below to determine which prompt voice to use. (Make sure to reference *only* the table corresponds to the language of your campaign.)

POST

``https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json``

Example Request Body

.. code-block:: json

  {
    "ivr_tree": {
      "tts_voice_talent_id": 3,
      "root": {
        "node_type": "Connect",
        "prompt_text": "Please hold while we connect your call",
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

  * - Id
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

  * - Id
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

  * - Id
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

