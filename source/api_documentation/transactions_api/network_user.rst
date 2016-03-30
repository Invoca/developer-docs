################
Network / Brand
################

URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported, where 33 is the network id.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - csv
    - Comma-Separated Values, or really Anything-Separated Values (see column_separator= below). Returns an optional header row followed by one row for each transaction, with delimited values for each row. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/33.csv``

  * - xml
    - Returns an XML document with an array of Transaction elements. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/33.xml``

  * - json
    - Returns a JSON array of transaction objects. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/33.json``


.. include:: intro.rst

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>&from=2015-03-26&to=2015-03-27``

returns 500 rows, grab the last transaction_id (in this example 500) and send request 2:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>U&from=2015-03-26&to=2015-03-27&start_after_transaction_id=500``

then repeat as necessary to get all call records within date range.

Response
--------

The data returned has the following fields:

.. include:: network_param_table.rst

Optional Parameters
-------------------

The following fields are optional based on your account type:

.. include:: dnpr_param_table.rst

.. include:: adwords_param_table.rst

.. include:: conversion_reporting_param_table.rst

.. include:: signal_param_table.rst

.. include:: voice_signal_param_table.rst

.. include:: demographics_param_table.rst

Additional Feature Parameters
*****************************

.. include:: network_optional_param_table.rst

.. include:: example.rst

.. code-block:: bash

  curl -k "https://mynetwork.invoca.net/networks/transactions/33.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU"

The -k option asks curl to not bother checking the SSL certificate authority chain as that requires extra configuration.

Endpoint:

``https://invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/``