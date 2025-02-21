#####################
Transcript Analysis
#####################


URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL in order to retrieve Transcript Analysis. Currently, the transcript summary will be returned if it is available.
The following response formats are supported, where CUID-33 is the call record id.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - json (default)
    - Returns a JSON object of the transcript analysis. `https://mynetwork.invoca.net/call/transcript_analysis/CUID-33`

Authentication
--------------

The API uses OAuth to validate access. The OAuth Token can be passed in two ways. The first way is to pass the OAuth Token in the header of the request. The second is to pass the OAuth Token like any other query parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Response
--------
.. api_endpoint::
   :verb: GET
   :path: /call/transcript_analysis/&lt;call_record_id&gt;
   :description: Get a transcript analysis (transcript summary available)
   :page: get_call_transcript_analysis_summary

.. api_endpoint::
   :verb: GET
   :path: /call/transcript_analysis/&lt;call_record_id&gt;
   :description: Get a transcript analysis (no transcript summary available)
   :page: get_call_transcript_analysis_no_summary

Endpoint:

``https://mynetwork.invoca.net/call/transcript_analysis/<call_record_id>``
