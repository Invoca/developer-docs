

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

  * - signal_partner_unique_id
    - Signal Partner ID
    - Unique identifier, to distinguish between updating an existing Signal or Post Call Event (for example correcting a sale that was reported) versus adding a second sale or Post call Event to the call (for example a reservation made while on the call and then an add on item purchased later).

  * - signal_occurred_at
    - Signal Occurred At
    - 10 digit time that the signal occurred, in UTC seconds since 1/1/70, also known as Unix time_t.

  * - revenue
    - Revenue (Sale Amount)
    - The revenue applied to the call via Signal revenue proxies or Post Call Events.
