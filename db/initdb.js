/* eslint-disable no-undef */
db.auth('chat', 'pass');
db = db.getSiblingDB('chats');

db.createCollection('messages', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['to', 'from', 'message', 'timestamp', 'roomId'],
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
        roomId: {
          bsonType: 'string',
          description: 'must be an string and is required',
        },
      },
    },
  },
});

db.createCollection('rooms', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['user', 'chatName', 'createdAt', 'prompt'],
      properties: {
        user: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        prompt: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        members: {
          bsonType: 'array',
          description: 'must be an array and is required',
        }
      }
    }
  }
});


