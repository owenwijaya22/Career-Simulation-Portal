/* eslint-disable no-undef */
db.auth('chat', 'pass');
db = db.getSiblingDB('chats');

db.createCollection('messages', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['to', 'from', 'message', 'timestamp'],
      properties: {
        to: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        from: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        message: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        timestamp: {
          bsonType: 'date',
          description: 'must be a date and is required',
        },
      },
    },
  },
});
