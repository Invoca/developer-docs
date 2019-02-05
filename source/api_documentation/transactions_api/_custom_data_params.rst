

Custom Data Parameters
**********************

Please click  `this link <https://www2.invoca.net/customer_data_dictionary/home>`_ to access the custom data parameters specific to your account.

Custom Data & Signal fields can be accessed in the response by specifying the special `$invoca_custom_columns` constant in your `include_columns` parameter, or mentioning specific fields that you want to include, e.g. `include_columns=transaction_id,start_time_local,utm_medium,gclid,Quote,Purchase%20Made`.
 The Partner (API) Name is used as the field name returned by the Transactions API. Any Custom Data or Signal fields named the same as a standard Invoca Transactions API field will be returned by the API rather than the standard field.

.. code-block:: json

  [
    {
      "transaction_id": "FE7F3A51-11111111",
      "start_time_local": "2019-01-24 06:43:15 -07:00",
      "Quote": 1,
      "Purchase Made": null,
      "utm_medium": "Search",
      "gclid": "198ab9a93f8c7348"
    },
    {
      "transaction_id": "E9C4063A-22222222",
      "start_time_local": "2019-01-24 06:43:16 -07:00",
      "Quote": null,
      "Purchase Made": 1,
      "utm_medium": "Email",
      "gclid": null
    }
  ]


This is the preferred way to get Signals that are true for a given call (versus relying on the "signal_name" parameter), as in the future it will be possible for multiple Signals to be set true on the same transaction.
To get the complete Signal view for a given call you can utilize the `complete_call_id` field as the primary ID. For every transaction (regardless of `transaction_type`), update your complete call row as follows:

- add any true Signals
- remove any false Signals
- ignore any null Signals (a null value for a Signal means the Signal was not applicable to that transaction but may have already been evaluated as true for the given call on any previous or subsequent transactions)
