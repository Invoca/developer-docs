#####################
Publisher / Affiliate
#####################

URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported, where 33 is the affiliate id.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - csv
    - Comma-Separated Values, or really Anything-Separated Values (see column_separator= below). Returns an optional header row followed by one row for each transaction, with delimited values for each row. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv``

  * - xml
    - Returns an XML document with an array of Transaction elements. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.xml``

  * - json
    - Returns a JSON array of transaction objects. ``https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.json``


.. include:: _intro_for_affiliates.rst


Response
--------

General Parameters
******************

.. include:: _affiliate_param_table.rst

.. include:: _dnpr_param_table.rst

Additional Feature Parameters
*****************************

.. include:: _affiliate_optional_param_table.rst

.. include:: _example.rst


Example 1: Get the next 20 transactions that occurred after transaction id C624DA2C-CF3367C3:

.. code-block:: bash

  curl -k 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFH'


Example 2: Get 50 rows from a specific time period with only the transaction_id and duration columns:

.. code-block:: bash

  curl -k 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?limit=50&include_columns=transaction_id,duration&from=2015-03-26&to=2015-03-27&oauth_token=YbcFH'


Example 3: Get 50 rows that exclude a few columns such as city and region:

.. code-block:: bash

  curl -k 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?limit=50&exclude_columns=city,region&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFH'


Example 4: Get All Transactions from a specific time period that are of transaction_type Signal:

.. code-block:: bash

  curl -k 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?transaction_type=Signal&from=2015-03-24&to=2015-03-27&oauth_token=YbcFH'


Example 5: Get All Transactions from a specific time period that are of transaction_type Call and Signal:

.. code-block:: bash

  curl -k 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?transaction_type[]=Call&transaction_type[]=Signal&from=2015-03-24&to=2015-03-27&oauth_token=YbcFH'

Example 6: Get All Transactions from a specific time period with oauth token in the request header:

.. code-block:: bash

  curl -k -H 'Authorization: YbcFH' 'https://mynetwork.invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/33.csv?transaction_type[]=Call&transaction_type[]=Signal&from=2015-03-24&to=2015-03-27'


Endpoint:

``https://invoca.net/api/@@TRANSACTION_API_VERSION/affiliates/transactions/<affiliate_id>.<format>``
