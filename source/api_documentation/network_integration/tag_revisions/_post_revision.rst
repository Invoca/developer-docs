

.. container:: endpoint-long-description

  .. rubric:: Examples

  Create a new Draft Tag Revision

  Endpoint:

  ``https://invoca.net/api/2022-08-01/networks/<network_id>/js_tags/<js_tag_id>/revisions.json``

  Format: application/json

  Request Body:

  .. code-block:: json

    {
      "allow_overflow": false,
      "auto_create_local_ringpools": false,
      "auto_create_toll_free_ringpools": false,
      "auto_swap": true,
      "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"calling_page\", \"Last\", \"JavascriptDataLayer\", \"location.hostname + location.pathname\"); }, paramName: \"calling_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"gclid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"gclid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"g_cid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"g_cid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"First\", \"JavascriptDataLayer\", \"location.href\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"msclkid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"msclkid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_campaign\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_campaign\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_content\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_content\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_medium\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_medium\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_source\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_source\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"wbraid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"wbraid\", fallbackValue: null }\n];\n\nvar defaultCampaignId = \"87\";\n\nvar destinationSettings = {\n  paramName: \"invoca_detected_destination\"\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            true,\n  cookieDays:          cacheLifetimeDays,\n  country:             \"US\",\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(29);\n",
      "cache_lifetime_days": 30,
      "cache_lifetime_warning": null,
      "created_at": "2023-11-15T08:01:36-08:00",
      "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n",
      "custom_data_fields": [
        {
          "enabled": false,
          "partner_name": "calling_page",
          "friendly_name": "Calling Page",
          "attribution_model": "Last",
          "data_source_type": "JavascriptDataLayer",
          "data_source_name": "location.hostname + location.pathname"
        },
        {
          "enabled": false,
          "partner_name": "gclid",
          "friendly_name": "Google Click ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": false,
          "partner_name": "g_cid",
          "friendly_name": "Google Analytics Client ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "landing_page",
          "friendly_name": "Full Landing Page URL",
          "attribution_model": "First",
          "data_source_type": "JavascriptDataLayer",
          "data_source_name": "location.href"
        },
        {
          "enabled": true,
          "partner_name": "msclkid",
          "friendly_name": "Microsoft Ads Click ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_campaign",
          "friendly_name": "Marketing Campaign",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_content",
          "friendly_name": "Marketing Content",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_medium",
          "friendly_name": "Marketing Medium",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_source",
          "friendly_name": "Marketing Source",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "wbraid",
          "friendly_name": "Google WBRAID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        }
      ],
      "default_campaign": {
        "default_campaign_id": "87",
        "default_campaign_name": "Default: Default Call Treatment"
      },
      "js_tag_id": "2510358551",
      "message": "default message",
      "numbers_to_not_replace": [],
      "numbers_to_replace": [],
      "organic_sources": true,
      "re_run_attribution_after": null,
      "required_params": "",
      "reset_cache_on": [
        "gclid",
        "utm_source",
        "utm_medium"
      ],
      "updated_at": "2023-11-15T08:01:36-08:00",
      "wait_for_in_seconds": 0.0,
      "warning": null
    }

  Response Code: 201

  Response Body:

  .. code-block:: json

    {
      "allow_overflow": false,
      "auto_create_local_ringpools": false,
      "auto_create_toll_free_ringpools": false,
      "auto_swap": true,
      "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"First\", \"JavascriptDataLayer\", \"location.href\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"msclkid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"msclkid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_campaign\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_campaign\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_content\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_content\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_medium\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_medium\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_source\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_source\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"wbraid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"wbraid\", fallbackValue: null }\n];\n\nvar defaultCampaignId = null;\n\nvar destinationSettings = {\n  paramName: \"invoca_detected_destination\"\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            true,\n  cookieDays:          cacheLifetimeDays,\n  country:             null,\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    ['calling_page','gclid','g_cid'],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(29);\n",
      "cache_lifetime_days": 30,
      "cache_lifetime_warning": null,
      "created_at": "2023-11-15T12:07:28-08:00",
      "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***",
      "custom_data_fields": [
        {
          "enabled": false,
          "partner_name": "calling_page",
          "friendly_name": "Calling Page",
          "attribution_model": "Last",
          "data_source_type": "JavascriptDataLayer",
          "data_source_name": "location.hostname + location.pathname"
        },
        {
          "enabled": false,
          "partner_name": "gclid",
          "friendly_name": "Google Click ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": false,
          "partner_name": "g_cid",
          "friendly_name": "Google Analytics Client ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "landing_page",
          "friendly_name": "Full Landing Page URL",
          "attribution_model": "First",
          "data_source_type": "JavascriptDataLayer",
          "data_source_name": "location.href"
        },
        {
          "enabled": true,
          "partner_name": "msclkid",
          "friendly_name": "Microsoft Ads Click ID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_campaign",
          "friendly_name": "Marketing Campaign",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_content",
          "friendly_name": "Marketing Content",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_medium",
          "friendly_name": "Marketing Medium",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "utm_source",
          "friendly_name": "Marketing Source",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        },
        {
          "enabled": true,
          "partner_name": "wbraid",
          "friendly_name": "Google WBRAID",
          "attribution_model": "Last",
          "data_source_type": "URLParam",
          "data_source_name": ""
        }
      ],
      "default_campaign": {},
      "destination_param": "invoca_detected_destination",
      "external_revision_id": null,
      "is_draft_revision": true,
      "is_live_revision": false,
      "js_tag_id": "2510358551",
      "message": "",
      "numbers_to_not_replace": [],
      "numbers_to_replace": [],
      "organic_sources": true,
      "re_run_attribution_after": null,
      "required_params": "",
      "reset_cache_on": [
          "gclid",
          "utm_source",
          "utm_medium"
      ],
      "updated_at": "2023-11-15T12:07:28-08:00",
      "wait_for_in_seconds": 0.0,
      "warning": null
    }
