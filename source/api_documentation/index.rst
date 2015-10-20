API Documentation
=================

The platform provides the following APIs:

:doc:`transactions`  - provides read-only access to call transaction data.

:doc:`network_integration/index` -
supports the replication and synchronization of advertiser, publisher and campaign data between partner platforms.

:doc:`conversion_reporting` -
provides the ability to report completed order information (or other conversion events) from a server back into the platform.

:doc:`ringpool` -
allocates a dynamic, trackable promo phone number from a RingPool.

:doc:`bulk_ringpool_api` -
allocates a dynamic, trackable promo phone number from a RingPool (designed to handle a high volume of requests per second).


The following table identifies the APIs available by account type and role:

.. raw:: html

  <img src="https://invoca.uservoice.com/assets/74048204/API%20Graphic.png"  class="info-img" style="font-family: sans-serif; font-size: 14.44444465637207px; font-style: normal; font-variant: normal;" />


The Transactions API and Network Integration API are accessible using the API credentials generated on the platform. See :doc:`manage_api_credentials` for more information.

The Conversion Reporting API is accessible using credentials provided by Invoca. Contact questions@invoca.com to request Conversion Reporting API credentials.

The RingPool and Bulk RingPool APIs are accessible using the API keys provided in the RingPool wizard. (Note: the Bulk RingPool API is only available after being enabled by Customer Success. Contact questions@invoca.com to request the Bulk RingPool API.)

The RingPool wizard includes a section showing the correct API URL for your organization:

.. raw:: html

  <img src="https://lh6.googleusercontent.com/bPAQy29TdQ_Pljxyv5gh520cLnWHWNWUXyU8_GrN52yLNOdkKlWZPzFLCOKgdE-IejM3XDdJGZyJtQ8EMprqwUSImYfuffWuXMGQAYAFzEbMOxt7Ggtp59Q96AOf6a3BeQ"  class="info-img" width="544px;" height="191px;" style="border-style: none;" alt="RP_API.png" />


.. toctree::
   :maxdepth: 2
   :hidden:

   conversion_reporting_pixel
   conversion_reporting_email

