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
    spec: {"info": {"version": "2022-08-01", "title": "SMS Messaging API"}, "paths": {"/messages": {"get": {"summary": "Gets messages", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages?page=", "series": ["1"], "in": 3, "scaffold_url": "/sms/2022-08-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages?page=1", "pages": 1, "count": 3, "last": 1, "first_url": "/sms/2022-08-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages?page=", "to": 3, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages?page=1"}, "messages": [{"direction": "out", "from": "+18885550100", "uuid": "ec0fbe6f-7de7-4429-ac7e-e6d5e8a0fd93", "delivery_reports": [], "created_at": "2023-02-11T20:31:38.050Z", "to": "+18885550101", "cuid": "73E4-36F4335234E8", "deleted_at": null}, {"direction": "out", "from": "+18885550100", "uuid": "d316512b-fd7e-40db-b714-7d8c74553f63", "delivery_reports": [], "created_at": "2023-02-11T20:31:39.050Z", "to": "+18885550101", "cuid": "23BA-B3F453C23CE8", "deleted_at": null}, {"direction": "out", "from": "+18885550100", "uuid": "3172ad4f-0bf8-4d56-93bd-c69add91d93a", "delivery_reports": [], "created_at": "2023-02-11T20:31:40.050Z", "to": "+18885550101", "cuid": "B3F5-81F403F23CE8", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer", "nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "to": {"type": "string"}, "cuid": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns a list of records sorted in desc created_at order"}}, "tags": ["messages"]}, "post": {"requestBody": {"content": {"application/json": {"example": [{"to": ["+18885550100"], "from": "+18885550101", "text": "Your appointment is confirmed for Friday. Thank you."}], "schema": {"items": {"$ref": "#/components/schemas/MessageRequest"}, "type": "array"}}}}, "summary": "Creates a message", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "does not create a message and responds with a 404"}, "409": {"content": {"application/json": {"example": {"message": "Conflict - The request could not be completed due to a conflict with the current state of SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "responds with a conflict"}, "202": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-08-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-08-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages?page=1"}, "messages": [{"direction": "out", "from": "+18885550101", "uuid": "31ae1cc1-d850-4b25-bf98-c7d409811699", "delivery_reports": [], "text": "Your appointment is confirmed for Friday. Thank you.", "created_at": "2022-01-31T23:50:00.000Z", "to": "+18885550100", "cuid": "3E83-592C1B19171B", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "text": {"type": "string"}, "created_at": {"type": "string"}, "to": {"type": "string"}, "cuid": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "creates a message and forwards to kafka"}}, "tags": ["messages"]}}, "/messages/phone_number/{phone_number}": {"get": {"summary": "Gets messages by phone number", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1", "items": 10, "next": null, "next_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages/phone_number/+18885550100?page=1"}, "messages": [{"direction": "out", "from": "+18885550100", "uuid": "32ca0a7d-5cb9-45f2-9a11-5faec2c66f7d", "delivery_reports": [], "created_at": "2023-02-11T20:31:32.302Z", "to": "+18885550101", "cuid": "73A9-64F4A3F232E8", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "to": {"type": "string"}, "cuid": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns the expected response columns"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested phone number"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful phone number not_found error"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/phone_number/{phone_number}/usage": {"get": {"summary": "Gets message usage information by phone number", "responses": {"200": {"content": {"application/json": {"example": {"messages": {"phone_number": "+18885550100", "outgoing": {"segments": 0, "messages": 0}, "incoming": {"segments": 0, "messages": 0}}}, "schema": {"type": "object", "properties": {"messages": {"type": "object", "properties": {"phone_number": {"type": "string"}, "outgoing": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}, "incoming": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}}}}}}}, "description": "returns 0 segments and messages"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number, +18885550100, is not in the system"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns 0 segments and messages"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}": {"delete": {"summary": "Deletes a message by message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18885550100", "uuid": "9e3afbf1-2ab9-4685-8e51-d9da9bf33a75", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "ba0f84cc-5d66-433c-9bc0-6a3f86fffb31"}], "text": "Your appointment is confirmed for Friday. Thank you.", "segments": 1, "failed_at": null, "to": "+18885550101", "cuid": "9E6C-0648D44DECF7", "delivered_at": null, "carrier_message_id": null, "deleted_at": "2022-07-24T04:01:01.000Z", "created_at": "2022-07-22T04:01:01.000Z", "virtual_line_id": 145}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "cuid": {"type": "string"}, "delivered_at": {"nullable": true}, "carrier_message_id": {"nullable": true}, "deleted_at": {"type": "string"}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "deletes the message and returns a json hash with the expected format and fields"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}, "get": {"summary": "Gets a message given its message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18885550100", "uuid": "123e4567-e89b-12d3-a456-426655440000", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-09-22T04:01:01.000Z", "uuid": "aa1f8026-8b81-446e-af53-1ede594b8c7c"}], "text": "Your appointment is confirmed for Friday. Thank you.", "segments": 1, "failed_at": null, "to": "+18885550101", "cuid": "73C3-14F4A3823CE8", "delivered_at": "2022-09-22T04:01:01.000Z", "carrier_message_id": "456", "deleted_at": null, "created_at": "2022-09-22T04:01:01.000Z", "virtual_line_id": 111}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "cuid": {"type": "string"}, "delivered_at": {"type": "string"}, "carrier_message_id": {"type": "string"}, "deleted_at": {"nullable": true}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "returns the found message, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports": {"get": {"summary": "Gets delivery reports for a given message id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "d9274001-989a-418c-b610-db13e0cc62f5"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:02.000Z", "uuid": "9c6e0c2c-ed09-4fea-8082-415678e7c6b1"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:03.000Z", "uuid": "1fb0a27c-e0ca-479c-ba2b-ecba6c27cd11"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:04.000Z", "uuid": "83d1a561-be05-4e19-8122-6f44bdc5f2b4"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:05.000Z", "uuid": "ffcaa842-3655-47a5-97ed-192264ec9dda"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:06.000Z", "uuid": "f376b676-ba53-4c1c-93f4-22877ffe3fb2"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:07.000Z", "uuid": "39444607-bf8a-44cb-a7c7-482fa805ce33"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:08.000Z", "uuid": "e2636d56-e885-41cd-8b99-50200bffcd7c"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:09.000Z", "uuid": "4c8d3072-01a8-47df-ac00-3702363abb10"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:10.000Z", "uuid": "7e96bfd9-48b8-4e02-bb51-0c625616000e"}], "pagination": {"prev_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=", "series": ["1", 2], "in": 10, "scaffold_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=2", "pages": 2, "count": 18, "last": 2, "first_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=1", "items": 10, "next": 2, "next_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=2", "to": 10, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/messages/uuid/24bd05eb-9534-48a8-aa6c-7e1249f32850/delivery_reports?page=1"}}, "schema": {"type": "object", "properties": {"delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "returns the sorted created_at:asc, paginated records"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}, "422": {"content": {"application/json": {"example": {"message": "The request contains unsupported sort columns: 'destination'. Supported columns: 'created_at, progress_bit'"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful error message"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports/uuid/{delivery_report_uuid}": {"get": {"summary": "Gets messages by message id and delivery report id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_report": {"uuid": "e5877187-7ea9-4a6a-aa24-f557e30789e0", "message_uuid": "01424f17-a423-451f-abc9-b7cd3ec934b2", "progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "destination": "+18885550101", "carrier_description": null, "carrier_errorcode": null}}, "schema": {"type": "object", "properties": {"delivery_report": {"type": "object", "properties": {"uuid": {"type": "string"}, "message_uuid": {"type": "string"}, "progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "destination": {"type": "string"}, "carrier_description": {"nullable": true}, "carrier_errorcode": {"nullable": true}}}}}}}, "description": "returns the found delivery report, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any delivery reports for the requested delivery report uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}, {"$ref": "#/components/parameters/delivery_report_uuid"}], "tags": ["messages"]}}, "/phone_numbers": {"get": {"summary": "Gets summarized metadata for phone numbers assigned to an Invoca Network", "responses": {"200": {"content": {"application/json": {"example": {"phone_numbers": [{"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:03.347Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:04.347Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:05.347Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:06.347Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}, {"phone_number": "+18885550100", "created_at": "2022-01-31T23:49:07.347Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}], "pagination": {"prev_url": "/sms/2022-08-01/phone_numbers?page=", "series": ["1", 2], "in": 5, "scaffold_url": "/sms/2022-08-01/phone_numbers?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-08-01/phone_numbers?page=2", "pages": 2, "count": 7, "last": 2, "first_url": "/sms/2022-08-01/phone_numbers?page=1", "items": 5, "next": 2, "next_url": "/sms/2022-08-01/phone_numbers?page=2", "to": 5, "prev": null, "page": 1, "page_url": "/sms/2022-08-01/phone_numbers?page=1"}}, "schema": {"type": "object", "properties": {"phone_numbers": {"items": {"type": "object", "properties": {"phone_number": {"type": "string"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "get the first page of paginated phone numbers"}}, "tags": ["phone_numbers"]}}, "/phone_numbers/{phone_number}": {"delete": {"summary": "Deletes a phone number from SMS Messaging", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 199, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": "2022-04-14T20:30:12.000Z", "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"type": "string"}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...Z\", \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+18885550100\", \"virtual_line_id\"=>199}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number, +18885550100, is not in the system"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "422": {"content": {"application/json": {"example": {"message": "Unprocessable Entity - the requested phone number is not valid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be unprocessable"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}, "get": {"summary": "Gets detailed phone number SMS Messaging metadata", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 196, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...il, \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+18885550100\", \"virtual_line_id\"=>196}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number, +18885550100, is not in the system"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "422": {"content": {"application/json": {"example": {"message": "Unprocessable Entity - the requested phone number is not valid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be unprocessable"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}, "post": {"summary": "Adds a phone number to involve with SMS Messaging", "responses": {"201": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+18885550100", "virtual_line_id": 67890, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": "2022-03-14T20:30:12.000Z"}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"type": "string", "nullable": true}}}}}}}, "description": "is expected to eq \"https://example.org/sms/2022-08-01/phone_numbers/+18885550100\""}, "422": {"content": {"application/json": {"example": {"message": "Unprocessable Entity - the requested phone number is not valid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be unprocessable"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "204": {"content": {"": {"example": "", "schema": {"type": "string"}}}, "description": "is expected to eq \"https://example.org/sms/2022-08-01/phone_numbers/+18885550100\""}, "409": {"content": {"application/json": {"example": {}, "schema": {"type": "object", "properties": {}}}}, "description": "is expected to be conflict"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}}}, "components": {"parameters": {"network_id": {"schema": {"type": "integer"}, "description": "The Network ID", "in": "path", "required": true, "example": 1024, "name": "network_id"}, "delivery_report_uuid": {"schema": {"type": "string"}, "description": "The Delivery Report UUID", "in": "path", "required": true, "example": "1162b7e8-e7b1-493b-b8c4-0bc838161c5f", "name": "delivery_report_uuid"}, "phone_number": {"schema": {"type": "string"}, "description": "The Phone Number in E.164 Format", "in": "path", "required": true, "example": "+18885550100", "name": "phone_number"}, "message_uuid": {"schema": {"type": "string"}, "description": "The Message UUID", "in": "path", "required": true, "example": "da8ec5c7-bd73-4b35-9afb-b56050fd6568", "name": "message_uuid"}}, "schemas": {"DeliveryReportRequest": {"type": "object", "properties": {"to": {"type": "string"}, "message": {"type": "object", "properties": {"direction": {"type": "string"}, "segmentCount": {"type": "integer"}, "text": {"type": "string"}, "to": {"items": {"type": "string"}, "type": "array"}, "tag": {"type": "string"}, "time": {"type": "string"}, "owner": {"type": "string"}, "from": {"type": "string"}, "applicationId": {"type": "string"}, "id": {"type": "string"}}}, "type": {"type": "string"}, "description": {"type": "string"}, "time": {"type": "string"}}}, "MessageRequest": {"type": "object", "properties": {"to": {"items": {"type": "string"}, "type": "array"}, "from": {"type": "string"}, "text": {"type": "string"}}}}}, "tags": [{"name": "phone_numbers", "description": "Phone Numbers"}, {"name": "messages", "description": "Messages"}], "servers": [], "openapi": "3.0.3"}
  });

  //</editor-fold>
};
