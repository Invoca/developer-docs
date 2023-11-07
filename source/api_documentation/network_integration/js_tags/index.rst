Invoca Tags
============

Manage Invoca Tags (aka JS Tags)
""""""""""""""""""""""""""""""""""""""""""""""""

The Invoca Tag is a snippet of code that connects Invoca to your landing pages. This API documentation helps provide necessary features to create and manage an Invoca Tag and it's revisions.

.. list-table::
  :widths: 15 15 50
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id
    - integer (read-only)
    - The internal Invoca id of the Invoca Tag.

  * - name
    - string
    - The name of the Invoca Tag. Unique within network.

  * - description
    - string
    - Invoca Tag description.

  * - landing_page_url
    - string
    - Website or page URL on which the destination is applied.

  * - active
    - boolean
    - Current status of the Invoca Tag.

  * - status
    - string
    - Current status.

  * - created_at
    - string (read-only)
    - Alias for the destination. Auto-generated names.

  * - **live_revision**
    - object
    - Currently live revision.

  * - **draft_revision**
    - object
    - Current draft revision.

JS Tag Revision
""""""""""""""""""""""""""""""""""""""""""""""""

Revision for the JS Tag

.. warning::
    TODO: STORY-16629 See if it makes to move the whole table to JS Tag Revision documentation and add a link here.

.. list-table::
  :widths: 15 15 50
  :header-rows: 1
  :class: parameters

  * - external_revision_id
    - string (read-only)
    - The current recent revision id if live or nil if draft.

  * - allow_overflow
    - boolean (default false)
    - Reserve one phone number for "overflow" and apply to any additional visitors.

  * - auto_create_local_ringpools
    - boolean (default false)
    - Auto create a ring pool with local numbers

  * - auto_create_toll_free_ringpools
    - boolean (default false)
    - Auto create a ring pool with toll free numbers

  * - auto_swap
    - boolean (default false)
    - Set to true if you want the Invoca JS to automatically detect and replace all numbers on page. This can be useful if you have a large list of phone numbers to manage, or don't know all of the numbers listed across your site. If true, `number_selector` and `number_to_replace` are not needed.

  * - body
    - string
    - Response body of the JS Tag to be added to the site

  * - cache_lifetime_days
    - integer (default 30)
    - This setting determines how long Invoca identifies a visitor to your landing page as a unique visitor. By default, your Tag's attribution window is set to 30 days.

  * - custom_code
    - string
    - The custom code is a scoped function to insert any custom JavaScript to manipulate the options config that will be passed into the Invoca Integration.

  * - **custom_data_fields**
    - array of objects
    - Marketing data fields

  * - custom_data_fields[].enabled
    - boolean
    - Status of the marketing data field.

  * - custom_data_fields[].partner_name
    - string
    - Marketing data field name.

  * - custom_data_fields[].friendly_name
    - string
    - Marketing data field friendly name.

  * - custom_data_fields[].attribution_model
    - string
    - Marketing data field model type.

  * - custom_data_fields[].data_source_type
    - string
    - Data source for the marketing data field.

  * - custom_data_fields[].data_source_name
    - string
    - Friendly name for the marketing data field.

  * - default_campaign
    - object
    - Default campaign for the all numbers found except for ones in `numbers_to_replace` and `numbers_to_not_replace` configurations.

  * - default_campaign.default_campaign_id
    - integer
    - Internal campaign id of the default campaign. TBD: SHOULD THIS BE UPDATED TO id_from_network?

  * - default_campaign.default_campaign_name
    - string
    - Name of the default campaign

  * - destination_param
    - string
    - WHAT IS THIS?

  * - message
    - string
    - Auto-generated or user defined note for the revision.

  * - **numbers_to_replace**
    - array of objects
    - Specify which number(s) to replace and what campaign ID to use for each number.

  * - numbers_to_replace[].phone_number
    - string
    - Phone number to be replaced.

  * - numbers_to_replace[].phone_number_e164
    - string
    - E.164 version of the phone number to be replaced.

  * - numbers_to_replace[].advertiser_campaign_id
    - integer
    - Id of the advertiser campaign to be used for the above phone number.

  * - numbers_to_replace[].advertiser_campaign_name
    - string
    - Name of the advertiser campaign for the above phone number.

  * - numbers_to_replace[].advertiser_campaign_id_from_network
    - string
    - Id of the advertiser campaign to be used for the above phone number.

  * - numbers_to_replace[].destinations_enabled
    - boolean
    - If the linked advertiser campaign has destinations settings.

  * - **numbers_to_not_replace**
    - array of objects
    - Specify which number(s) to **not** replace.

  * - numbers_to_not_replace[].phone_number
    - string
    - Phone number to **not** be replaced.

  * - numbers_to_not_replace[].phone_number_e164
    - string
    - E.164 version of the phone number to **not** be replaced.

  * - numbers_to_not_replace[].destinations_enabled
    - boolean (read-only)
    - Always false.

  * - organic_sources
    - boolean
    - If you receive organic traffic to your landing page, enabling this will fill in your utm marketing parameters with a default value to record that organic attribution.

  * - re_run_attribution_after
    - integer
    - Number of seconds after which Invoca tag makes another attempt at capturing Marketing Data. This allows your Tag to swap in Invoca Promo Numbers immediately, but still capture parameters that may be slower to load.

  * - required_params
    - string
    - Comma-separated list of parameters required to trigger Invoca Tag. Invoca will look for these parameter names in your visitor's browser session and will only run your tag if these parameters are present.

  * - reset_cache_on
    - string
    - This is a list of the Marketing Data parameters Invoca uses to determine attribution for your paid search ads. By default, Invoca uses "gclid", "utm_source", and "utm_medium" for this setting. If any of these parameters change in a visitor's browser session, Invoca will reset all attribution for that site visitor.

  * - wait_for_in_seconds
    - string
    - Number of seconds by which to delay Invoca tag from running. This allows your Invoca Tag to run after your other vendors or user interactions, but may make the swap on your landing page to Invoca Promo Numbers visible to your visitors.

  * - is_draft_revision
    - boolean (read-only)
    - Identifier to get to find if the revision is draft

  * - is_live_revision
    - boolean (read-only)
    - Identifier to get to find if the revision is live

Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags.json``
