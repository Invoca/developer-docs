:orphan:

.. container:: endpoint-long-description

  .. rubric:: Examples

  Assuming you used the curl command to create the campaign with id 445566, the following commands will update that campaign to have a new IVR tree.

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
