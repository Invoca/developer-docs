URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - csv
    - Comma-Separated Values, or really Anything-Separated Values (see column_separator= below). Returns an optional header row followed by one row for each transaction, with delimited values for each row. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/33.csv``

  * - xml
    - Returns an XML document with an array of Transaction elements. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/33.xml``

  * - json
    - Returns a JSON array of transaction objects. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/33.json``

Authentication
--------------

The API uses OAuth Authentication to authenticate that access is allowed. Pass the OAuth Token like any other query parameter, however, please note that the OAuth token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page. You must be a super user to get an OAuth Token and use the API.

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

  * - start_after_transaction_id=
    - Transaction_id to start retrieving after. This should be the last value retrieved previously. Default (or empty string) means start at the oldest.

  * - column_separator=
    - [.csv format only] Separator between columns. Default is , for comma-separated values. (Can be set to any other separator like \| for pipe-separated values or %09 for tab-separated values.)

  * - row_separator=
    -  [.csv format only] Separator between lines. Defaults to %0A for \n (line feed). Use %0D%0A for \r\n (carriage return + line feed).

  * - include_header=
    - [.csv format only] 1 to include a header row; 0 to omit the header row. Default is 1.

  * - force_quotes=
    - [.csv format only] 1 to quote all CSV fields; 0 to only quote fields that contain separators. Default is 0.

In order to ensure that all transactions are returned when using the from= and to= date query parameters,
you should store the last transaction id you have downloaded and pass it as the start_after_transaction_id to the next request.
Typical usage on the polling interval is to repeatedly call the API until no rows are returned, meaning you have downloaded all transactions.
Please note, the "to" and "from" date range parameters are both necessary, providing only one or the other will not filter the results.

Example:

Send request 1:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>&from=2015-03-26&to=2015-03-27``

returns 500 rows, grab the last transaction_id (in this example 500) and send request 2:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>U&from=2015-03-26&to=2015-03-27&start_after_transaction_id=500``

then repeat as necessary to get all call records within date range.

Response
--------

The data returned has the following fields:
