

Custom Data & Signal Parameters
**********************

Please click  `this link <https://www2.invoca.net/customer_data_dictionary/home>`_ to access the custom data parameters specific to your account.

Custom Data & Signal can be accessed in two ways by Transactions API.

1. (JSON & XML formats only) By including `custom_data` as field in the `include_columns` parameter (e.g. `include_columns=transaction_id,start_time_local,custom_data`) a nested structure is returned containing all of the Custom Data and Signals that were specified for the given transaction. Note: null values are not returned.

Array of Custom Data Objects

..  list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters

  * - Field
    - Type
    - Description

  * - name
    - String
    - Custom Data Partner (API) Name or Signal Name. Up to 255 characters.

  * - data_type
    - String
    - One of: Signal, Category, Long Text, Short Text

  * - source
    - String
    - One of: UserOverride, Api, Import, DynamicAttribution, LookupTable, Expression, Ivr, VirtualLine, AffiliateCampaign, AdvertiserCampaign, Affiliate, Advertiser, Network, Machine, Default, Syndicated

  * - value
    - Integer or String
    - For data_type = Signal: 1 when true, 0 when false. For all other data types it is the string value of the field. Category and Short Text are up to 255 characters. Long Text can be up to 10,000 characters.

Example response:

.. code-block:: json

  [
    {
      "transaction_id": "FE7F3A51-11111111",
      "start_time_local": "2019-01-24 06:43:15 -07:00",
      "custom_data": [
        {
          "name": "Quote",
          "data_type": "Signal",
          "source": "Expression",
          "value": 1
        },
        {
          "name": "utm_medium",
          "data_type": "Category",
          "source": "DynamicAttribution",
          "value": "Search"
        },
        {
          "partner_name": "gclid",
          "data_type": "Short Text",
          "source": "DynamicAttribution",
          "value": "198ab9a93f8c7348"
        }
      ]
    },
    {
      "transaction_id": "E9C4063A-22222222",
      "start_time_local": "2019-01-24 06:43:16 -07:00",
      "custom_data": [
        {
          "name": "Purchase Made",
          "data_type": "Signal",
          "source": "Machine",
          "value": 1
        },
        {
          "name": "utm_medium",
          "data_type": "Category",
          "source": "VirtualLine",
          "value": "Email"
        }
      ]
    }
  ]


2. (All formats) Custom Data and Signal fields can be accessed in the response by specifying the special `$invoca_custom_columns` constant in your `include_columns` parameter, or mentioning specific fields that you want to include, e.g. `include_columns=transaction_id,start_time_local,utm_medium,gclid,Quote,Purchase%20Made`.

The Partner (API) Name is used as the field name returned by the Transactions API. Any Custom Data or Signal fields named the same as a standard Invoca Transactions API field will be returned by the API rather than the standard field.


Example response:

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

To also get the source of each Custom Data & Signal field, specify the special `$invoca_custom_source_columns` constant in your `include_columns` parameter. Doing that would result in an additional ".source" field for every Custom Data & Signal field:

.. code-block:: json

  [
    {
      "transaction_id": "FE7F3A51-11111111",
      "start_time_local": "2019-01-24 06:43:15 -07:00",
      "Quote": 1,
      "Quote.source": "Expression",
      "Purchase Made": null,
      "Purchase Made.source": null,
      "utm_medium": "Search",
      "utm_medium.source": "DynamicAttribution",
      "gclid": "198ab9a93f8c7348",
      "gclid.source": "DynamicAttribution"
    },
    {
      "transaction_id": "E9C4063A-22222222",
      "start_time_local": "2019-01-24 06:43:16 -07:00",
      "Quote": null,
      "Quote.source": null,
      "Purchase Made": 1,
      "Purchase Made.source": "Machine",
      "utm_medium": "Email",
      "utm_medium.source": "VirtualLine",
      "gclid": null,
      "gclid.source": null
    }
  ]


To get the complete Signal view for a given call you can utilize the `complete_call_id` field as the primary ID. For every transaction (regardless of `transaction_type`), update your complete call row as follows:

- add any true Signals
- remove any false Signals
- ignore any null Signals (a null value for a Signal means the Signal was not applicable to that transaction but may have already been evaluated as true for the given call on any previous or subsequent transactions)
