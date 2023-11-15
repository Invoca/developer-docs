Invoca Tag Revisions
============

Manage Invoca Tag Revisions
""""""""""""""""""""""""""""""""""""""""""""""""

The Invoca Tag Revisions allow you to keep a history of changes made to your Tag configuration. Additionally, you are able to make draft revisions, allowing you to test changes before deploying them.

This API documentation helps provide necessary features to create and manage Invoca Tag Revisions.

.. include:: js_revision_parameters.rst

Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/revisions.json``

Note: when working with a Draft Revision, the <external_revision_id> should be set to `draft` in the URL.

.. api_endpoint::
   :verb: GET
   :path: /revisions
   :description: Get all Tag Revisions
   :page: get_revisions

.. api_endpoint::
   :verb: GET
   :path: /revisions/&lt;external_revision_id&gt;
   :description: Get a Tag Revision
   :page: get_revision

.. api_endpoint::
   :verb: POST
   :path: /revisions
   :description: Create a new Tag Revision
   :page: post_revision

.. api_endpoint::
   :verb: PUT
   :path: /revisions/draft
   :description: Update an existing Tag Revision
   :page: put_revision

.. api_endpoint::
  :verb: DELETE
  :path: /revisions/draft
  :description: Delete an existing Tag Revision
  :page: delete_revision


Error Handling
""""""""""""""

Forbidden – 403:

POST
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/revisions.json``

Content Type: application/json

Response Code: 403

**Request Body**

.. code-block:: json

  {
    "cache_lifetime_days": 3000,
    "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"calling_page\", \"Last\", \"JavascriptDataLayer\", \"location.hostname + location.pathname\"); }, paramName: \"calling_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"gclid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"gclid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"g_cid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"g_cid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"First\", \"JavascriptDataLayer\", \"location.href\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"msclkid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"msclkid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_campaign\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_campaign\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_content\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_content\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_medium\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_medium\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_source\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_source\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"wbraid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"wbraid\", fallbackValue: null }\n];\n\nvar defaultCampaignId = \"87\";\n\nvar destinationSettings = {\n  paramName: \"invoca_detected_destination\"\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            true,\n  cookieDays:          cacheLifetimeDays,\n  country:             \"US\",\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(29);\n",
    "cache_lifetime_warning": null,
    "created_at": "2023-11-15T08:01:36-08:00",
    "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n",
    "custom_data_fields": [],
    "default_campaign": {
      "default_campaign_id": "87",
      "default_campaign_name": "Default: Default Call Treatment"
    },
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
    "wait_for_in_seconds": 0.0
  }

**Response Body**

.. code-block:: json

  {
    "errors": {
      "cache_lifetime_days": [
        "must be less than or equal to 30 days",
        "must be one of [1, 7, 14, 30]"
      ]
    }
  }

PUT
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/revisions/1.json``

Content Type: application/json

Response Code: 403

**Request Body**

.. code-block:: json
    {
      "body": "(function(networkId) {\nvar cacheLifetimeDays = 30;\n\nvar customDataWaitForConfig = [\n  { on: function() { return Invoca.Client.parseCustomDataField(\"calling_page\", \"Last\", \"JavascriptDataLayer\", \"location.hostname + location.pathname\"); }, paramName: \"calling_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"gclid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"gclid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"g_cid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"g_cid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"landing_page\", \"First\", \"JavascriptDataLayer\", \"location.href\"); }, paramName: \"landing_page\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"msclkid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"msclkid\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_campaign\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_campaign\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_content\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_content\", fallbackValue: null },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_medium\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_medium\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"utm_source\", \"Last\", \"URLParam\", \"\"); }, paramName: \"utm_source\", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },\n  { on: function() { return Invoca.Client.parseCustomDataField(\"wbraid\", \"Last\", \"URLParam\", \"\"); }, paramName: \"wbraid\", fallbackValue: null }\n];\n\nvar defaultCampaignId = \"87\";\n\nvar destinationSettings = {\n  paramName: \"invoca_detected_destination\"\n};\n\nvar numbersToReplace = null;\n\nvar organicSources = true;\n\nvar reRunAfter = null;\n\nvar requiredParams = null;\n\nvar resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];\n\nvar waitFor = 0;\n\nvar customCodeIsSet = (function() {\n  Invoca.Client.customCode = function(options) {\n    // *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n\n  };\n\n  return true;\n})();\n\nvar generatedOptions = {\n  active:              true,\n  autoSwap:            true,\n  cookieDays:          cacheLifetimeDays,\n  country:             \"US\",\n  dataSilo:            \"us\",\n  defaultCampaignId:   defaultCampaignId,\n  destinationSettings: destinationSettings,\n  disableUrlParams:    [],\n  doNotSwap:           [],\n  maxWaitFor:          waitFor,\n  networkId:           networkId || null,\n  numberToReplace:     numbersToReplace,\n  organicSources:      organicSources,\n  poolParams:          {},\n  reRunAfter:          reRunAfter,\n  requiredParams:      requiredParams,\n  resetCacheOn:        resetCacheOn,\n  waitForData:         customDataWaitForConfig\n};\n\nInvoca.Client.startFromWizard(generatedOptions);\n\n})(29);\n",
      "cache_lifetime_warning": null,
      "created_at": "2023-11-15T08:01:36-08:00",
      "custom_code": "// *** Auto generated code generated for convenience when testing on staging below ***\nInvoca.PNAPI.config.URL= '//test-bb-pnapi.invocadev.com/PARTITION/api/VERSION_KEY/map_number.jsonp';\n// *** Auto generated code generated for convenience when testing on staging above ***\n",
      "custom_data_fields": [],
      "default_campaign": {
        "default_campaign_id": "87",
        "default_campaign_name": "Default: Default Call Treatment"
      },
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
      "cache_lifetime_days": 30,
      "wait_for_in_seconds": 0.0
    }

**Response Body**

.. code-block:: json

  {
    "errors": {
      "class": "RecordInvalid",
      "invalid_data": "Validation failed: This action can only be applied to the draft revision"
    }
  }

DELETE
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/revisions/1.json``

Content Type: application/json

Response Code: 403

**Response Body**

.. code-block:: json

  {
    "errors": {
      "class": "RecordInvalid",
      "invalid_data": "Validation failed: This action can only be applied to the draft revision"
    }
  }

Not Found – 404:

GET
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>/revisions/<external_revision_id>.json``

Content Type: application/json

Response Code: 404

**Response Body**

.. code-block:: json

  {
    "errors": {
      "class": "RecordNotFound",
      "invalid_data": "Invoca Tag Revision not found with revision id: '99999'"
    }
  }
