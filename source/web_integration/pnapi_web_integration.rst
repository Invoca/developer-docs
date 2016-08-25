SolutionsJS Web Integration
===========================

Installation Instructions
-------------------------

Install this generalized code just above the closing ``</body>`` tag of your website.

.. code-block:: html

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">
    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".YOUR_CLASS_SELECTOR"
    });
  </script>
  <!-- End Invoca Integration -->

Update ``networkId`` and ``numberSelector`` to match your Invoca Network and current web page settings.

**Note:**

You may find your ``networkId`` pre-populated in sample code available in the Invoca platform:

*Choose Tools gear and select Web Integration.*


Requirements
------------
1. Network is PNAPI enabled.
2. RingPools are type: "Custom".
3. Invoca Web Integration code installed on page.
4. Phone numbers on webpage tagged with a shared numberSelector class (Accepts multiple slectors).
5. An Invoca Campaign ID to associate with each number on the page (Or a Campaign ID Override).

Identifying a Campaign
----------------------
There are three methods to identify an Invoca Campaign on your web page, which follow an order of precedence.

1. **campaignIdOverrideParam**:
Specify a query string parameter's name, the value of which will be used as the Invoca Campaign ID for all phone numbers in a given session.

2. **data-invoca-campaign-id**:
When no override is passed, a user may assign individual Invoca Campaign IDs to a specific phone number's HTML element using the ``data-invoca-campaign-id`` attribute.

3. **defaultCampaignId**:
With no override, a ``defaultCampaignId`` can be passed to the ``Invoca.PNAPI.integration`` settings and will fill in the gaps wherever no ``data-invoca-campaign-id`` is found. If there are no data attributes or overrides, this value will apply to all phone numbers on the page.

Additionally, the ``defaultCampaignId`` can be assigned dynamically with JavaScript based upon the page's environment and variables.


Client Side Parameters
----------------------
*Note:* Any parameter value can be populated with a JavaScript variable.



.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Required parameters:
    -
    -

  * - networkId
    - String
    - Invoca Network ID



.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Required: One of the following
    -
    -

  * - numberSelector
    - String
    - CSS selector for phone number HTML elements
      Accepts one or many like so `".invocaNumber, .phoneNumber"`

  * - numberToReplace
    - String or Hash
    - Default: `null`

      Specify which number(s) to replace. Can accept one or many like so: `"888-999-1010, 777-888-9999"`.
      Optionally accepts a hash with the number as a key name, and campaignId as it's value like so:
      
      `{ "888-999-1010": 'campaignIdHere' }`

  * - destinationAsId
    - Bool
    - Default `false`

      Strips out any special characters and uses found destination phone number's digits as campaign ID.
      Warning! Requires Invoca campaign with explicit ID for each number. 


.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: multiline-table

  * - Optional parameters:
    -
    -

  * - campaignIdOverrideParam
    - String
    - Default: `null`

      Query string name used to identify Campaign ID

  * - poolParams
    - Hash
    - Default: `{}`

      Set of JavaScript parameters to be captured where the key name should be RingPool parameter name.
      These values are updated every subsequent visit.

  * - updatePoolParams
    - Bool
    - Default: `true`

      When `false`, the integration code will not update `poolParams` on subsequent page visits.

  * - requiredParams
    - Hash
    - Default: `null`

      A hash of key value pairs that represent query string names and values that are required to run the integration.
      For example: `{name: value}`

      When a requiredParam's value is `*`, any passed value will considered true.

  * - cookieNames
    - Array
    - Default: `null`

      List of cookie names to automatically capture as RingPool Parameters

  * - telLinkOnly
    - Bool
    - Default: `false`

      Used for a "Call Now" button. When true, will only update the tel: link on any `numberSelector` that is found.

  * - cookieDays
    - Int
    - Default: `1`

      Number of days for cache TTL.

  * - onComplete
    - Function
    - Default: `null`

      Name of a function to call when Invoca has finished running. Note: Do not call the function, simply pass reference. 

      For example: `functionName` not `functionName()`.

  * - debugMode
    - Boolean
    - Default: `false`

      When true, will display debug logs in the developer console.
  
  

Examples
--------

