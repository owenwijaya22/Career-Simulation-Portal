const express = require('express');
const morgan = require('morgan');

const messageRoutes = require('./routes/messageRoutes');
const roomRoutes = require('./routes/roomRoutes');
const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
const aiRouter = require('./routes/aiRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  console.log('Morgan Initialized');
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/message', messageRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/users', userRouter);
app.use('/api/company', companyRouter);
app.use('/api/ai-user', aiRouter);

module.exports = app;
