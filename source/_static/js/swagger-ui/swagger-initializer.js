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
    spec: {"info": {"version": "2022-05-01", "title": "SMS Messaging API"}, "paths": {"/delivery_reports": {"post": {"requestBody": {"content": {"application/json": {"example": {"_json": [{"to": "+12197935020", "message": {"direction": "out", "segmentCount": 1, "text": "", "to": ["+12197935020"], "tag": "79af47b5-5b8a-43b1-9955-6eba2294c54c", "time": "2022-05-19T14:42:43.045Z", "owner": "+18446501767", "from": "+18446501767", "applicationId": "c2b3f444-636b-48b7-8d05-e21539d10cbf", "id": "1652971362747hpukaruuffg3fbih"}, "type": "message-delivered", "description": "Message delivered to carrier.", "time": "2022-05-19T14:42:45.636420Z"}]}, "schema": {"type": "object", "properties": {"_json": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "message": {"type": "object", "properties": {"direction": {"type": "string"}, "segmentCount": {"type": "integer"}, "text": {"type": "string"}, "to": {"items": {"type": "string"}, "type": "array"}, "tag": {"type": "string"}, "time": {"type": "string"}, "owner": {"type": "string"}, "from": {"type": "string"}, "applicationId": {"type": "string"}, "id": {"type": "string"}}}, "type": {"type": "string"}, "description": {"type": "string"}, "time": {"type": "string"}}}, "type": "array"}}}}}}, "summary": "...", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}, "text/html": {"example": "{\"message\":\"Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging.\"}", "schema": {"type": "string"}}}, "description": "is expected to be not found"}, "202": {"content": {"application/json": {"example": {"status": "success", "delivery_reports": [{"progress_bit": 2, "created_at": "2022-10-28T23:33:59.000Z", "uuid": "8fbb7153-e950-4cc3-902f-a353697f6530"}]}, "schema": {"type": "object", "properties": {"status": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}}}}}, "description": "is expected to be accepted"}}, "tags": ["delivery_reports"]}}, "/messages": {"get": {"summary": "Gets messages", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-05-01/messages?page=", "series": ["1"], "in": 3, "scaffold_url": "/sms/2022-05-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/messages?page=1", "pages": 1, "count": 3, "last": 1, "first_url": "/sms/2022-05-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-05-01/messages?page=", "to": 3, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/messages?page=1"}, "messages": [{"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "54420098-37dc-4365-87cb-622cbac102d7", "delivery_reports": [], "created_at": "2022-10-28T23:34:04.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "0610e88d-3a73-43f6-97a9-f6aa5f00c111", "delivery_reports": [], "created_at": "2022-10-28T23:34:05.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "51bcaa24-1aef-49d4-afd5-c99ab62c8143", "delivery_reports": [], "created_at": "2022-10-28T23:34:06.000Z", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer", "nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns a list of records sorted in desc created_at order"}}, "tags": ["messages"]}, "post": {"requestBody": {"content": {"application/json": {"example": {"_json": [{"to": ["+12197935020"], "from": "+18446501767", "text": "Test #6"}]}, "schema": {"type": "object", "properties": {"_json": {"items": {"type": "object", "properties": {"to": {"items": {"type": "string"}, "type": "array"}, "from": {"type": "string"}, "description": {"type": "string"}, "time": {"type": "string"}, "text": {"type": "string"}, "message": {"type": "object", "properties": {"direction": {"type": "string"}, "segmentCount": {"type": "integer"}, "text": {"type": "string"}, "to": {"items": {"type": "string"}, "type": "array"}, "time": {"type": "string"}, "owner": {"type": "string"}, "from": {"type": "string"}, "applicationId": {"type": "string"}, "id": {"type": "string"}}}, "type": {"type": "string"}}}, "type": "array"}}}}}}, "summary": "Creates a message", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "does not create a message and responds with a 404"}, "202": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-05-01/messages?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-05-01/messages?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/messages?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-05-01/messages?page=1", "items": 10, "next": null, "next_url": "/sms/2022-05-01/messages?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/messages?page=1"}, "messages": [{"direction": "out", "from": "+18446501767", "uuid": "9bad9265-2924-4dbf-ad4b-d7539486ecf3", "delivery_reports": [], "text": "Test #6", "created_at": "2022-01-31T23:50:00.000Z", "to": "+12197935020", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "text": {"type": "string"}, "created_at": {"type": "string"}, "to": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "creates a message and forwards to kafka"}}, "tags": ["messages"]}}, "/messages/network/{network_id}": {"get": {"summary": "Gets messages by network id", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-05-01/messages/network/123?page=", "series": ["1", 2, 3], "in": 10, "scaffold_url": "/sms/2022-05-01/messages/network/123?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/messages/network/123?page=3", "pages": 3, "count": 28, "last": 3, "first_url": "/sms/2022-05-01/messages/network/123?page=1", "items": 10, "next": 2, "next_url": "/sms/2022-05-01/messages/network/123?page=2", "to": 10, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/messages/network/123?page=1"}, "messages": [{"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "d759042e-f0d4-46c1-b6fa-bac676e26d8b", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "9db98d45-ee78-41bb-9c59-61d2ad56b43a", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "a4a42ba5-7ff1-4cec-9fee-0cf937422ad7", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "bc3d3f36-0279-41ed-abbe-028622d1b728", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "db5c60e0-2ab1-43e5-80bb-4f2af5fa55aa", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "80e3cdc1-d7b9-495a-8738-c8b18629f609", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "836c7017-5373-42b6-ad5c-066cd3131107", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "55f45e10-3e4b-4402-b25a-614ac67c0b7f", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "545b3cdc-1f58-43f2-a0f8-33f36b90dfd6", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}, {"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "db64528e-c052-488a-ae01-d4bc09703b87", "delivery_reports": [], "created_at": "2022-09-22T03:01:01.000Z", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns the first page of sorted created_at:asc, paginated records"}}, "parameters": [{"$ref": "#/components/parameters/network_id"}], "tags": ["messages"]}}, "/messages/network/{network_id}/usage": {"get": {"summary": "Gets message usage by network id", "responses": {"200": {"content": {"application/json": {"example": {"messages": {"network_id": 77, "outgoing": {"segments": 16, "messages": 12}, "incoming": {"segments": 5, "messages": 2}}}, "schema": {"type": "object", "properties": {"messages": {"type": "object", "properties": {"network_id": {"type": "integer"}, "outgoing": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}, "incoming": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}}}}}}}, "description": "is expected to eq {\"messages\"=>{\"incoming\"=>{\"messages\"=>2, \"segments\"=>5}, \"network_id\"=>77, \"outgoing\"=>{\"messages\"=>12, \"segments\"=>16}}}"}}, "parameters": [{"$ref": "#/components/parameters/network_id"}], "tags": ["messages"]}}, "/messages/phone_number/{phone_number}": {"get": {"summary": "Gets messages by phone number", "responses": {"200": {"content": {"application/json": {"example": {"pagination": {"prev_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=", "series": ["1"], "in": 1, "scaffold_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=1", "pages": 1, "count": 1, "last": 1, "first_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=1", "items": 10, "next": null, "next_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=", "to": 1, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/messages/phone_number/+18472525700?page=1"}, "messages": [{"to": "+12024561111", "direction": "out", "from": "+18472525700", "uuid": "bb4f5d02-8151-4e42-9bf8-f03cc8fa2cf4", "delivery_reports": [], "created_at": "2022-10-28T23:34:03.000Z", "deleted_at": null}]}, "schema": {"type": "object", "properties": {"pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"nullable": true}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}, "messages": {"items": {"type": "object", "properties": {"to": {"type": "string"}, "direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {}, "type": "array"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}}}, "type": "array"}}}}}, "description": "returns the expected response columns"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested phone number"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful phone number not_found error"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/phone_number/{phone_number}/usage": {"get": {"summary": "Gets messages by phone number", "responses": {"200": {"content": {"application/json": {"example": {"messages": {"phone_number": "+18472525700", "outgoing": {"segments": 16, "messages": 12}, "incoming": {"segments": 5, "messages": 2}}}, "schema": {"type": "object", "properties": {"messages": {"type": "object", "properties": {"phone_number": {"type": "string"}, "outgoing": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}, "incoming": {"type": "object", "properties": {"segments": {"type": "integer"}, "messages": {"type": "integer"}}}}}}}}}, "description": "is expected to eq {\"messages\"=>{\"incoming\"=>{\"messages\"=>2, \"segments\"=>5}, \"outgoing\"=>{\"messages\"=>12, \"segments\"=>16}, \"phone_number\"=>\"+18472525700\"}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested phone number"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful phone number not_found error"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}": {"delete": {"summary": "Deletes a message by message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18472525700", "uuid": "9dfe4323-9f4a-4cb1-8f22-ecd642cbd5c6", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "6c74dc0f-176d-43b8-9675-ab07336eaba0"}], "text": "You are a swell person", "segments": 1, "failed_at": null, "to": "+12024561111", "delivered_at": null, "carrier_message_id": null, "deleted_at": "2022-07-24T04:01:01.000Z", "created_at": "2022-07-22T04:01:01.000Z", "virtual_line_id": 133}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "delivered_at": {"nullable": true}, "carrier_message_id": {"nullable": true}, "deleted_at": {"type": "string"}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "deletes the message and returns a json hash with the expected format and fields"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}, "get": {"summary": "Gets a message given its message id", "responses": {"200": {"content": {"application/json": {"example": {"message": {"direction": "out", "from": "+18472525700", "uuid": "123e4567-e89b-12d3-a456-426655440000", "delivery_reports": [{"progress_bit": 1, "created_at": "2022-09-22T04:01:01.000Z", "uuid": "aa1f8026-8b81-446e-af53-1ede594b8c7c"}], "text": "You are a swell person", "segments": 1, "failed_at": null, "to": "+12024561111", "delivered_at": "2022-09-22T04:01:01.000Z", "carrier_message_id": "456", "deleted_at": null, "created_at": "2022-09-22T04:01:01.000Z", "virtual_line_id": 109}}, "schema": {"type": "object", "properties": {"message": {"type": "object", "properties": {"direction": {"type": "string"}, "from": {"type": "string"}, "uuid": {"type": "string"}, "delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "text": {"type": "string"}, "segments": {"type": "integer"}, "failed_at": {"nullable": true}, "to": {"type": "string"}, "delivered_at": {"type": "string"}, "carrier_message_id": {"type": "string"}, "deleted_at": {"nullable": true}, "created_at": {"type": "string"}, "virtual_line_id": {"type": "integer"}}}}}}}, "description": "returns the found message, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports": {"get": {"summary": "Gets delivery reports for a given message id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_reports": [{"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "57d52c5e-b7ba-4b1c-877c-a762f9f891ad"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:02.000Z", "uuid": "feeac9db-b95a-4202-9c00-54088435be00"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:03.000Z", "uuid": "b5e64586-dcda-4682-96e2-2f2ac30a62e8"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:04.000Z", "uuid": "9fd432fd-824c-42d1-9674-7c9848e65801"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:05.000Z", "uuid": "781fd140-1d6f-45df-9e73-7f96048a9c3a"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:06.000Z", "uuid": "36b5e72d-f6ec-46f4-a06b-95ab37d64db1"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:07.000Z", "uuid": "3b9b13f4-377f-4db9-8f1f-9416d3f60e68"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:08.000Z", "uuid": "040949ef-a6aa-49c8-97f6-aa3ff0788e35"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:09.000Z", "uuid": "a100a6ce-7a81-4824-8dd9-0786e2587b1b"}, {"progress_bit": 1, "created_at": "2022-07-22T04:01:10.000Z", "uuid": "41dba8b5-dbca-4486-b0b5-e40f2f909fdb"}], "pagination": {"prev_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=", "series": ["1", 2], "in": 10, "scaffold_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=2", "pages": 2, "count": 18, "last": 2, "first_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=1", "items": 10, "next": 2, "next_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=2", "to": 10, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/messages/uuid/8ffa6a4b-1f4f-4284-b598-d44f9842a1b8/delivery_reports?page=1"}}, "schema": {"type": "object", "properties": {"delivery_reports": {"items": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "returns the sorted created_at:asc, paginated records"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}, "422": {"content": {"application/json": {"example": {"message": "The request contains unsupported sort columns: 'destination'. Supported columns: created_at, progress_bit'"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns a helpful error message"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}], "tags": ["messages"]}}, "/messages/uuid/{message_uuid}/delivery_reports/uuid/{delivery_report_uuid}": {"get": {"summary": "Gets messages by message id and delivery report id", "responses": {"200": {"content": {"application/json": {"example": {"delivery_report": {"progress_bit": 1, "created_at": "2022-07-22T04:01:01.000Z", "uuid": "d17e9613-708b-4fa8-b072-872e08c72d12"}}, "schema": {"type": "object", "properties": {"delivery_report": {"type": "object", "properties": {"progress_bit": {"type": "integer"}, "created_at": {"type": "string"}, "uuid": {"type": "string"}}}}}}}, "description": "returns the found delivery report, with the expected format and fields"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - Could not find any messages for the requested message uuid"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "returns an appropriate error"}}, "parameters": [{"$ref": "#/components/parameters/message_uuid"}, {"$ref": "#/components/parameters/delivery_report_uuid"}], "tags": ["messages"]}}, "/phone_numbers": {"get": {"summary": "...", "responses": {"200": {"content": {"application/json": {"example": {"phone_numbers": [{"phone_number": "+14436416216", "virtual_line_id": 134, "network_id": 12345, "created_at": "2022-01-31T23:49:01.000Z", "enabled_at": null, "carrier_interface": "bandwidth", "deleted_at": null, "id": 1001}, {"phone_number": "+19159201312", "virtual_line_id": 135, "network_id": 12345, "created_at": "2022-01-31T23:49:02.000Z", "enabled_at": null, "carrier_interface": "bandwidth", "deleted_at": null, "id": 1002}, {"phone_number": "+12014459875", "virtual_line_id": 136, "network_id": 12345, "created_at": "2022-01-31T23:49:03.000Z", "enabled_at": null, "carrier_interface": "bandwidth", "deleted_at": null, "id": 1003}, {"phone_number": "+14245201355", "virtual_line_id": 137, "network_id": 12345, "created_at": "2022-01-31T23:49:04.000Z", "enabled_at": null, "carrier_interface": "bandwidth", "deleted_at": null, "id": 1004}, {"phone_number": "+18174348472", "virtual_line_id": 138, "network_id": 12345, "created_at": "2022-01-31T23:49:05.000Z", "enabled_at": null, "carrier_interface": "bandwidth", "deleted_at": null, "id": 1005}], "pagination": {"prev_url": "/sms/2022-05-01/phone_numbers?page=", "series": ["1", 2], "in": 5, "scaffold_url": "/sms/2022-05-01/phone_numbers?page=__pagy_page__", "from": 1, "last_url": "/sms/2022-05-01/phone_numbers?page=2", "pages": 2, "count": 7, "last": 2, "first_url": "/sms/2022-05-01/phone_numbers?page=1", "items": 5, "next": 2, "next_url": "/sms/2022-05-01/phone_numbers?page=2", "to": 5, "prev": null, "page": 1, "page_url": "/sms/2022-05-01/phone_numbers?page=1"}}, "schema": {"type": "object", "properties": {"phone_numbers": {"items": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "enabled_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "deleted_at": {"nullable": true}, "id": {"type": "integer"}}}, "type": "array"}, "pagination": {"type": "object", "properties": {"prev_url": {"type": "string"}, "series": {"items": {"type": "string"}, "type": "array"}, "in": {"type": "integer"}, "scaffold_url": {"type": "string"}, "from": {"type": "integer"}, "last_url": {"type": "string"}, "pages": {"type": "integer"}, "count": {"type": "integer"}, "last": {"type": "integer"}, "first_url": {"type": "string"}, "items": {"type": "integer"}, "next": {"type": "integer"}, "next_url": {"type": "string"}, "to": {"type": "integer"}, "prev": {"nullable": true}, "page": {"type": "integer"}, "page_url": {"type": "string"}}}}}}}, "description": "get the first page of paginated phone numbers"}}, "tags": ["phone_numbers"]}}, "/phone_numbers/{phone_number}": {"delete": {"summary": "...", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+12047147205", "virtual_line_id": 180, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": "2022-04-14T20:30:12.000Z", "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"type": "string"}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...Z\", \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+12047147205\", \"virtual_line_id\"=>180}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number could not be found"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}}, "tags": ["phone_numbers"]}, "get": {"summary": "...", "responses": {"200": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+12047147205", "virtual_line_id": 177, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq {\"phone_number\"=>{\"carrier_interface\"=>\"bandwidth\", \"created_at\"=>\"2022-03-14T20:30:12.000Z\", \"delete...il, \"enabled_at\"=>nil, \"network_id\"=>12345, \"phone_number\"=>\"+12047147205\", \"virtual_line_id\"=>177}}"}, "404": {"content": {"application/json": {"example": {"message": "Not Found - the requested phone number could not be found"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}}, "tags": ["phone_numbers"]}, "post": {"summary": "...", "responses": {"201": {"content": {"application/json": {"example": {"phone_number": {"phone_number": "+12047147205", "virtual_line_id": 67890, "network_id": 12345, "created_at": "2022-03-14T20:30:12.000Z", "deleted_at": null, "carrier_interface": "bandwidth", "enabled_at": null}}, "schema": {"type": "object", "properties": {"phone_number": {"type": "object", "properties": {"phone_number": {"type": "string"}, "virtual_line_id": {"type": "integer"}, "network_id": {"type": "integer"}, "created_at": {"type": "string"}, "deleted_at": {"nullable": true}, "carrier_interface": {"type": "string"}, "enabled_at": {"nullable": true}}}}}}}, "description": "is expected to eq \"https://example.org/sms/2022-05-01/phone_numbers/+12047147205\""}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "204": {"content": {"": {"example": "", "schema": {"type": "string"}}}, "description": "is expected to eq \"https://example.org/sms/2022-05-01/phone_numbers/+12047147205\""}, "409": {"content": {"application/json": {"example": {"message": "Conflict \u2014 The request could not be completed due to a conflict with the current state of SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be conflict"}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}}, "/phone_numbers/{phone_number}/enable": {"post": {"summary": "...", "responses": {"404": {"content": {"application/json": {"example": {"message": "Not Found - The request could not be completed due to the requested object identifier being unknown to SMS Messaging."}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be not found"}, "403": {"content": {"application/json": {"example": {"message": "Forbidden"}, "schema": {"type": "object", "properties": {"message": {"type": "string"}}}}}, "description": "is expected to be forbidden"}, "204": {"content": {"": {"example": "", "schema": {"type": "string"}}}, "description": "is expected to eq \"https://example.org/sms/2022-05-01/phone_numbers/+12047147205\""}}, "parameters": [{"$ref": "#/components/parameters/phone_number"}], "tags": ["phone_numbers"]}}}, "components": {"parameters": {"network_id": {"schema": {"type": "integer"}, "description": "The Network ID", "in": "path", "required": true, "example": 1024, "name": "network_id"}, "delivery_report_uuid": {"schema": {"type": "string"}, "description": "The Delivery Report UUID", "in": "path", "required": true, "example": "1162b7e8-e7b1-493b-b8c4-0bc838161c5f", "name": "delivery_report_uuid"}, "phone_number": {"schema": {"type": "string"}, "description": "The Phone Number in E164 Format", "in": "path", "required": true, "example": "+48472525799", "name": "phone_number"}, "message_uuid": {"schema": {"type": "string"}, "description": "The Message UUID", "in": "path", "required": true, "example": "da8ec5c7-bd73-4b35-9afb-b56050fd6568", "name": "message_uuid"}}}, "tags": [{"name": "phone_numbers", "description": "Phone Numbers"}, {"name": "messages", "description": "Messages"}, {"name": "delivery_reports", "description": "Delivery Reports"}], "servers": [], "openapi": "3.0.3"}
  });

  //</editor-fold>
};