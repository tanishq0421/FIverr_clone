const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
).then(con => {
    console.log('DB connection successful!');
}
);

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

