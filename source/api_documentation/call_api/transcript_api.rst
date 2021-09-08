#####################
Transcripts
#####################

.. include:: _rollup_message.rst

URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported, where CUID-33 is the call record id.

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Format
    - Description and URL

  * - json (default)
    - Returns a JSON array of the transcript. `https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=agent`

Authentication
--------------

The API uses OAuth to validate access. The OAuth Token can be passed in two ways. The first way is to pass the OAuth Token in the header of the request. The second is to pass the OAuth Token like any other query parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Query Parameters
----------------

The API takes the following optional query parameters:

.. list-table::
  :widths: 8 40
  :header-rows: 1
  :class: parameters

  * - Parameter
    - Description

  * - transcript_format= (required)
    - Determines what format the transcripts are returned as, see response parameters below for information on each format.

Response
--------
.. api_endpoint::
   :verb: GET
   :path: /call/transcript/&lt;call_record_id&gt?transcript_format=caller;
   :description: Get a transcript of the call for just the caller
   :page: get_call_transcript_caller

.. api_endpoint::
   :verb: GET
   :path: /call/transcript/&lt;call_record_id&gt?transcript_format=agent;
   :description: Get a transcript of the call for just the agent
   :page: get_call_transcript_agent

.. api_endpoint::
   :verb: GET
   :path: /call/transcript/&lt;call_record_id&gt?transcript_format=caller_agent_block;
   :description: Get a transcript of the call as a block
   :page: get_call_transcript_caller_agent_block

.. api_endpoint::
   :verb: GET
   :path: /call/transcript/&lt;call_record_id&gt?transcript_format=caller_agent_conversation;
   :description: Get a transcript of the call as a conversation
   :page: get_call_transcript_caller_agent_conversation


Endpoint:

``https://mynetwork.invoca.net/call/transcript/<call_record_id>?transcript_format=<format>``
