Signal Parameters
*****************

..  list-table::
  :widths: 30 8 40
  :header-rows: 1
  :class: parameters

  * - call_outcome_name
    - Signal Name
    - The name describing the signal event.

  * - call_outcome_description
    - Signal Description
    - Free form text for providing additional details about the signal.

  * - call_outcome_partner_unique_id
    - Signal Partner ID
    - Unique identifier, to distinguish between updating an existing signal (for example correcting a sale that was reported) versus adding a second sale to the call (for example a reservation made while on the call and then an add on item purchased later).

  * - call_outcome_occurred_at
    - Signal Occurred At
    - 10 digit time that the signal occurred, in UTC seconds since 1/1/70, also known as Unix time_t.

  * - call_outcome_source
    - Signal Source
    - The source of the signal.  Possible values are :UserOverride, :Api, :Import, :Expression, :Ivr, and :Machine

  * - call_outcome_value
    - Signal Value
    - True or false as to whether or not the signal was met and null if it is not a signal transaction.

  * - call_outcome_custom_parameter_1
    - Signal Custom Param 1
    - Up to 255 character string.

  * - call_outcome_custom_parameter_2
    - Signal Custom Param 2
    - Up to 255 character string.

  * - call_outcome_custom_parameter_3
    - Signal Custom Param 3
    - Up to 255 character string.

