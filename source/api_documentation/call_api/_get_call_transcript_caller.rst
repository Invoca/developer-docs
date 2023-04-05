.. container:: endpoint-long-description

  .. rubric:: Examples

  Get transcript for the given call record `CUID-33` with just the caller included

  Endpoint:

  ``https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=caller``

  Format: application/json

  Response Code: 200

  Response Body:

  .. code-block:: json
  
    [
      {
        "caller": "Orange, Awesome thank you, Have a good one"
      }
    ]
