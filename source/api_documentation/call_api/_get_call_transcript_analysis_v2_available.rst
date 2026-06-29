.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript analysis for the given call record `CUID-33` where both the summary and sentiment are available

  Endpoint:

  ``https://mynetwork.invoca.net/call/v2/transcript_analysis/CUID-33``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    {
       "call_record_id": "CUID-33",
       "transcript_summary": {
          "status": "available",
          "text": "The customer was looking to purchase a new vehicle."
       },
       "sentiment": {
          "status": "available",
          "overall": { "score": 0.42, "label": "positive" },
          "agent":   { "score": 0.55, "label": "positive" },
          "caller":  { "score": 0.31, "label": "neutral" }
       }
    }
