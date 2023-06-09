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

// Create rooms data
const roomData = [
  {
    user: "JohnDoe",
    chatName: "Technology Discussion",
    latestMessage: "Did you hear about the latest tech news?",
    createdAt: new Date("2023-05-01T10:20:30Z"),
    prompt: "Discuss the latest tech news and trends",
  }
  // Add more room objects here...
];

// Insert rooms data into the rooms collection
const roomIds = await db.rooms.insertMany(roomData).then(result => result.insertedIds);

// Use the inserted room IDs to create messages data
const messageData = [
  {
    to: 'JaneDoe',
    from: 'JohnDoe',
    message: 'Hello, how are you?',
    timestamp: new Date("2023-06-10T07:34:00Z"),
    roomId: roomIds[0] // Reference the first room in the rooms collection
  },
  {
    to: 'JohnDoe',
    from: 'JaneDoe',
    message: 'I am good. How about you?',
    timestamp: new Date("2023-06-10T07:36:00Z"),
    roomId: roomIds[0] // Reference the first room in the rooms collection
  },
];

// Insert messages data into the messages collection
await db.messages.insertMany(messageData);