campaignIdOverrideParam
"""""""""""""""""""""""
To use a query string parameter as the Invoca Campaign ID for all phone numbers found on page, specify the parameter name in this option.
To use the value of `?utm_source` as the Campaign ID, follow this example:

**URL**

http://www.example-page.com?utm_source=google


**CODE**

.. code-block:: html

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">
    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".YOUR_CLASS_SELECTOR",
      campaignIdOverrideParam: 'utm_source'
    });
  </script>
  <!-- End Invoca Integration -->


**RESULT**

The caller is assigned and delivered to the "google" campaign in Invoca for any phone number found on the page with ``data-invoca-campaign-id``'s and the ``defaultCampaignId`` being overriden.



data-invoca-campaign-id
"""""""""""""""""""""""
To assign multiple numbers on a page to different Invoca Campaign IDs, simply add this attribute to each phone number element.

**URL**

http://www.example-page.com?utm_source=google


**CODE**

.. code-block:: html

  <div id="main">
    Call customer service at: <span class='number' data-invoca-campaign-id='customer-service'>855-555-5555</span>
    Call sales at: <span class='number' data-invoca-campaign-id='sales'>855-555-4444</span>
  </div>

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">
    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".number"
    });
  </script>
  <!-- End Invoca Integration -->


**RESULT**

When customer service is called, the call will be assigned and delivered to the 'customer-service' campaign in Invoca.
When sales is called, it will be assigned and delivered to the 'sales' campaign in Invoca.



defaultCampaignId
"""""""""""""""""""
When no campaignIdOverride or data-invoca-campaign-id are found, the default campaign ID will be assigned to the call.


**CODE**

.. code-block:: html

  <div id="main">
    Call customer service at: <span class='number' data-invoca-campaign-id='customer-service'>855-555-5555</span>
    Call sales at: <span class='number'>855-555-4444</span>
    Interested in a demo? Call now! <span class='number'>855-555-4444</span>
  </div>

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">
    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".number",
      defaultCampaignId: "sales"
    });
  </script>
  <!-- End Invoca Integration -->


**RESULT**

When customer service is called, the call will be assigned and delivered to the 'customer-service' campaign in Invoca.
When sales is called, it will be assigned to the defaultCampaignId of 'sales'.
When a visitor is interested in a demo, the call will be assigned to the defaultCampaignId of 'sales'.



poolParams
""""""""""
Allows variables from JavaScript to be associated with a call.


**CODE**

.. code-block:: html

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">

    var invocaParams = {
      currentPage: window.location.href
    };

    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".YOUR_NUMBER_SELECTOR",
      poolParams: invocaParams
    });

  </script>
  <!-- End Invoca Integration -->


**RESULT**

When a call is placed, the RingPool parameter with name "currentPage" will show the URL of the page the user called from.

For example, it may look like:
http://www.example-page.com/contact-us



requiredParams
""""""""""""""
Conditionally runs Invoca's web integration.


**URL #1**

http://www.example-page.com?gclid=1a2b3c4d5e


**URL #2**

http://www.example-page.com?ref=test


**CODE**

.. code-block:: html

  <!-- Begin Invoca Integration -->
  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
  <script type="text/javascript">

    Invoca.PNAPI.integration({
      networkId: YOUR_NETWORK_ID,
      numberSelector: ".YOUR_NUMBER_SELECTOR",
      requiredParams: {gclid: "*"}
    });

  </script>
  <!-- End Invoca Integration -->



**RESULT**

When URL #1 is visited, the Invoca web integration will run.
When URL #2 is visited, the Invoca web integration will not run.



Migrating from an older version
-------------------------------
If you are migrating from SolutionsJS 1.2 or below, please refer to the following guide.
  
1. Update your namespaces
- Change ``Solutions.PNAPI.integration`` to ``Invoca.PNAPI.integration``
- Change any Toolkit functions, like ``Solutions.PNAPI.readUrl`` to ``Invoca.Tools.readUrl``

   `More on the Solutions Toolkit <toolkit_library.html>`_

2. Update your data attributes
- Change ``data-invoca`` to ``data-invoca-campaign-id``

3. Update your integration scripts from this:

.. code-block:: html
  
  <script type="text/javascript" src="//pnapi0.invoca.net/0/pnapi_integration.js"></script>
  <script type="text/javascript" src="//cdn.invoca.solutions/js/solutions-1.2.min.js">
  


to just this:    
  
.. code-block:: html

  <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>


