const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRoutes');
const conversationRouter = require('./routes/conversationRoute');
const gigRouter = require('./routes/gigRoute');
const messageRouter = require('./routes/messageRoute');
const orderRouter = require('./routes/orderRoute');
const reviewRouter = require('./routes/reviewRoutes');
const authRouter = require('./routes/authRoute');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5173", credential: true}));

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.Message || "Something went wrong";

    return res.status(errorStatus).json({
        status: "success",
        error: {
            errorMessage 
        } 
    })
})
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);




module.exports = app;