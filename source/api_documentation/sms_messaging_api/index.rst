====================
SMS Messaging API
====================

.. raw:: html

  <div class="alert alert-warning">
    <b>Notice:</b>
    The SMS Messaging API is in Alpha. Please contact your CSM or the support team for more information.
  </div>

------------------------------------
Overview
------------------------------------
The SMS Messaging API provides the following functionality:

- manage SMS-enabled phone numbers
- send SMS messages
- retrieve SMS messages and their associated Delivery Reports

------------------------------------
Authentication and Authorization
------------------------------------
The SMS Messaging API uses OAuth2 Tokens for authentication and authorization.
Please see
:doc:`../../basics/design_principles`
for more information about generating and using an OAuth2 Token in the Invoca platform.

------------------------------------
Pagination
------------------------------------
The following URL parameters are used to control pagination and are common to all `GET` requests.

Pagination URL Parameters
------------------------------------

.. list-table::
  :widths: 30 50 30 30 30
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description
    - Default Value
    - Max Value
    - Required

  * - limit
    - The maximum number of records returned per page
    - 100
    - 500
    - False

  * - page
    - The next or previous page as taken directly from the response body payload of a previous API request for the previous page of the same read operation
    - *N/A* (assumed to be the first page)
    - *N/A*
    - False


------------------------------------
Sorting
------------------------------------
The records returned by `GET` requests can be sorted using the `sort` URL parameter.
The value of the `sort` parameter is comprised of:

- an optional valid sortable field
- an optional sort direction (`asc` or `desc`) separated from the sortable field by a colon (`:`)

For example: `https://example.com?sort=created_at:asc`

If only a sort direction is provided, the response body will be sorted in the provided direction according to the default sortable field.

If only a sortable field is provided, the default sort direction (`asc`) will be assumed.

Each `GET` request denotes the valid sortable fields in its response body. Please see the API examples below for more information.

At this time, responses may be sorted by *one field only*.

**By default, responses are sorted in ascending order according to their created_at field.**

------------------------------------
Filtering
------------------------------------
The records returned by `GET` requests can be filtered using URL parameters.
Filters are comprised of the following required components:

- a valid filterable field
- a bracketed operator appended to the filterable field
- a filter value separated from the filterable field and its associated operator by an equal sign (`=`)

For example: `https://example.com?created_at[lte]=2022-11-03T23:59:00.000Z`.

The following operators are supported:

Supported Filter Operators
------------------------------------
.. list-table::
  :widths: 5 50 30
  :header-rows: 1
  :class: parameters

  * - Operator
    - Description
    - Example

  * - eq
    - Return only those records where the filtered field is equal to the value found on the right-hand side of the = in this parameter
    - direction[eq]=in

  * - lte
    - Return only those records where the filtered field is less than or equal to the value found on the right-hand side of the = in this parameter
    - created_at[lte]=2022-11-03T23:59:00.000Z

  * - gte
    - Return only those records where the filtered field is greater than or equal to the value found on the right-hand side of the = in this parameter
    - created_at[gte]=2022-11-03T23:59:00.000Z

  * - empty
    - Return only those records where the filtered field has an empty value such as integer 0, MySQL NULL/null, or an empty string
    - deleted_at[empty]


Each `GET` request denotes the valid filterable fields in its response body. Please see the API examples below for more information.

For ranges of filtered data, such as dates, the `lte` and `gte` operators may be combined for the same filterable field. For example:

`created_at[gte]=2022-11-01T23:59:00.000Z&created_at[lte]=2022-11-03T23:59:00.000Z`.

Any combination of filters assumes `AND` operations between members of the completed set of filters.

If an E.164-formatted phone number is provided as a query parameter value, the leading `+` must be url-encoded as `%2B`.

For example: `https://example.com?from[eq]=%2B1234567890`

**By default, responses are filtered by created_at for the current date.**

------------------------------------
SMS Messaging API Example Requests
------------------------------------

.. swagger_ui::
   :id: swagger-ui

