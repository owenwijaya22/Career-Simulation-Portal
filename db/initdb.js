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

db.messages.insertMany([
  {
    to: 'user1',
    from: 'user2',
    message: 'Hello, how are you?',
    timestamp: new Date("2023-06-10T07:34:00Z"),
    roomId: ObjectId("60d663bb2ef4853f70fc3a4c")
  },
  {
    to: 'user2',
    from: 'user1',
    message: 'I am good. How about you?',
    timestamp: new Date("2023-06-10T07:36:00Z"),
    roomId: ObjectId("60d663bb2ef4853f70fc3a4c")
  },
  {
    to: 'user3',
    from: 'user2',
    message: 'Hi, are you online?',
    timestamp: new Date("2023-06-10T08:00:00Z"),
    roomId: ObjectId("60d663bb2ef4853f70fc3a4d")
  },
  {
    to: 'user2',
    from: 'user3',
    message: 'Yes, I am online.',
    timestamp: new Date("2023-06-10T08:05:00Z"),
    roomId: ObjectId("60d663bb2ef4853f70fc3a4d")
  }
]);

const roomData = [
  {
    user: "JohnDoe",
    chatName: "Technology Discussion",
    latestMessage: "Did you hear about the latest tech news?",
    createdAt: new Date("2023-05-01T10:20:30Z"),
    prompt: "Discuss the latest tech news and trends",
  },
  {
    user: "JaneDoe",
    chatName: "Cooking Ideas",
    latestMessage: "I found a great new pasta recipe!",
    createdAt: new Date("2023-03-05T12:30:45Z"),
    prompt: "Share your favorite recipes and cooking tips",
  },
  // Add more room objects here...
];
    
db.rooms.insertMany(roomData)
    .then(() => console.log("Data added"))
    .catch(err => console.error(err));