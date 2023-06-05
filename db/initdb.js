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
          bsonType: 'objectId',
          description: 'must be an objectId and is required',
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
        chatName: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        latestMessage: {
          bsonType: 'string',
          description: 'must be a string',
        },
        createdAt: {
          bsonType: 'date',
          description: 'must be a date and is required',
        },
        prompt: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
      },
    },
  },
});
