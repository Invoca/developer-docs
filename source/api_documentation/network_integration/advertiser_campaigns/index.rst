Advertiser Campaigns
====================

Advertiser Campaigns can be managed using the Network API. In addition to create, update, and show operations, this interface provides additional endpoints including go_live, archive, and quick_stats.

Note that the `<advertiser_id_from_network>` and `<advertiser_campaign_id_from_network>` are the network’s id for those objects, not Invoca’s.

`/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

We support passing back current_terms and future_terms on campaigns. The current properties of the campaign are reflected in current_terms. All changes to the campaign are staged in future_terms. Once the campaign goes live, future_terms transition over to current_terms.

You can set budgets on your campaign. There are two budget types, budget_cap_alert which is based on commissions, and call_cap_alert, which is based on the number of calls. These budget activities are only applicable for AffiliateEnabled campaigns (Known in the platform as a “Publisher Promotion” Campaign Type.)

You are not allowed to delete campaigns.

.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - name
    - string
    - Campaign name.

  * - campaign_type
    - string
    - 2 Campaign Types Supported: “AffiliateEnabled” ‐ Advertiser Campaign that allows Affiliates to promote it. Includes Payin and Payouts for qualified Calls. “DirectOnly” ‐ Advertiser Campaign used for internal marketing. No ability to promote via Affiliates or setup Payin and Payouts for Calls.

Advertiser Campaign IVRs
------------------------

When creating an advertiser campaign, you need to provide some call flow logic through an IVR tree. Depending on the advertiser/campaign type (direct, bundled, etc) you may use the following node types:

Node Parameters and Usage

\* => required parameter

.. list-table::
  :widths: 11 4 40
  :header-rows: 1
  :class: parameters

  * - Node Type
    - Parameters
    - Usage

  * - Menu
    - \*prompt
    - Allows the caller to select from up to 9 choices (e.g. choosing a department, selecting a language, etc).

  * - Connect
    - prompt

      \*destination_phone_number

      \*destination_country_code

    -

      Forwards the call to a selected phone number after optionally reading a prompt.

Endpoint
--------

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

.. raw:: html

  <div class="panel-group">
    <div class="endpoint-list">

      <div class="panel-heading" id="headingOne">
        <a class="collapsed" data-toggle="collapse" data-target="#one" aria-expanded="false" aria-controls="one">
          <div class='action'>GET</div>
          <div class='path'>/advertiser_campaigns</div>
          <div class='description'>Get all campaigns for an Advertiser</div>
        </a>
      </div>
      <div id="one" class="panel collapse" aria-labelledby="headingOne">
        <div class="panel-body">

.. include:: get_advertiser_campaigns.rst

.. raw:: html

        </div>
      </div>
    </div>


.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#two" aria-expanded="false" aria-controls="two">
         <div class='action'>GET</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Get an Advertiser Campaign</div>
       </a>
     </div>
     <div id="two" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: get_advertiser_campaign.rst

.. raw:: html

       </div>
     </div>
   </div>


.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#three" aria-expanded="false" aria-controls="three">
         <div class='action'>POST</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Create an Advertiser Campaign</div>
       </a>
     </div>
     <div id="three" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: post_advertiser_campaign.rst

.. raw:: html

       </div>
     </div>
   </div>

.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#four" aria-expanded="false" aria-controls="four">
         <div class='action'>PUT</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Update an Advertiser Campaign</div>
       </a>
     </div>
     <div id="four" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: put_advertiser_campaign.rst

.. raw:: html

       </div>
     </div>
   </div>

.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#five" aria-expanded="false" aria-controls="five">
         <div class='action'>GET</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Quick Stats</div>
       </a>
     </div>
     <div id="five" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: get_advertiser_campaign_quick_stats.rst

.. raw:: html

       </div>
     </div>
   </div>

.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#six" aria-expanded="false" aria-controls="six">
         <div class='action'>GET</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Set Campaign State to Live</div>
       </a>
     </div>
     <div id="six" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: get_advertiser_campaign_quick_stats.rst

.. raw:: html

       </div>
     </div>
   </div>

.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#seven" aria-expanded="false" aria-controls="seven">
         <div class='action'>POST</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Set Campaign State to Live</div>
       </a>
     </div>
     <div id="seven" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: get_advertiser_campaign_quick_stats.rst

.. raw:: html

       </div>
     </div>
   </div>


.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading" id="headingOne">
       <a class="collapsed" data-toggle="collapse" data-target="#eight" aria-expanded="false" aria-controls="eight">
         <div class='action'>GET</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Set Campaign State to Archived</div>
       </a>
     </div>
     <div id="eight" class="panel collapse" aria-labelledby="headingOne">
       <div class="panel-body">

.. include:: get_advertiser_campaign_quick_stats.rst

.. raw:: html

       </div>
     </div>
   </div>

.. raw:: html

 <div class="panel-group">
   <div class="endpoint-list">

     <div class="panel-heading">
       <a class="collapsed" data-toggle="collapse" data-target="#nine" aria-expanded="false" aria-controls="nine">
         <div class='action'>POST</div>
         <div class='path'>/advertiser_campaigns</div>
         <div class='description'>Set Campaign State to Archived</div>
       </a>
     </div>
     <div id="eight" class="panel collapse">
       <div class="panel-body">

.. include:: get_advertiser_campaign_quick_stats.rst

.. raw:: html

       </div>
     </div>
   </div>


.. toctree::
   :maxdepth: 2
   :hidden:

   get_advertiser_campaigns
   get_advertiser_campaign
   post_advertiser_campaign
   put_advertiser_campaign
   get_advertiser_campaign_quick_stats
   get_advertiser_campaign_go_live
   post_advertiser_campaign_go_live
   get_advertiser_campaign_archive
   post_advertiser_campaign_archive
