Example
-------

For example, if you have this OAuth API token:

.. list-table::
  :widths: 1
  :header-rows: 1
  :class: parameters

  * - OAuth API token

  * - YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU’

Here is an example using curl to get the next 20 transactions that occurred after transaction id C624DA2C-CF3367C3:

.. code-block:: bash

  curl -k "https://mynetwork.invoca.net/@@ORG_TYPE_PLURAL/transactions/33.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU"

The -k option asks curl to not bother checking the SSL certificate authority chain as that requires extra configuration.

Endpoint:

``https://invoca.net/api/@@TRANSACTION_API_VERSION/@@ORG_TYPE_PLURAL/transactions/``
