/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { config } from 'dotenv';
import { connect } from 'mongoose';
import awsServerlessExpress from 'aws-serverless-express';

import app from './app.js';

config({ path: './.env' });

const dbUri = process.env.MONGODB_URI;

connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!!');
});

const server = awsServerlessExpress.createServer(app);

export const handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
}

// export const handler = ServerlessHttp(app);
