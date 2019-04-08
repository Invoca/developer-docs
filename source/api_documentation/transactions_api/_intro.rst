

Authentication
--------------

The API uses OAuth to validate access. The OAuth Token can be passed in two ways. The first way is to pass the OAuth Token in the header of the request. The second is to pass the OAuth Token like any other query parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Query Parameters
----------------

The API takes the following optional query parameters:

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description

  * - from=
    - Starting date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-01. Inclusive.

  * - to=
    - Ending date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-07. Inclusive.

  * - limit=
    -  Max number of transactions to return at a time. Defaults to 1000. Limited to at most 4000.

  * - transaction_id=
    - A specific transaction. If transaction_id is specified and no transaction with that ID is found, nothing will be returned. Returns at most 1 transaction.

  * - call_record_id=
    - All transactions belonging to a specific call. If call_record_id is specified and no call with that ID is found, nothing will be returned. Returns all transactions belonging to the call record. **Note:** If transaction_id *and* call_record_id are passed, the specified transaction must belong to the specified call. If it does, the transaction will be returned. If it does not, nothing will be returned.

  * - start_after_transaction_id=
    - Transaction_id to start retrieving after. This should be the last value retrieved previously. Default (or empty string) means start at the oldest.

  * - include_columns=
    - comma-separated list of field names to be returned in the response for each transaction (if not specified, all available fields for the account will be returned, minus any columns in exclude_columns)

  * - exclude_columns=
    - comma-separated list of field names to be excluded in the response for each transaction

  * - column_separator=
    - [.csv format only] Separator between columns. Default is , for comma-separated values. (Can be set to any other separator like \| for pipe-separated values or %09 for tab-separated values.)

  * - row_separator=
    -  [.csv format only] Separator between lines. Defaults to %0A for \n (line feed). Use %0D%0A for \r\n (carriage return + line feed).

  * - include_header=
    - [.csv format only] 1 to include a header row; 0 to omit the header row. Default is 1.

  * - force_quotes=
    - [.csv format only] 1 to quote all CSV fields; 0 to only quote fields that contain separators. Default is 0.

  * - transaction_type=
    - Filters for the type of transaction. Valid inputs are Call, Sale, or Signal. Sale maps to the Reported Conversion type.

In order to ensure that all transactions are returned when using the from= and to= date query parameters,
you should store the last transaction id you have downloaded and pass it as the start_after_transaction_id to the next request.
Typical usage on the polling interval is to repeatedly call the API until no rows are returned, meaning you have downloaded all transactions.
Please note, the "to" and "from" date range parameters are both necessary, providing only one or the other will not filter the results.

We provide two helpful constants that can be used in the include_columns and exclude_columns options:

    `$invoca_custom_columns` a dynamic constant that represents the current list of your Custom Data Fields. Note: If the list of custom columns changes, those changes will be included in future API calls that use "include_columns=$invoca_custom_columns", independent of the API version. See Custom Data Parameters section for more details.

    `$invoca_custom_source_columns` a dynamic constant that represents the sources for the current list of your Custom Data Fields. Note: If the list of custom columns changes, those changes will be included in future API calls that use "include_columns=$invoca_custom_source_columns", independent of the API version. See Custom Data Parameters section for more details.

    `$invoca_default_columns` represents the default set of columns provided by the Transactions API for your requested version
