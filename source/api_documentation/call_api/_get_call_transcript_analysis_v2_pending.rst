.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript analysis for the given call record `CUID-33` where the summary is still pending and sentiment analysis is not enabled

  Endpoint:

  ``https://mynetwork.invoca.net/call/v2/transcript_analysis/CUID-33``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
       "call_record_id": "CUID-33",
       "transcript_summary": {
          "status": "pending"
       },
       "sentiment": {
          "status": "not_applicable"
       }
    }
