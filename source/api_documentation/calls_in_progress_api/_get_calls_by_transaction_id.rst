:orphan:

.. container:: endpoint-long-description

  .. rubric:: Example

  Get calls in progress for transaction id `ABCD1234-ABCD1234`.
  Be sure to use your own oauth_token, organization_type and id.

  `current_calls` will be ordered by `bridge_start_time`, most recent first.

  Endpoint:

  ``https://invoca.net/api/@@CALLS_IN_PROGRESS_API_VERSION/calls_in_progress/current_calls.json?oauth_token=<oauth_token>&id=<organization_id>&organization_type=<organization_type>&transaction_id=ABCD1234-ABCD1234``

  Parameters: `transaction_id` is required for this request

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
      "current_calls": [
        {
          "transaction_id": "ABCD1234-ABCD1234",
          "call_status": "bridged",
          "external_unique_id": null,
          "calling_phone_number": "+15559999999",
          "destination_phone_number": "+18555595599",
          "called_phone_number": "+18557174046",
          "bridge_start_time": "2023-04-03T16:02:36-07:00",
          "phone_type": "Mobile",
          "custom_data": {
                "utm_source": {
                    "value": "google.com",
                    "source": "VirtualLine"
                },
                "demographics_data": {}
            }
        }
      ]
    }
