
.. container:: endpoint-long-description

  .. rubric:: Examples

  Read an Invoca Tag Revision

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/networks/<network_id>/js_tags/<js_tag_id>/revisions/<external_revision_id>.json``

  Response Code: 200

  Response Body:

  .. code-block:: json

      {
        "allow_overflow": true,
        "auto_create_local_ringpools": false,
        "auto_create_toll_free_ringpools": false,
        "auto_swap": false,
        "body": "(function(networkId) {\nvar automaticIntegrations = {};\n\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [];\n\nvar customDataWaitForConfigAnonymousFunctions = [];\n\nvar defaultCampaignId = null;\n\nvar destinationSettings = {\n  paramName: null\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = {\"gclid\":\"*\",\"utm_source\":\"linkedin_company\",\"utm_medium\":\"email\"};\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    console.log('Invoca Tag paused at 11/06/23   8:26 AM');\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            false,\n  cookieDays:          cacheLifetimeDays,\n  country:             null,\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig,\n  waitForDataAnonymousFunctions:  customDataWaitForConfigAnonymousFunctions\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(26);\n",
        "cache_lifetime_days": 30,
        "cache_lifetime_warning": null,
        "collect_ip": false,
        "collect_user_agent": false,
        "created_at": "2023-11-06T04:10:51-08:00",
        "custom_code": "console.log('Invoca Tag paused at 11/06/23   8:26 AM');",
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
        "required_params": "gclid,utm_source=linkedin_company,utm_medium=email",
        "reset_cache_on": [
          "gclid",
          "utm_source",
          "utm_medium"
        ],
        "updated_at": "2023-11-06T08:55:11-08:00",
        "wait_for_in_seconds": 0,
        "warning": null
      }

  .. raw:: html
