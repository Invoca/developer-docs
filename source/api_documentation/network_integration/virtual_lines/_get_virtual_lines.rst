

.. container:: endpoint-long-description

  .. rubric:: Examples

  Read all Virtual Lines as an array

  Network Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/i/networks/<network_id>/virtual_lines.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "data": [
        {
          "id": 12031146,
          "call_price" :"$5.00 - $10.00 per call",
          "call_price_detail": "20% of sales if sale",
          "customized_at": "-",
          "status": "Approved",
          "promo_number": {
            "name": "1866-973-3619",
            "national_number": "866-973-3619",
            "country_code": "1"
          },
          "virtual_line": {
            "name": "866-973-3619",
            "description": "asda",
            "media_type": "Online: Discount / Coupon Site",
            "status": "Active",
            "customize_page_url": "https://invoca.net/virtual_lines/custom_edit/12031146",
            "retire_page_url": "https://invoca.net/virtual_lines/expire/12031146",
          },
          "advertiser_campaign": {
            "advertiser": {
              "name": "ABC",
              "index_page_url": "https://invoca.net/as/148/a_campaigns/ui"
            },
            "name": "XMas Truck Sale"
            "view_page_url" :"https://invoca.net/a_campaigns/terms/341"
            "status": "Approved"
          },
          "affiliate_campaign": {
            "affiliate": {
              "name": "Black Bird",
            }
            "index_page_url": "https://invoca.net/as/148/p_campaigns/ui?affiliate_id=222797",
            "status": "Approved"
          }
        }
      ],
      "recordsTotal": 1,
      "requestId": 1
    }


  Advertiser Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/i/advertisers/<advertiser_id>/virtual_lines.json``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "data": [
        {
          "id": 12031146,
          "call_price" :"$5.00 - $10.00 per call",
          "call_price_detail": "20% of sales if sale",
          "customized_at": "-",
          "status": "Approved",
          "promo_number": {
            "name": "1866-973-3619",
            "national_number": "866-973-3619",
            "country_code": "1"
          },
          "virtual_line": {
            "name": "866-973-3619",
            "description": "asda",
            "media_type": "Online: Discount / Coupon Site",
            "status": "Active",
            "customize_page_url": "https://invoca.net/virtual_lines/custom_edit/12031146",
            "retire_page_url": "https://invoca.net/virtual_lines/expire/12031146",
          },
          "advertiser_campaign": {
            "advertiser": {
              "name": "ABC",
              "index_page_url": "https://invoca.net/as/148/a_campaigns/ui"
            },
            "name": "XMas Truck Sale"
            "view_page_url" :"https://invoca.net/a_campaigns/terms/341"
            "status": "Approved"
          },
          "affiliate_campaign": {
            "affiliate": {
              "name": "Black Bird",
            }
            "index_page_url": "https://invoca.net/as/148/p_campaigns/ui?affiliate_id=222797",
            "status": "Approved"
          }
        }
      ],
      "recordsTotal": 1,
      "requestId": 1
    }
