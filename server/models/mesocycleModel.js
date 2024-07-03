const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    weight: {
        type: String,
        default: '0',
    },
    reps: {
        type: Number,
        default: 0,
    },
    note: {
        type: String,
        trim: true,
    }
}); //Maybe needed the  { _id: false }

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have an exercise name'],
        trim: true,
        maxlength: [30, 'An exercise must have less or equal than 30 characters'],
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
        maxlength: [10, 'A day must have less or equal than 10 characters'],
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
        maxlength: [30, 'A mesocycle must have less or equal than 30 characters'],
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