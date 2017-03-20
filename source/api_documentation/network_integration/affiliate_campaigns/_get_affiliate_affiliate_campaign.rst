

.. container:: endpoint-long-description

  .. rubric:: Examples

  GET of Affiliate Campaign status for Advertiser 354 Campaign 12 to Affiliate 976

  Endpoint:

  ``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json``

  Format: application/json

  Response Body:

  .. code-block:: json

    {
      "max_promo_numbers": 10,
      "current_terms": {
        "advertiser_payin": {
          "max": 3.5,
          "min": 3.5,
          "pricing": "$3.50 per call",
          "currency": "USD",
          "range": "$3.50 per call",
          "policies": [
            {
              "amount": 3.5,
              "currency": "USD",
              "type": "Base",
              "condition": ""
            }
          ]
        },
        "pricing_type": "Fixed",
        "ivr_tree": {
          "root": {
            "children": [
              {
                "destination_country_code": "",
                "destination_phone_number": "",
                "node_type": "Connect",
                "prompt": ""
              },
              {
                "destination_country_code": "",
                "destination_phone_number": "",
                "node_type": "Connect",
                "prompt": ""
              }
            ],
            "node_type": "Menu",
            "prompt": "Press one for transfer to a normal campaign (scottad pro 0903), press two for normal campaign (scott ad pro 3122), press three for transfer to a syndicated campaign!"
          },
          "record_calls": false
        },
        "affiliate_payout": {
          "max": 3.5,
          "min": 3.5,
          "pricing": "$3.50 per call",
          "currency": "USD",
          "range": "$3.50 per call",
          "policies": [
            {
              "amount": 3.5,
              "currency": "USD",
              "type": "Base",
              "condition": ""
            }
          ]
        }
      },
      "status": "Approved_NotActive",
      "id": 1,
      "id_from_network": "11",
      "affiliate_id_from_network": "976",
      "object_url": "https://invoca.net/p_campaigns/terms/19/11",
      "custom_data": {
        "channel": "Online lead"
      }
    }
