const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const conversationRouter = require('./routes/conversationRoute');
const gigRouter = require('./routes/gigRoute');
const messageRouter = require('./routes/messageRoute');
const orderRouter = require('./routes/orderRoute');
const reviewRouter = require('./routes/reviewRoutes');
const authRouter = require('./routes/authRoute');

const app = express();

app.use(express.json());
app.use(cors());

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// app.use('/api/v1/user', userRouter);
// app.use('/api/v1/order', orderRouter);
// app.use('/api/v1/gig', gigRouter);
// app.use('/api/v1/message', messageRouter);
// app.use('/api/v1/conversation', conversationRouter);
// app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/auth', authRouter);




module.exports = app;