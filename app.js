import express from 'express';
import morgan from 'morgan';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import messageRouter from './routes/messageRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import userRouter from './routes/userRoutes.js';
import companyRouter from './routes/companyRoutes.js';
import aiRouter from './routes/aiRoutes.js';
import questionRouter from './routes/questionRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import attemptRouter from './routes/attemptRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import clueRouter from './routes/clueRoutes.js';
import pythonRouter from './routes/pythonRoutes.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const options = {
  info: {
    version: '1.0.0',
    title: 'Your App Name',
    description: 'Your App Description',
    license: {
      name: 'MIT',
    },
  },
  filesPattern: './**/*.js',
  baseDir: __dirname,
};
expressJSDocSwagger(app)(options);

if (process.env.NODE_ENV === 'development') {
  console.log('Morgan Initialized');
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use('/', (req, res) => {
//   return res.send("Hello World!");
// });

app.use('/api/message', messageRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/users', userRouter);
app.use('/api/companies', companyRouter);
app.use('/api/ai-user', aiRouter);
app.use('/api/questions', questionRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/attempts', attemptRouter);
app.use('/api/events', eventRouter);
app.use('/api/clue', clueRouter);
app.use('/api/python', pythonRouter);

export default app;
