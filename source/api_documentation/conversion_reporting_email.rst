Conversion Reporting Email
==========================

A legacy performance feature that is only used by customers running pay-per-call campaigns.  It provides the ability to payout on a conversion event that occurs on the call, typically helps advertisers to encourage the highest quality/caller intent calls. Conversion events can be reported using an email message with an attached CSV file.

To report conversions using email
---------------------------------
1. Conversion reporting must be enabled for the Advertiser. :doc:`conversion_reporting`

#. Verify that you have received the Conversion Reporting credentials email from support, including your Upload Email Address and Conversion Reporting ID. For "Publisher Promotion" or Fixed Price "Bundled" Campaigns, by viewing Conversion Reporting destination email in the Campaign Summary tab, Integration section (bottom of the page). Note: email addresses are specific to the advertiser/call center submitting.

#. Note or copy the Upload Email Address.

#. Create CSV (comma-separated values) file for upload (must be CSV format)

   a) Name: "[Advertiser Name-Network Name] - [upload date]"
   b) `Link to template <https://drive.google.com/file/d/10raP7vn700CMnhVlO8b7adwz5Iid0Ovk/view>`_
   c) **Required Search Parameter:** In order to match a conversion to a call, you need to provide the following required search parameters: the start time of the call (format types listed below). Any entry missing the start time of the call causes an error and is not processed. The following formats are accepted:

             **start_time**: human-readable format: YYYY/MM/DD HH:MM:SS (can be copied from Invoca reporting).  If you open the file with Excel, Excel reformats that column to match its preference!  Note that the template files have an example of this format but be sure to look at them in a plain text editor like Notepad.

             **start_time_t**: 10-digit universal "Unix time_t" format

             **Note:** *start_time_t* has precedence over *start_time* so if you are planning to just use *start_time*, remove the *start_time_t* column from the file. Best practices encourage using the 10-digit *start_time_t*.

   d) **Optional, but strongly recommended Search Parameters:**
      Removing un-used columns reduces mistakes, so trim the file to include only the parameters you need.

             **calling_phone_number**: ANI in E.164 format +country national_number; example: ‘+18885551212’.

             **duration_in_seconds**: Length of the call. Used for finding the call that drove the sale, not used to check against payout conditions. Does not have to be exact, we use it to find the closest match.

             **called_phone_number**: DNIS in E.164 format +country national_number; example: ‘+18885551212’. UK and Spanish numbers are also supported. Their country codes are +44 and +34 respectively.

   e) **Include Reported Conversion Parameters:**

             A complete list of parameters that can be included can be found here:  :doc:`conversion_reporting`.

             Most common are *reason_code*, *sale_amount*, and *sale_currency*: See Link above for longer description

#. Draft an email using the Conversion Report Message Format:

   a) To: [Upload Email Address copied in #3 ONLY]
   b) Subject: [Advertiser Name - Network Name]: Conversion Reporting
   c) Body: Attach CSV file.  [no message necessary]

#. Send Email to Upload Email Address from step #3


Reply Message
-------------

Conversion Reporting emails are processed on a nightly basis and a reply message is sent once the task is completed. The reply message includes the number of conversions processed, the number of conversions that did not match up with a transaction and the number of errors. For each error encountered, the row number, the content of that row and the error it caused is returned. Please note that only up to 10 errors per batch are allowed before processing is stopped.

Example response email
----------------------

.. raw:: html

.. image:: ../_static/CRerrorMessage.jpg

Idempotency
------------

Sales are considered unique using a combination of start_time_t + SKU_list + reason code. Reported conversions duplicate keys (same call, sku list, reason code) behave as follows:

* If the values passed are unchanged, the reported conversion remains unchanged and is not duplicated.
* If different values are passed, the original conversion is updated with the new values.

Reported conversions with unique keys always create new conversion transactions.
