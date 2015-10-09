Conversion Reporting
====================

* * *

The Conversion Reporting API (formerly referred to as the “Call Center” or “Sales Reporting” API) is used to report completed order information (or other conversion events) from a server back into the platform.
Reporting order information through the API allows advertisers to compensate publishers for sales that convert over the phone (or on the web).
Additionally, Advertiser Direct campaigns using the Conversion Reporting API with search campaigns can report back revenue generated for each phone call so that search bids can be optimized.

Before using the Conversion Reporting API, request credentials from [questions@invoca.com](mailto:questions@invoca.com)

### Client API Wrappers
<hr>

The following working examples with wrapper code to integrate in Ruby, Java, PHP or .NET are available:

*    [Ruby](https://github.com/Invoca/call_center_api-ruby)
*    [Java](https://github.com/Invoca/call_center_api-java)
*    [PHP](https://github.com/Invoca/call_center_api-php)
*    [.NET](https://github.com/Invoca/call_center_api-dotnet)

### POST (or PUT) to a URL
<hr>

Send call results to Invoca servers in the form of an HTTP POST. cURL is recommended because it is simple and preinstalled on most machines.
The extended example later in this document breaks down each part of a cURL POST.

Here is an example of a URL POST:

`https://api0.invoca.net/api/2015-07-01/calls/23.xml`

where “" is the API version and "23" is the Conversion Reporting ID (previously known as Call Center ID) for your account on the platform.

For “Publisher Promotion” or Fixed Price “Bundled” campaigns, the Conversion Reporting ID is found on the Campaign Summary tab, Integration section.

Remember to check the HTTP status code returned for error checking. This helps greatly when debugging.

### Parameters
<hr>

Passed in standard HTML “application/form-url-encoded” format. Put quotes around all parameter values being passed in the API call.

### Report a sale/conversion on a call
<hr>

*    Required
*    `start_time_t:` 10 digit start time of the call in UTC seconds since 1/1/70, also known as Unix time_t. The start time does not have to be exact since clocks will not be perfectly synchronized.
*    Additionally, one of the following two parameters is highly recommended:

     *    `calling_phone_number:` ANI in E.164 format +country national_number; example: ‘+1 8885551212’.
     *    'duration_in_seconds:` Length of the call. Used for finding the call that drove the sale, not used to check against payout conditions. Like start time, duration_in_seconds does not have to be exact, we use it find the closest match.
*    Optional
*    `reference_id:` (call_center_call_id): This ID must be unique for each call across a call center’s calls. The ID is set the first time the call result is POSTed for a call. To update the call result, use the same ID.
*    `called_phone_number:` DNIS in E.164 format +country national_number; example: ‘+1 8885551212’. UK and Spanish numbers are also supported. Their country codes are +44 and +34 respectively.
*    `use_http_status:` 1 or blank will use HTTP status corresponding to success/failure. If set to 0, the HTTP status will always be 200 OK and the actual status and error message will be in the response body. See the Status section below.

### Report a new web conversion
<hr>

*    Required
*    `web_conversion:` Set to “1” to indicate a conversion that is not tied to a call (default is 0).
*    `reference_id:` This ID must be unique for each conversion.
*    `advertiser_campaign_id:` The ID of the advertiser campaign in the platform.
*    `affiliate_id_from_network:` The affiliate or publisher ID (of the main network) that is credited for the web conversion; the publisher must be approved to the advertiser campaign specified above.
*    Optional
*    `use_http_status:` 1 or blank will use HTTP status corresponding to success/failure. If set to 0, the HTTP status will always be 200 OK and the actual status and error message will be in the response body. See the Status section below.

### Add to an existing web conversion
<hr>

*    Required
*    `web_conversion:` Set to “1” to indicate a conversion that is not tied to a call (default is 0).
*    `parent_reference_id:` This is the reference_id that was passed in when creating the initial web conversion.
*    Optional
*    `use_http_status:` 1 or blank will use HTTP status corresponding to success/failure. If set to 0, the HTTP status will always be 200 OK and the actual status and error message will be in the response body. See the Status section below.

### Shared parameters for sales and web conversions
<hr>

*    Optional (for Tracking Sales)
*    `reason_code:` the conversion event specified in the payout conditions in the campaign. This code is free form and left to the advertiser to decide.
     (For example, ‘R’ for Referred to customer service, or ‘info’ for requesting information. Or simply “Y” for a lead was generated and “N” if not.)
*    `sku_list[]:` Product SKU (repeat this parameter for multiple products). Like the reason_code, the sku_list is a free form description of the product or service sold and can be used as a payout condition.
     Note: when reporting via email, the CSV header name should be “sku_list” and a single comma separated list should be provided.
*    `quantity_list[]:` Quantity 1 or greater for the corresponding product SKU listed in the sku_list (Quantities must appear in same order as the SKUs listed in the sku_list.)
     Note: when reporting via email, the CSV header name should be “quantity_list” and a single comma separated list should be provided.
*    `sale_currency:` USD, GBP, EUR, etc.
*    `sale_amount:` Amount to 2 decimal places, or 0.00 if no sale (does not include shipping).
*    Optional (for Remarketing)
*    `email_address:` email address in RFC2822 format or empty string
*    `name:` first last name
*    `address1:` Address line 1.
*    `address2:` Address line 2.
*    `order_city:` City
*    `state_or_province:` State of Province
*    `country:` Country
*    `zip_code:` Postal Code
*    `home_phone_number:` Home phone in case there are any questions, in E.164 format.
*    `cell_phone_number:` Cell phone in case there are any questions, in E.164 format.
*    `opt_in_SMS:` 1 if authorized to send SMS reply or 0 or empty if not.

### Status
<hr>

The HTTP status returned is 201 Created for a successful POST (or a 200 OK for a successful PUT), a 4xx code if one of the parameters is incorrect, or a 5xx code if a server error occurred.
In the latter two error cases, a detailed error class and message are returned in XML in the body, for example:
<pre><code>
<?xml version="1.0" encoding="UTF-8"?>
<Error>
    <Class>NotFound</Class>
    <Message>Couldn't find call around time 1262895406 from caller +1 8053825533
     </Message>
</Error>
</code></pre>
If &use_http_status=0 is given, the status is always returned as 200 Ok or 201 Created. This can be helpful in order to see the detailed error message in the body when working with HTTP libraries
that just return the status code when there are errors without exposing the body.

### Security
<hr>

All posts must use HTTPS BASIC authentication and use pre-assigned usernames and passwords. Contact [questions@invoca](mailto:questions@invoca.com) to request Conversion Reporting API credentials.

### High availability
<hr>

The initial POST should choose randomly (or alternately) between api0.invoca.net and api1.invoca.net. If a POST fails for any reason, retry the POST on the other one.

### Idempotency
<hr>

Sales are considered unique using a combination of start_time_t + SKU_list + reason code. POSTs with duplicate keys (same call, sku list, reason code) behave as follows:

1. If the values passed are unchanged, the reported conversion remains unchanged and is not duplicated.
2. If different values are passed, the original conversion is updated with the new values.

POSTs with unique keys always create new conversion transactions.

### Frequency
<hr>

Updates can be sent at any frequency from once a minute to once a day. Customers prefer to get their data as fast as possible, so the best practice is to get as close to once a minute as practical.

### Example
<hr>

The example below uses cURL to demonstrate a POST that updates a call.

<pre><code>curl -u 'example@callcenter.api:secretPW'` \
'https://api0.invoca.net/api/2015-07-01/calls/23.xml' -k -v \` \
-d reference_id='2935812450'             \
-d start_time_t='1273589993'             \
-d duration_in_seconds=300               \
-d called_phone_number='+1 8773593504'   \
-d calling_phone_number='+1 2143283408'  \
-d reason_code='S'                       \
-d sku_list[]='DVD'                      \
-d quantity_list[]=2                     \
-d sku_list[]='cleaner'                  \
-d quantity_list[]=1                     \
-d sale_currency='USD'                   \
-d sale_amount='60.50'                   \
-d email_address='jane@doe.com'          \
-d opt_in_SMS='1'                        \
-d name='Jane Doe'                       \
-d address1='123 Mockingbird Lane'       \
-d address2='Unit 2'                     \
-d order_city='Chicago'                  \
-d state_or_province='IL'                \
-d country='US'                          \
-d cell_phone_number='+1 3125170488'     \
-d use_http_status='1'</code></pre>

Output:

<pre><code>
< HTTP/1.1 201 Created

< Date: Fri, 25 Jun 2010 18:22:45 GMT

< Server: Mongrel 1.1.5

< Status: 201

< X-Runtime: 189

< Cache-Control: no-cache

< Content-Type: application/xml; charset=utf-8

< Content-Length: 1

< Set-Cookie: SERVERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/

< Via: 1.1 www.invoca.net

< Vary: Accept-Encoding
</code></pre>

### Example Breakdown
<hr>

This is a description of some of the parameters in the previous cURL example.

    curl -u 'example@callcenter.api:secretPW'
*    If using cURL, this is how credentials are passed. The username is ‘example@callcenter.api’ and the password is ‘secretPW’. The two strings need to be separated with a colon character.

    'https://api0.invoca.net/api/2015-07-01/calls/23.xml' -k -v
*    The URL where the call result is sent. The API version is “2010-04-22” and the unique Conversion Reporting ID is “23”.

    -d reference_id='2935812450'
*    This ID (if provided) needs to be unique for each call within a call center, and is the handle for future updates on this call or conversion.

    -d start_time_t='1273589993'
*    The call start time in UTC.

    -d called_phone_number='+1 8773593504'
*    The phone number the caller dialed.

    -d calling_phone_number='+1 2143283408'
*    The phone number the caller is calling from.

    -d sku_list[]='DVD'

    -d quantity_list[]=2

    -d sku_list[]='cleaner'

    -d quantity_list[]=1
*    sku_list and quantity_list are closely related. The quantity_list must appear in the same order as the sku_list. For this example, the sku DVD has a quantity value of 2 while cleaner is 1.

### Search Algorithm to Find Matching Call
<hr>

We look for an exact match for calls associated with the call center, using these parameters, if given:

`reference_id` `calling_phone_number`

If more than one call is found with those exact parameters (or the parameters are not provided), we then look for calls that are closest to the start_time_t and duration_in_seconds, if provided.
Due to the distribution of call attribute data, the start_time_t parameter is given a different weight than duration_in_seconds so that a call with a start time difference of 20 seconds is equivalent to a call with a duration difference of 1 second.

Please note that the Conversion Reporting API is idempotent (if you repost sales data already captured, it is not accidentally counted twice), so repost any sales that receive a failure.

#### Endpoint:

`https://invoca.net/api/2015-07-01/calls/<converstion_reporting_id>.xml`
