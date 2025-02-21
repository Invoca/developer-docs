.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript analysis for the given call record `CUID-33` and a summary is available

  Endpoint:

  ``https://mynetwork.invoca.net/call/transcript_analysis/CUID-33``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json
  
    {
       "call_record_id": "CUID-33",
       "transcript_summary": "The customer was looking to purchase a new vehicle."
    }
