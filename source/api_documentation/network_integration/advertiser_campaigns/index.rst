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

  <div class='endpoint-list'>
    <a href="./get_advertiser_campaigns.html">
      <div class='action'>GET</div>
      <div class='path'>/advertiser_campaigns</div>
      <div class='description'>Get all campaigns for an Advertiser</div>
    </a>
  </div>
  <div class='MYCOLLAPSABLEDIV'>

.. include:: get_advertiser_campaigns.rst

.. raw:: html

  <div class='endpoint-list'>
    <a href="./get_advertiser_campaign.html">
      <div class='action'>GET</div>
      <div class='path'>/advertiser_campaigns/&lt;advertiser_campaign_id&gt;</div>
      <div class='description'>Get a campaign for an Advertiser</div>
    </a>
  </div>
  <div class='MYCOLLAPSABLEDIV'>

.. include:: get_advertiser_campaign.rst

.. raw:: html

  <div class='endpoint-list'>
    <a href="./post_advertiser_campaign.html">
      <div class='action'>POST</div>
      <div class='path'>/advertiser_campaigns/&lt;advertiser_campaign_id&gt;</div>
      <div class='description'>Create an Advertiser Campaign</div>
    </a>
  </div>
  <div class='MYCOLLAPSABLEDIV'>

.. include:: post_advertiser_campaign.rst

.. raw:: html

  <div class='endpoint-list'>
    <a href="./put_advertiser_campaign.html">
      <div class='action'>PUT</div>
      <div class='path'>/advertiser_campaigns/&lt;advertiser_campaign_id&gt;</div>
      <div class='description'>Update an Advertiser Campaign</div>
    </a>
  </div>
  <div class='MYCOLLAPSABLEDIV'>

.. include:: put_advertiser_campaign.rst

.. raw:: html

  <div>

.. toctree::
   :maxdepth: 2
   :hidden:

   get_advertiser_campaigns
