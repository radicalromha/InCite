/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1tlum8d3yzbaj0k",
    "created": "2024-07-01 15:30:18.022Z",
    "updated": "2024-07-01 15:30:18.022Z",
    "name": "page",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0l1brwfk",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "avje3ww6",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1tlum8d3yzbaj0k");

  return dao.deleteCollection(collection);
})
