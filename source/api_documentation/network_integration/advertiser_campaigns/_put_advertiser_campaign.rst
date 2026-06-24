

.. container:: endpoint-long-description

  .. rubric:: Behavior

  The campaign to update is identified by the ``<advertiser_campaign_id_from_network>`` in the URL, which is matched against the campaign's ``id_from_network``. If a campaign with that id exists for the advertiser, it is updated. **If no campaign with that id exists, a new campaign is created** ("upsert"). Because creating a campaign requires a ``name``, a PUT against a non-existent id will fail unless ``name`` is included in the request body. To update an existing campaign, omit ``name`` (or send its current value) and the campaign's name is left unchanged.

  .. rubric:: Examples

  Example IVR Tree updates:

  1) Verify the callers location, then if on the West Coast (setup previously) forward to a call center, otherwise hang up after playing a prompt.

  .. code-block:: bash

      curl­ -XPUT -H "Content­Type: application/json" -­u 'login:pass'
      'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
      -d '
      {"ivr_tree":
       {"root":
         {"node_type":"VerifyLocation",
          "children":
           [{"node_type":"Condition",
             "condition":"in_region[West Coast]",
             "children":
               [{"children":[],
                 "condition":"",
                 "node_type":"Connect",
                 "destination_phone_number":"8004377950",
                 "destination_country_code":"1"},
                 {"node_type":"EndCall",
                  "prompt":"We are sorry, we currently cannot service your area. Goodbye."}]}]
         },
         "record_calls":true}}'  -v

  2) Present the options for multiple departments, if sales is selected check if office is open. If the office is open, forward the call, if not play a prompt and then hangup.

  .. code-block:: bash

     curl -XPUT -H "Content­Type: application/json" -u 'login:pass'
     'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
     -d '
     {"ivr_tree":{
        "record_calls":true,
        "root":{
          "node_type":"Menu",
          "prompt":"Please press 1 for sales or 2 for 24 hour support",
          "children":[
            { "node_type":"Condition",
              "condition":"during_hours",
              "children":[
                { "node_type":"Connect",
                  "destination_phone_number":"8004377950",
                  "destination_country_code":"1",
                  "prompt":"Thank you, transferring you now"
                },
                { "node_type":"EndCall",
                  "prompt":"We are currently closed. Please call back during business hours. Goodbye"
                }]},
            { "node_type":"Connect",
              "destination_phone_number":"8004377950",
              "destination_country_code":"1",
              "prompt":"Thank you, transferring you now"
            }]}}}'  -v

  3) Offer an sms to see current offers and then connect to a call center.

  .. code-block:: bash

     curl­ -XPUT -H "Content­Type: application/json"­ -u 'login:pass'
     'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
     -d '
     {"ivr_tree":
      {"root":
        {"node_type":"SmsPromo",
         "sms_promo_copy":"Visit us at www.invoca.com to see new promotions.",
         "sms_promo_delay":1,
         "prompt":"If you would like to see information about our current offers, please press 9 now.",
         "children":
          [{"children":[],
            "condition":"",
            "node_type":"Connect",
            "destination_phone_number":"8004377950",
            "destination_country_code":"1"}]
        },
        "record_calls":true}}' -v


  4) Use a Real-Time Routing webhook to dynamically determine the call destination at runtime, with a fallback if the webhook does not respond in time.

  .. code-block:: bash

     curl -XPUT -H "Content-Type: application/json" -u 'login:pass'
     'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/advertisers/:advertiser_id/advertiser_campaigns/445566.json' \
     -d '
     {"ivr_tree":{
        "record_calls":true,
        "root":{
          "node_type":"RealTime",
          "webhook_id":123,
          "prompt":"Please wait for your call to be connected.",
          "children":[
            {
              "node_type":"EndCall",
              "prompt":"We are unable to route your call at this time. Goodbye."
            }
          ]
        }
      }}' -v

  Each of the above requests will have a response body similar to a GET request, including all the advertiser campaign properties.
