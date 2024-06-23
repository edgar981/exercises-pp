const fs = require('fs');

const exercises = JSON.parse(fs.readFileSync('/Users/edgarnavarro/Documents/pp/server/data/exercises.json'));

exports.getAllExercises = (req, res) => {
    res.status(200).json({ 
        status: 'success',
        results: exercises.length,
        data: {
            exercises
        }
    });
}

exports.getExercise = (req, res) => {
    console.log(req.params)
    const id = req.params.id;

    const exercise = exercises.find(e => e.id === id);

    if (!exercise) {
        return res.status(404).json({ 
            status: 'fail',
            message: 'Invalid ID',
        });
    }
    res.status(200).json({ 
        status: 'success',
        data: {
            exercise
        },
    });
}