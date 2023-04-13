.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript for the given call record `CUID-33` with both agent and caller included in the corresponding conversation order.

  Endpoint:

  ``https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=caller_agent_conversation``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json
  
    [
      { "agent": "Which Color?" },
      { "caller": "Orange" },
      { "agent": "Okay I will look into that" },
      { "caller": "Awesome thank you" },
      { "agent": "Goodbye!" },
      { "caller": "Have a good one" }
    ]
