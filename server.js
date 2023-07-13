/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { config } from 'dotenv';
import { connect } from 'mongoose';

import app from './app.js';

config({ path: './.env' });

const dbUri = process.env.MONGODB_URI;

connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
