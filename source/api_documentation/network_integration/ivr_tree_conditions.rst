
Conditions
~~~~~~~~~~

.. list-table::
  :widths: 30 50 30
  :header-rows: 1
  :class: parameters

  * - Condition
    - Details
    - Examples

  * - during_hours
    - True if the caller is calling during the hours specified in the campaign.
    - during_hours

  * - repeat
    - True if the caller has already called this campaign in the last N days (the interval N can be set on the campaign; the default is 30 days).
    - repeat

  * - landline
    - True if the caller is calling from a landline phone.
    - landline

  * - mobile
    - True if the caller is calling from a mobile phone.
    - mobile

  * - pressed[key]
    - True if the caller pressed the key. Supported characters (case sensitive): [1-9, a-z, W, N]. For a sub-menu keypress, join characters in their expected order with spaces (e.g. 1 1 2).
    - pressed[3]

  * - custom_data[field_partner_name]
    - * True if the custom data field value matches (=) the expected value
      * True if the custom data field value does not match (!=) the expected value
      * True if the custom data field value contains (contains) the expected value
      * True if the custom data field value is present (present)
    - * custom_data[product] = "Printer"
      * custom_data[product] != "Fax Machine"
      * custom_data[product] contains "Chair"
      * custom_data[product] present

  * - affiliate_name
    - * True if the affiliate name value matches (=) the expected value
      * True if the affiliate name value does not match (!=) the expected value
      * True if the affiliate name value contains (contains) the expected value
      * True if the affiliate name value is present (present)
    - * affiliate_name = "Captain Crunch Publishing"
      * affiliate_name != "Count Chocula Publishing"
      * affiliate_name contains "Cocoa"
      * affiliate_name present

  * - media_type
    - * True if the media type for the promo number called matches (=) the expected value
      * True if the media type for the promo number called does not match (!=) the expected value
      * True if the media type for the promo number called contains (contains) the expected value
      * True if the media type for the promo number called is present (present)
    - * media_type = "Online: Content / Review Site"
      * media_type != "Online: Email"
      * media_type contains "Online"
      * media_type present

  * - promo_number_description
    - * True if the description for the promo number called matches (=) the expected value
      * True if the description for the promo number called does not match (!=) the expected value
      * True if the description for the promo number called contains (contains) the expected value
      * True if the description for the promo number called is present (present)
    - * promo_number_description = "Very important number"
      * promo_number_description != "Old marketing number"
      * promo_number_description contains "New ad campaign"
      * promo_number_description present

  * - and
    - Joins two conditions and is true if both conditions are true.
    - repeat and during_hours

  * - or
    - Joins two conditions and is true if either condition is true.
    - repeat or during_hours

  * - not
    - Inverts the following condition.
    - not during_hours

  * - ( )
    - Used for grouping.
    - mobile and (repeat or during_hours)

Note that **and** is higher precedence than **or**. So if you use both in a condition like this:

.. code-block:: markdown

  mobile or repeat and during_hours

it is equivalent to this:

.. code-block:: markdown

  mobile or (repeat and during_hours)
