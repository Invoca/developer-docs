Conversion Reporting Email
==========================

Conversion events can be reported using an email message with an attached CSV file.

<h3>
To report conversions using email
</h3>
---

Verify that you have received the Conversion Reporting credentials email from support, including your Upload Email Address and Conversion Reporting ID.

For "Publisher Promotion" or Fixed Price "Bundled" Campaigns, view Conversion Reporting credentials in the Campaign Summary tab, Integration section.

![](https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fcr6_zpsbc607ab1.png&key=afea23f29e5a4f63bd166897e3dc72df)

Note or copy the Upload Email Address.

<h3>
Conversion Report Message Format:
</h3>
---

Conversion Reporting sent via email must be in a CSV (comma-separated values) file format with the sale reporting parameters as the column headers and each sale transaction on a single row. Attach the CSV file to an empty message and send it to the Upload Email Address.

Two example files are shown at the bottom of this article. Feel free to contact your Program Manager or [questions@invoca.com](mailto:questions@invoca.com) for a skeleton file that suits your needs. Removing un-used columns reduces mistakes, so trim the skeleton file to include only the parameters you need.

<h3>
For Call Based Conversions
</h3>
---

Only one parameter is absolutely required: the start time of the call. Any entry missing the start time of the call causes an error and is not processed. Including the calling phone number is also recommended.

* <b>Start time</b>

* Start time is used to associate the sales transaction to a call. There are two types of time parameters: start_time and start_time_t.  Start_time_t is in the universal "Unix time_t" format while start_time is in human-readable format: YYYY/MM/DD HH:MM:SS. Note that skeleton files have an example of this format but be sure to look at them in a plain text editor like Notepad.  If you open the file with Excel, Excel reformats that column to match its preference!

* Start_time_t has precedence over start_time so if you are planning to just use start_time, remove the start_time_t column from the skeleton file.

* Best practices encourage using the 10-digit start_time_t.

* If you are using the start_time parameter, contact us to set the time zone of your sale reporting at [questions@invoca.com](mailto:questions@invoca.com).

For more information on possible parameters and how the matching call is found, see [Conversion Reporting API](/docs/rest/conversion-reporting).

<h3>
For Web Based Conversions
</h3>
---

The affiliate or publisher ID and advertiser campaign ID are required.

For more information on possible parameters and how the matching call is found, see ﻿[Conversion Reporting API](/docs/rest/conversion-reporting).

<h3>
Reply Message
</h3>
---

Conversion Reporting emails are processed on a nightly basis and a reply message is sent once the task is completed. The reply message includes the number of conversions processed, the number of conversions that did not match up with a transaction and the number of errors. For each error encountered, the row number, the content of that row and the error it caused is returned. Please note that only up to 10 errors per batch are allowed before processing is stopped.

![](https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2F06c39c20-348a-4fc8-ac8c-36affc228fbe_zps626d230e.jpg&key=afea23f29e5a4f63bd166897e3dc72df)

<h3>
Examples:
</h3>
---

1. Conversions reported include the call Start Time in Human Readable Time Format, the Calling Phone Number and the Reason Code.

   ![](https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fcr_email3_zps689c6b82.jpg&key=afea23f29e5a4f63bd166897e3dc72df)


2. Conversions reported include the call Start Time in Unix Time Format, the calling phone number and the Sku List.

   ![](https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fcr_email2_zpsf3b62472.jpg&key=afea23f29e5a4f63bd166897e3dc72df)


<h3>
Idempotency:
</h3>
---

Sales are considered unique using a combination of start_time_t + SKU_list + reason code. Reported conversions duplicate keys (same call, sku list, reason code) behave as follows:

* If the values passed are unchanged, the reported conversion remains unchanged and is not duplicated.
* If different values are passed, the original conversion is  updated with the new values.
{:.bullets}

Reported conversions with unique keys always create new conversion transactions.
