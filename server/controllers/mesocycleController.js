const Mesocycle = require('./../models/mesocycleModel');

// const mesocycles = JSON.parse(fs.readFileSync(`${__dirname}/../data/mesocycles.json`));

exports.getAllMesocycles = async (req, res) => {
    try {
        const mesocycles = await Mesocycle.find();

        // if(req.query.sort) {
        //     const sortBy = req.query.sort.split(',').join(' ');
        //     query = query.sort(sortBy);
        // } 
        // else {
        //     query = query.sort('-createdAt');
        // }

        res.status(200).json({
            status: 'success',
            results: mesocycles.length,
            data: {
                mesocycles
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
}

exports.getMesocycle = async (req, res) => {
    try {
        const mesocycle = await Mesocycle.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                mesocycle
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
}

exports.createMesocycle = async (req, res) => {
    try {
        const newMesocycle = await Mesocycle.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                mesocycle: newMesocycle
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        })
    }
}

exports.updateMesocycle = async (req, res) => {
    try{
        const mesocycle = await Mesocycle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!mesocycle) {
            return res.status(404).send({ message: 'Mesocycle not found' });
        }

        res.status(200).json({
            status: 'success',
            data: {
                mesocycle
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
}

exports.deleteMesocycle = async (req, res) => {
    try {
        await Mesocycle.findByIdAndDelete(req.params.id);
    
        res.status(204).json({
            status: 'success',
            message: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

exports.updateDaysExercise = async (req, res) => {
    try {
        const exercise = await Mesocycle.findByIdAndUpdate({
                _id: req.params.id,
        },
        {
            $set: {
                'weekWorkout.$[dayElem].exercises.$[exerciseElem].name': req.body.name
            }
        },
        {
            arrayFilters: [
                { 'dayElem._id': req.params.dayId },
                { 'exerciseElem._id': req.params.dayWorkoutId }
            ],
            new: true,
            runValidators: true,
        });

        if (!exercise) {
            return res.status(404).send({ message: 'Exercise not found' });
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

exports.updateSetsInfo = async (req, res) => {
    try {
        const result = await Mesocycle.findByIdAndUpdate({
            _id: req.params.id,
        },
        {
            $set: {
                'weekWorkout.$[dayElem].exercises.$[exerciseElem].sets': req.body
            }
        },
        {
            arrayFilters: [
                { 'dayElem._id': req.params.dayId },
                { 'exerciseElem._id': req.params.dayWorkoutId },
            ],
            new: true,
            runValidators: true,
        });

        res.status(204).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}