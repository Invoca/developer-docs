Transactions API
================

The Transactions API and Network Integration API are accessible using the API credentials generated on the platform.

:doc:`network_user`

:doc:`advertiser_user`

:doc:`affiliate_user`

The Transactions API provides an interface for retrieving call transactions for your organization. 
This provides you with a superset of the information available on the Reporting Details tab. 
The API is designed to be polled at any interval over 5 minutes. You should store the last transaction id 
you have downloaded in order to pass it as the start_after_transaction_id with the next request. 
Typical usage on the polling interval is to repeatedly call the API until no rows are returned, 
meaning you have downloaded all transactions. If an existing transaction is corrected, the correction will appear as a new 
transaction that refers to the original through the corrects_transaction_id field. When you receive a correction, 
replace the original transaction’s attributes with the new attributes from the correction.
The data returned depends on your account type. To see which fields you will see, select an account type. 
Please note, results will show a superset of fields available. Your response may differ depending on the 
features enabled on the platform being accessed. Make a sample request to the API to identify the fields returned.

.. toctree::
   :maxdepth: 2
   :hidden:

   network_user
   advertiser_user
   affiliate_user
