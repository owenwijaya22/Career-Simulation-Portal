/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { config } from 'dotenv';
import { connect } from 'mongoose';
// import awsServerlessExpress from 'aws-serverless-express';
import { createServer } from 'http';

import { Server } from 'socket.io';
import app from './app.js';
// import { Server } from 'socket.io';

config({ path: './.env' });

const dbUri = process.env.MONGODB_URI;

connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!!');
});

// const server = awsServerlessExpress.createServer(app);

// export const handler = (event, context) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
// };

// const io = new Server();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('Connection Succesful to: ', socket);
});

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 3000;
  httpServer.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
}

// export const handler = ServerlessHttp(app);
