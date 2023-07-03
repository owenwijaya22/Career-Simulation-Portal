import { config } from 'dotenv';
import { connect } from 'mongoose';
import fs from 'fs';

config({ path: './.env' });

const dbUri = process.env.MONGODB_URI.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);
connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!!');
});

const modelName = process.argv[3];
const Model = require(`../models/${modelName}Model`);

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/${modelName}.json`, 'utf-8'));

const importData = async () => {
  try {
    await Model.create(data);
    console.log(`${modelName} Data successfully loaded`);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Model.deleteMany();
    console.log(`${modelName} Data deleted successully`);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

process.argv[2] === '--import' && importData();
process.argv[2] === '--delete' && deleteData();
