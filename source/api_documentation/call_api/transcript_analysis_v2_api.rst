########################
Transcript Analysis (v2)
########################


URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL in order to retrieve Transcript Analysis.

Unlike v1, the v2 endpoint always returns an explicit, per-analysis ``status`` for both the transcript summary and sentiment, so clients never have to interpret a missing field. Each analysis has its own independent lifecycle (sentiment can be available while the summary is still pending, and vice versa).

The following response formats are supported, where CUID-33 is the call record id.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - json (default)
    - Returns a JSON object of the transcript analysis. `https://mynetwork.invoca.net/call/v2/transcript_analysis/CUID-33`

Authentication
--------------

The API uses OAuth to validate access. The OAuth Token can be passed in two ways. The first way is to pass the OAuth Token in the header of the request. The second is to pass the OAuth Token like any other query parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Status values
-------------

``transcript_summary.status``:

.. list-table::
  :widths: 20 40
  :header-rows: 1
  :class: parameters

  * - Status
    - Meaning

  * - ``available``
    - The summary has been generated; ``text`` is present.

  * - ``pending``
    - The summary is enabled and is being (or will be) generated; ``text`` is absent.

  * - ``transcript_too_short``
    - The transcript was too short to summarize; no summary will be produced.

  * - ``no_transcript``
    - The call has no transcript; no summary will be produced.

  * - ``not_applicable``
    - Transcript summaries are not enabled for this network.

``sentiment.status``:

.. list-table::
  :widths: 20 40
  :header-rows: 1
  :class: parameters

  * - Status
    - Meaning

  * - ``available``
    - Sentiment has been computed; ``overall``, ``agent``, and ``caller`` scores are present.

  * - ``pending``
    - Sentiment is enabled and is being (or will be) computed; scores are absent.

  * - ``not_applicable``
    - Sentiment analysis is not enabled for this network.

Response
--------
.. api_endpoint::
   :verb: GET
   :path: /call/v2/transcript_analysis/&lt;call_record_id&gt;
   :description: Get a transcript analysis (summary and sentiment available)
   :page: get_call_transcript_analysis_v2_available

.. api_endpoint::
   :verb: GET
   :path: /call/v2/transcript_analysis/&lt;call_record_id&gt;
   :description: Get a transcript analysis (summary pending, sentiment not enabled)
   :page: get_call_transcript_analysis_v2_pending

Endpoint:

``https://mynetwork.invoca.net/call/v2/transcript_analysis/<call_record_id>``
