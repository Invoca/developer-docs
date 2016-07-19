Virtual Lines
=============

Virtual Lines for Network or Advertiser
"""""""""""""""""""""""""""""""""""""""

The API provides the ability to fetch virtual lines for a given network or advertiser.
This capability is JSON‐only.

Network Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/i/networks/<network_id>/virtual_lines.json``

Advertiser Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/i/advertisers/<advertiser_id>/virtual_lines.json``

Request Parameters
------------------

Passed in “application/json” format.

**Search Parameters**

Used to filter the virtual lines.

    **Required**

    `network_id:` ID of the network.

    or

    `advertiser_id:` ID of the advertiser

    **Optional**

    `status`: The status of the virtual line. Allowed values: *all*, *applied*, *approved*, *declined*, *suspended*, *expired*, *blocked*.

    `advertiser_campaign_id:` The ID of the advertiser campaign.

    `advertiser:` The ID of the advertiser.

    `affiliate:` The ID of the affiliate.

**Pagination Parameters**

    `limit:` The number of records to be returned.

    `offset:` The offset from the first result to start from.

**Sorting Parameters**

    `sort_dir:` The direction of sorting. Allowed values: *asc*, *desc*.

    `sort_by:` The name of the field to sort by.

    Allowed values:

      `status:` The top level status of the virtual line. It is taken as default sort field.

      `virtual_line_name:` The name of the virtual line, usually a promo number.

      `description:` The description of the virtual line.

      `media_type:` The name of the virtual line's media type.

      `advertiser_campaign_name:` The name of the advertiser campaign.

      `advertiser_name:` The name of the advertiser.

      `affiliate_name:` The name of the affiliate.

      `customized_at`: The type of the entity on which the call pricing is set at.


.. api_endpoint::
   :verb: GET
   :path: /virtual_lines
   :description: Get all Virtual Lines
   :page: get_virtual_lines
