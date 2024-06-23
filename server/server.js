const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongoose.connect(DB).then(() => {
    console.log('DB connection succesfull!');
});

const dayWorkoutSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    exercises: [ {
        name: {
            type: String,
            required: true
        },
        sets: {
            weight: String,
            reps: Number,
            note: String,
        }
    } ]
});

const mesocycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A mesocycle must have a name']
    },
    weeksDuration: {
        type: Number,
        required: [true, 'A mesocycle must have a duration']
    },
    weekWorkout: [dayWorkoutSchema],
});

const Mesocycle = mongoose.model('Mesocycle', mesocycleSchema);

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
})