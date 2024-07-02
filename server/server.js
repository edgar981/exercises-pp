const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongoose.connect(DB).then(() => {
    console.log('DB connection succesfull!');
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
})