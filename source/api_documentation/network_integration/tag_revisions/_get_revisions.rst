
.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all Invoca Tag Revisions

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/networks/<network_id>/js_tags/<js_tag_id>/revisions.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "data": [
        {
          "author": "Oauth API User",
          "allow_overflow": true,
          "auto_create_local_ringpools": false,
          "auto_create_toll_free_ringpools": false,
          "auto_swap": false,
          "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [];\n\nvar defaultCampaignId = null;\n\nvar destinationSettings = {\n  paramName: null\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            false,\n  cookieDays:          cacheLifetimeDays,\n  country:             null,\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(26);\n",
          "cache_lifetime_days": 30,
          "created_at": "2023-11-06T04:10:51-08:00",
          "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n",
          "custom_data_fields": [],
          "default_campaign": {},
          "destination_param": null,
          "external_revision_id": 0,
          "is_draft_revision": false,
          "is_live_revision": true,
          "js_tag_id": "0054811245",
          "message": "Auto-generated initial revision",
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
          "updated_at": "2023-11-06T08:55:11-08:00",
          "wait_for_in_seconds": 0,
          "warning": null
        },
        {
          "author": "John Doe",
          "allow_overflow": false,
          "auto_create_local_ringpools": false,
          "auto_create_toll_free_ringpools": false,
          "auto_swap": true,
          "body": "(function(networkId) {\nvar cacheLifetimeDays = 7;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"line_of_business\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"line_of_business\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"offer\", \"Unique\", \"URLParam\", \"\"); }, paramName: \"offer\", fallbackValue: null }\n];\n\nvar defaultCampaignId = \"84\";\n\nvar destinationSettings = {\n  paramName: null\n};\n\nvar numbersToReplace = {\n  \"44454545557\": \"83\"\n};\n\nvar organicSources = true;\n\nvar reRunAfter = 5000;\n\nvar requiredParams = {\"gclid\":\"*\",\"utm_medium\":\"*\"};\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            true,\n  cookieDays:          cacheLifetimeDays,\n  country:             \"US\",\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [\"888-676-5565\"],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(26);\n",
          "cache_lifetime_days": 7,
          "created_at": "2023-11-06T04:10:51-08:00",
          "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//abhishek-master-d6a37c81-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***",
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
          "default_campaign": {
            "default_campaign_id": 84,
            "default_campaign_name": "Campaign for NY"
          },
          "destination_param": null,
          "external_revision_id": null,
          "is_draft_revision": true,
          "is_live_revision": false,
          "js_tag_id": "0054811245",
          "message": "updated note",
          "numbers_to_replace": [
            {
              "phone_number": "44454545557",
              "phone_number_e164": "44454545557",
              "advertiser_campaign_id": 83,
              "advertiser_campaign_name": "Campaign for Manhattan",
              "advertiser_campaign_id_from_network": "83",
              "destinations_enabled": false
            }
          ],
          "numbers_to_not_replace": [
            {
              "phone_number": "888-676-5565",
              "phone_number_e164": "+18886765565",
              "destinations_enabled": false
            }
          ],
          "organic_sources": true,
          "re_run_attribution_after": 5,
          "required_params": "gclid,utm_medium",
          "reset_cache_on": [
            "gclid",
            "utm_source",
            "utm_medium"
          ],
          "cache_lifetime_warning": null,
          "updated_at": "2023-11-07T02:41:33-08:00",
          "wait_for_in_seconds": 0,
          "warning": null
        }
      ],
      "requestId": null,
      "recordsTotal": 2
      "start": 0
    }

  .. raw:: html
