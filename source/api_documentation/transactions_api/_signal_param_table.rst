.. include:: _signal_transaction_rollup_replacements.rst

Signal Parameters
*****************

Most of the fields in this table are now deprecated. See Custom Data & Signal Parameters section for best practices for accessing Signal name, source and value. Additionally, some fields will be removed if the Signal Transactions Rollup feature is enabled.

..  list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters

  * - Field
    - Name in Reports
    - Description

  * - signal_name *(deprecated)*
    - Signal Name
    - The name describing the signal event. See the Custom Data Parameters section for an updated way of accessing the Signal(s) that are true on a given transaction. |rollup_merged_message|

  * - signal_description *(deprecated)*
    - Signal Description
    - Free form text for providing additional details about the signal. |rollup_removed_message|

  * - signal_partner_unique_id
    - Signal Partner ID
    - Unique identifier, to distinguish between updating an existing Signal or Post Call Event (for example correcting a sale that was reported) versus adding a second sale or Post call Event to the call (for example a reservation made while on the call and then an add on item purchased later).

  * - signal_occurred_at
    - Signal Occurred At
    - 10 digit time that the signal occurred, in UTC seconds since 1/1/70, also known as Unix time_t.

  * - signal_source *(deprecated)*
    - Signal Source
    - The source of the signal.  Possible values are :UserOverride, :Api, :Import, :Expression, :Ivr, and :Machine. |rollup_removed_message|

  * - signal_value *(deprecated)*
    - Signal Value
    - True or false as to whether or not the signal was met and null if it is not a signal transaction. |rollup_removed_message|

  * - revenue
    - Revenue (Sale Amount)
    - The revenue applied to the call via Signal revenue proxies or Post Call Events.

  * - signal_custom_parameter_1 *(deprecated)*
    - Signal Custom Param 1
    - Up to 255 character string. |rollup_removed_message|

  * - signal_custom_parameter_2 *(deprecated)*
    - Signal Custom Param 2
    - Up to 255 character string. |rollup_removed_message|

  * - signal_custom_parameter_3 *(deprecated)*
    - Signal Custom Param 3
    - Up to 255 character string. |rollup_removed_message|

