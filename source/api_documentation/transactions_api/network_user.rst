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


.. include:: _intro.rst

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>&include_custom_columns=1&include_columns=$invoca_custom_columns&exclude_columns=$invoca_default_columns&from=2015-03-26&to=2015-03-27``

returns 500 rows with only your Custom Data Fields, grab the last transaction_id (in this example 500) and send request 2:

``https://yourcompany.invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/706.csv?limit=500&oauth_token=<YOUR_OAUTH_TOKEN>U&include_custom_columns=1&include_columns=$invoca_custom_columns&exclude_columns=$invoca_default_columns&from=2015-03-26&to=2015-03-27&start_after_transaction_id=500``

then repeat as necessary to get all call records within date range.

Response
--------

The data returned has the following fields:

.. include:: _network_param_table.rst

Optional Parameters
-------------------

The following fields are optional based on your account type:

.. include:: _dnpr_param_table.rst

.. include:: _adwords_param_table.rst

.. include:: _conversion_reporting_param_table.rst

.. include:: _signal_param_table.rst

.. include:: _voice_signal_param_table.rst

.. include:: _demographics_param_table.rst

Additional Feature Parameters
*****************************

.. include:: _network_optional_param_table.rst

.. include:: _example.rst

.. code-block:: bash

  curl -k "https://mynetwork.invoca.net/networks/transactions/33.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU"

The -k option asks curl to not bother checking the SSL certificate authority chain as that requires extra configuration.

Endpoint:

``https://invoca.net/api/@@TRANSACTION_API_VERSION/networks/transactions/``