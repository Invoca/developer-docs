

.. container:: endpoint-long-description

  .. rubric:: Examples

  Pause an Invoca Tag

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/pause.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "id": "4225568320",
      "name": "alpha-test for example.com",
      "description": "This is alpha phase test.",
      "landing_page_url": "",
      "active": false,
      "status": "Paused",
      "created_at": "2023-11-07 03:30:12 -0800",
      "updated_at": "2023-11-07 03:46:45 -0800",
      "live_revision": {
        "author": "Oauth API User",
        "allow_overflow": false,
        "auto_create_local_ringpools": false,
        "auto_create_toll_free_ringpools": false,
        "auto_swap": false,
        "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [];\n\nvar defaultCampaignId = null;\n\nvar destinationSettings = {\n  paramName: null\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    console.log('Invoca Tag paused at 11/07/23   3:46 AM');\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              false,\n  autoSwap:            false,\n  cookieDays:          cacheLifetimeDays,\n  country:             null,\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(26);\n",
        "cache_lifetime_days": 30,
        "created_at": "2023-11-07T03:46:45-08:00",
        "custom_code": "console.log('Invoca Tag paused at 11/07/23   3:46 AM');",
        "custom_data_fields": [],
        "default_campaign": {},
        "destination_param": null,
        "external_revision_id": 1,
        "is_draft_revision": false,
        "is_live_revision": true,
        "js_tag_id": "4225568320",
        "message": "PAUSED",
        "numbers_to_replace": [],
        "numbers_to_not_replace": [],
        "organic_sources": true,
        "re_run_attribution_after": null,
        "required_params": "",
        "reset_cache_on": [
          "gclid",
          "utm_source",
          "utm_medium"
        ],
        "cache_lifetime_warning": null,
        "updated_at": "2023-11-07T03:46:45-08:00",
        "wait_for_in_seconds": 0,
        "cache_lifetime_options": [
          1,
          7,
          14,
          30
        ],
        "warning": null
      },
      "draft_revision": {
        "author": "Oauth API User",
        "allow_overflow": false,
        "auto_create_local_ringpools": false,
        "auto_create_toll_free_ringpools": false,
        "auto_swap": false,
        "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"line_of_business\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"line_of_business\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"offer\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"offer\", fallbackValue: null }\n];\n\nvar defaultCampaignId = null;\n\nvar destinationSettings = {\n  paramName: null\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            false,\n  cookieDays:          cacheLifetimeDays,\n  country:             null,\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(26);\n",
        "cache_lifetime_days": 30,
        "created_at": "2023-11-07T03:30:12-08:00",
        "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n",
        "custom_data_fields": [
          {
            "enabled": true,
            "partner_name": "landing_page",
            "friendly_name": "Landing Page",
            "attribution_model": "Unique",
            "data_source_type": "URLParam",
            "data_source_name": ""
          },
          {
            "enabled": true,
            "partner_name": "line_of_business",
            "friendly_name": "Line of Business",
            "attribution_model": "Unique",
            "data_source_type": "URLParam",
            "data_source_name": ""
          },
          {
            "enabled": true,
            "partner_name": "offer",
            "friendly_name": "Offer",
            "attribution_model": "Unique",
            "data_source_type": "URLParam",
            "data_source_name": ""
          }
        ],
        "default_campaign": {},
        "destination_param": null,
        "external_revision_id": null,
        "is_draft_revision": true,
        "is_live_revision": false,
        "js_tag_id": "4225568320",
        "message": "Auto-generated first draft",
        "numbers_to_replace": [],
        "numbers_to_not_replace": [],
        "organic_sources": true,
        "re_run_attribution_after": null,
        "required_params": "",
        "reset_cache_on": [
          "gclid",
          "utm_source",
          "utm_medium"
        ],
        "cache_lifetime_warning": null,
        "updated_at": "2023-11-07T03:30:12-08:00",
        "wait_for_in_seconds": 0,
        "cache_lifetime_options": [
          1,
          7,
          14,
          30
        ],
        "warning": null
      }
    }
