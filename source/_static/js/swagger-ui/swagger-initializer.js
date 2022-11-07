window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  SwaggerUIBundle({
    // url: "https://petstore.swagger.io/v2/swagger.json", // TODO: replace with real schema when versioning is in-place
    dom_id: '#swagger-ui',
    deepLinking: true,
    syntaxHighlight: { theme: 'arta'},
    presets: [
      SwaggerUIBundle.presets.apis
    ],
    plugins: [
    ],
    tryItOutEnabled: false,
    supportedSubmitMethods: [''],
    defaultModelsExpandDepth: -1,
    spec: {"info": {"version": "2022-08-01", "title": "SMS Messaging API"}, "paths": {"/delivery_reports": {"post": {"requestBody": {"content": {"application/json": {"example": [{"to": "+18885550101", "message": {"direction": "out", "segmentCount": 1, "text": "", "to": ["+18885550101"], "tag": "79af47b5-5b8a-43b1-9955-6eba2294c54c", "time": "2022-05-19T14:42:43.045Z", "owner": "+18885550100", "from": "+18885550100", "applicationId": "c2b3f444-636b-48b7-8d05-e21539d10cbf", "id": "1652971362747hpukaruuffg3fbih"}, "type": "message-delivered", "description": "Message delivered to carrier.", "time": "2022-05-19T14:42:45.636420Z"}], "schema": {"items": {"$ref": "#/components/schemas/DeliveryReportRequest"}, "type": "array"}}}}, "summary": "Adds a Delivery Report received on behalf of an outgoing SMS messaging, and outputs detailed information about the configured Delivery Report", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "401": {"content": {"application/json": {"example": {"message": "No usable Authorization request header!"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be unauthorized"}, "202": {"content": {"application/json": {"example": {"status": "success", "delivery_reports": [{"progress_bit": 2, "created_at": "2022-11-07T23:09:16.000Z", "uuid": "ca05ded5-0e42-48ac-a451-514b9ce03f96"}]}, "schema": {"type": "object", "properties": {"status": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}}}}}, "description": "is expected to be accepted"}}, "tags": ["delivery_reports"]}}, "/messages": {"get": {"summary": "Gets messages", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages?page=", "series": ["1"], "in": 3, "scaffold_url": "/sms/2022-08-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages?page=1", "pages": 1, "count": 3, "last": 1, "first_url": "/sms/2022-08-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages?page=", "to": 3, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages?page=1"}, "messages": [{"to": "+18885550101", "direction": "out", "from": "+18885550100", "uuid": "cf78f947-075e-4458-af93-9706f32bc2c5", "delivery_reports": [], "created_at": "2022-11-07T23:09:20.000Z", "deleted_at": null}, {"to": "+18885550101", "direction": "out", "from": "+18885550100", "uuid": "dec2c9e3-0354-4a8a-9738-d3016d604f99", "delivery_reports": [], "created_at": "2022-11-07T23:09:21.000Z", "deleted_at": null}, {"to": "+18885550101", "direction": "out", "from": "+18885550100", "uuid": "321fb07e-8225-4392-b3fc-987ceeca3815", "delivery_reports": [], "created_at": "2022-11-07T23:09:22.000Z", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer", "nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns a list of records sorted in desc created_at order"}}, "tags": ["messages"]}, "post": {"requestBody": {"content": {"application/json": {"example": [{"to": ["+18885550100"], "from": "+18885550101", "text": "Your appointment is confirmed for Friday. Thank you."}], "schema": {"items": {"$ref": "#/components/schemas/MessageRequest"}, "type": "array"}}}}, "summary": "Creates a message", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "does not create a message and responds with a 404"}, "202": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-08-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-08-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages?page=1"}, "messages": [{"direction": "out", "from": "+18885550101", "uuid": "9bb9d0e4-9568-47ff-8db4-964a6dfb14e6", "delivery_reports": [], "text": "Your appointment is confirmed for Friday. Thank you.", "created_at": "2022-01-31T23:50:00.000Z", "to": "+18885550100", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "text": {"type": "string"}, "created_at": {"type": "string"}, "to": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "creates a message and forwards to kafka"}}, "tags": ["messages"]}}, "/messages/phone_number/{phone_number}": {"get": {"summary": "Gets messages by phone number", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1"}, "messages": [{"to": "+18885550101", "direction": "out", "from": "+18885550100", "uuid": "63d322d2-eaff-4c62-bd39-9b0812636f0f", "delivery_reports": [], "created_at": "2022-11-07T23:09:18.000Z", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns the expected response columns"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested phone number"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful phone number not_found error"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/phone_number/{phone_number}/usage": {"get": {"summary": "Gets message usage information by phone number", "responses": {"200": {"content": {"application/json": {"example": {"messages": {"phone_number": "+18885550100", "outgoing": {"segments": 16, "messages": 12}, "incoming": {"segments": 5, "messages": 2}}}, "schema": {"type": "object", "properties": {"messages": {"type": "object", "properties": {"phone_number": {"type": "string"}, "outgoing": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}, "incoming": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}}}}}}}, "description": "is expected to eq {\"messages\"=>{\"incoming\"=>{\"messages\"=>2, \"segments\"=>5}, \"outgoing\"=>{\"messages\"=>12, \"segments\"=>16}, \"phone_number\"=>\"+18885550100\"}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested phone number"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful phone number not_found error"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}": {"delete": {"summary": "Deletes a message by message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18885550100", "uuid": "d24a136a-c1f6-441d-b31b-44f8d587e0a4", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "6fd61864-0a06-463c-9fc8-8eb8c156fb40"}], "text": "Your appointment is confirmed for Friday. Thank you.", "segments": 1, "failed_at": null, "to": "+18885550101", "delivered_at": null, "carrier_message_id": null, "deleted_at": "2022-07-24T04:01:01.000Z", "created_at": "2022-07-22T04:01:01.000Z", "virtual_line_id": 133}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "delivered_at": {"nullable": true}, "carrier_message_id": {"nullable": true}, "deleted_at": {"type": "string"}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "deletes the message and returns a json hash with the expected format and fields"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}, "get": {"summary": "Gets a message given its message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18885550100", "uuid": "123e4567-e89b-12d3-a456-426655440000", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-09-22T04:01:01.000Z", "uuid": "aa1f8026-8b81-446e-af53-1ede594b8c7c"}], "text": "Your appointment is confirmed for Friday. Thank you.", "segments": 1, "failed_at": null, "to": "+18885550101", "delivered_at": "2022-09-22T04:01:01.000Z", "carrier_message_id": "456", "deleted_at": null, "created_at": "2022-09-22T04:01:01.000Z", "virtual_line_id": 109}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "delivered_at": {"type": "string"}, "carrier_message_id": {"type": "string"}, "deleted_at": {"nullable": true}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "returns the found message, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports": {"get": {"summary": "Gets delivery reports for a given message id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "c7817234-7c4a-4568-bb0b-1a008bf166df"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:02.000Z", "uuid": "a7dc8724-3043-4c25-99f7-313d76ba5a52"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:03.000Z", "uuid": "30d0ab7f-e549-4d9f-b251-5f9c767175f8"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:04.000Z", "uuid": "43d1a32f-b477-414c-96da-bec8f1c7abd1"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:05.000Z", "uuid": "b1dad7df-32c0-4ff5-a0eb-5d150c03e454"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:06.000Z", "uuid": "db079c67-09f8-41af-8bf3-58574387cc1b"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:07.000Z", "uuid": "92350fc7-86b9-43d1-9b4f-ae64642176bc"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:08.000Z", "uuid": "87ca0621-9656-42b0-a709-30c134abd770"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:09.000Z", "uuid": "eb40a38c-8478-4821-ab9c-fca0efc82e8a"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:10.000Z", "uuid": "3ddab4fc-99aa-4ac2-93fa-aa08fe037ab4"}], "pagination": {"prev_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=", "series": ["1", 2], "in": 10, "scaffold_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=2", "pages": 2, "count": 18, "last": 2, "first_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=1", "items": 10, "next": 2, "next_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=2", "to": 10, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages/uuid/b527c784-9765-4bed-8611-e695d2641a68/delivery_reports?page=1"}}, "schema": {"type": "object", "properties": {"delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "returns the sorted created_at:asc, paginated records"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}, "422": {"content": {"application/json": {"example": {"message": "The request contains unsupported sort columns: 'destination'. Supported columns: created_at, progress_bit'"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful error message"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports/uuid/{delivery_report_uuid}": {"get": {"summary": "Gets messages by message id and delivery report id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_report": {"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "6f17325f-d9e9-420e-bb0b-9b48366b4bb9"}}, "schema": {"type": "object", "properties": {"delivery_report": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}}}}}, "description": "returns the found delivery report, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any delivery reports for the requested delivery report uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}, {"$ref": "#/components/parameters/delivery_report_uuid"}], "tags": ["messages"]}}, "/phone_numbers": {"get": {"summary": "Gets summarized metadata for phone numbers assigned to an Invoca Network", "responses": {"200": {"content": {"application/json": {"example": {"phone_numbers": [{"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:01.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:02.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:03.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:04.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:05.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}], "pagination": {"prev_url": "/sms/2022-08-01/phone_numbers?page=", "series": ["1", 2], "in": 5, "scaffold_url": "/sms/2022-08-01/phone_numbers?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/phone_numbers?page=2", "pages": 2, "count": 7, "last": 2, "first_url": "/sms/2022-08-01/phone_numbers?page=1", "items": 5, "next": 2, "next_url": "/sms/2022-08-01/phone_numbers?page=2", "to": 5, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/phone_numbers?page=1"}}, "schema": {"type": "object", "properties": {"phone_numbers": {"items": {"type": "object", "properties": {"phone_number": {"type": "string"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "get the first page of paginated phone numbers"}}, "tags": ["phone_numbers"]}}, "/phone_numbers/{phone_number}": {"delete": {"summary": "Deletes a phone number from SMS Messaging", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 180, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": "2022-04-14T20:30:12.000Z", "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"type": "string"}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...Z\", \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+18885550100\", \"virtual_line_id\"=>180}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number could not be found"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}, "get": {"summary": "Gets detailed phone number SMS Messaging metadata", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 177, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...il, \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+18885550100\", \"virtual_line_id\"=>177}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number could not be found"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}, "post": {"summary": "Adds a phone number to involve with SMS Messaging", "responses": {"201": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 67890, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq \"https://example.org/sms/2022-08-01/phone_numbers/+18885550100\""}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "204": {"content": {"": {"example": "", "schema": {"type": "string"}}}, "description": "is expected to eq \"https://example.org/sms/2022-08-01/phone_numbers/+18885550100\""}, "409": {"content": {"application/json": {"example": {"message": "Conflict \u2014 The request could not be completed due to a conflict with the current state of SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be conflict"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}}, "/phone_numbers/{phone_number}/enable": {"post": {"summary": "Enables a previously configured phone number involved with SMS Messaging", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "204": {"content": {"": {"example": "", "schema": {"type": "string"}}}, "description": "is expected to eq \"https://example.org/sms/2022-08-01/phone_numbers/+18885550100\""}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}}}, "components": {"parameters": {"network_id": {"schema": {"type": "integer"}, "description": "The Network ID", "in": "path", "required": true, "example": 1024, "name": "network_id"}, "delivery_report_uuid": {"schema": {"type": "string"}, "description": "The Delivery Report UUID", "in": "path", "required": true, "example": "1162b7e8-e7b1-493b-b8c4-0bc838161c5f", "name": "delivery_report_uuid"}, "phone_number": {"schema": {"type": "string"}, "description": "The Phone Number in E.164 Format", "in": "path", "required": true, "example": "+18885550100", "name": "phone_number"}, "message_uuid": {"schema": {"type": "string"}, "description": "The Message UUID", "in": "path", "required": true, "example": "da8ec5c7-bd73-4b35-9afb-b56050fd6568", "name": "message_uuid"}}, "schemas": {"DeliveryReportRequest": {"type": "object", "properties": {"to": {"type": "string"}, "message": {"type": "object", "properties": {"direction": {"type": "string"}, "segmentCount": {"type": "integer"}, "text": {"type": "string"}, "to": {"items": {"type": "string"}, "type": "array"}, "tag": {"type": "string"}, "time": {"type": "string"}, "owner": {"type": "string"}, "from": {"type": "string"}, "applicationId": {"type": "string"}, "id": {"type": "string"}}}, "type": {"type": "string"}, "description": {"type": "string"}, "time": {"type": "string"}}}, "MessageRequest": {"type": "object", "properties": {"to": {"items": {"type": "string"}, "type": "array"}, "from": {"type": "string"}, "text": {"type": "string"}}}}}, "tags": [{"name": "phone_numbers", "description": "Phone Numbers"}, {"name": "messages", "description": "Messages"}, {"name": "delivery_reports", "description": "Delivery Reports"}], "servers": [], "openapi": "3.0.3"}
  });

  //</editor-fold>
};
