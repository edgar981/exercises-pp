const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    weight: {
        type: String,
        required: [true, 'Must specify the weight']
    },
    reps: {
        type: Number,
        required: [true, 'Must specify the number of reps']
    },
    note: {
        type: String,
        trim: true,
    }
});

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have an exercise name'],
        trim: true,
    },
    sets: {
        type: setSchema,
    }
});

const dayWorkoutSchema = new mongoose.Schema({
    day: {
        type: String,
        required: [true, 'Must have a label day'],
        trim: true,
    },
    exercises: {
        type: [exerciseSchema],
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: 'Must have at least one exercise'
        }
    }
});

const mesocycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A mesocycle must have a name'],
        trim: true,
    },
    weeksDuration: {
        type: Number,
        required: [true, 'A mesocycle must have a duration']
    },
    weekWorkout: {
        type: [dayWorkoutSchema],
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: 'Must have at least one day workout'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Mesocycle = mongoose.model('Mesocycle', mesocycleSchema);

module.exports = Mesocycle;