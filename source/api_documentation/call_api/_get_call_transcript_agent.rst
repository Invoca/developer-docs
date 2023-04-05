.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript for the given call record `CUID-33` with just the agent included

  Endpoint:

  ``https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=agent``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json

    [
      {
        "agent": "Which Color?, Okay I will look into that, Goodbye!"
      }
    ]
