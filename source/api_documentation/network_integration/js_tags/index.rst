Invoca Tags
============

Manage Invoca Tags (aka JS Tags)
""""""""""""""""""""""""""""""""""""""""""""""""

The Invoca Tag is a snippet of code that connects Invoca to your landing pages. This API documentation helps provide necessary features to create and manage an Invoca Tag and it's revisions.

.. raw:: html

    <p>
    More details on the Invoca Tags can be found <a href="https://community.invoca.com/t5/call-tracking/how-to-configure-and-deploy-your-invoca-tag-with-the-invoca-tag/ta-p/465#U465">here</a> and <a href="https://community.invoca.com/t5/developer-features/invoca-tag-wizard-custom-code-settings/ta-p/691">here</a>.
    </p>

.. list-table::
  :widths: 15 15 50
  :header-rows: 1
  :class: parameters

  * - Property
    - Type
    - Value

  * - id
    - integer (read-only)
    - The internal Invoca id of the Invoca Tag.

  * - name
    - string
    - The name of the Invoca Tag. Unique within network.

  * - description
    - string
    - Invoca Tag description.

  * - landing_page_url
    - string
    - Website or page URL on which the destination is applied.

  * - active
    - boolean
    - Current status of the Invoca Tag.

  * - status
    - string
    - Current status.

  * - created_at
    - string (read-only)
    - Alias for the destination. Auto-generated names.

  * - **live_revision**
    - object
    - Current live revision.

  * - **draft_revision**
    - object
    - Current draft revision.

JS Tag Revision
""""""""""""""""""""""""""""""""""""""""""""""""

Revision for the JS Tag

.. include:: js_revision_parameters.rst

Endpoint:

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags.json``

.. api_endpoint::
   :verb: GET
   :path: /js_tags
   :description: Get all Invoca Tags
   :page: get_js_tags

.. api_endpoint::
   :verb: GET
   :path: /js_tags/&lt;js_tag_id&gt;
   :description: Get a Invoca Tag
   :page: get_js_tag

.. api_endpoint::
   :verb: POST
   :path: /js_tags
   :description: Create an Invoca Tag
   :page: post_js_tags

.. api_endpoint::
   :verb: PUT
   :path: /js_tags/&lt;js_tag_id&gt;
   :description: Update an Invoca Tag
   :page: put_js_tag

.. api_endpoint::
   :verb: POST
   :path: /js_tags/&lt;js_tag_id&gt;/pause
   :description: Pause an Invoca Tag
   :page: post_js_tags_pause

.. api_endpoint::
   :verb: POST
   :path: /js_tags/&lt;js_tag_id&gt;/unpause
   :description: Unpause an Invoca Tag
   :page: post_js_tags_unpause

.. api_endpoint::
   :verb: POST
   :path: /js_tags/&lt;js_tag_id&gt;/go_live
   :description: Make an Invoca Tag revision live
   :page: post_js_tags_live

.. api_endpoint::
   :verb: POST
   :path: /js_tags/&lt;js_tag_id&gt;/revert
   :description: Revert an Invoca Tag to it's previous revision
   :page: post_js_tags_revert

.. api_endpoint::
   :verb: DELETE
   :path: /js_tags/&lt;js_tag_id&gt;
   :description: Delete an Invoca Tag
   :page: delete_js_tag


Error Handling
""""""""""""""

Forbidden – 403:

POST
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags.json``

Content Type: application/json

Response Code: 403

**Request Body**

.. code-block:: json

  {
    "name": "test for example.com",
    "description": "An example to show how it works"
  }

**Response Body**

.. code-block:: json

  {
    "errors": {
      "name": [
        "has already been taken"
      ]
    }
  }


Not Found – 404:

GET
----

``https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/js_tags/<js_tag_id>.json``

Content Type: application/json

Response Code: 404

**Response Body**

.. code-block:: json

  {
    "errors": {
      "class": "RecordNotFound",
      "invalid_data": "Invoca Tag not found with id: '00548112'"
    }
  }
