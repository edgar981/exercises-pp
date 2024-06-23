const fs = require('fs');

const mesocycles = JSON.parse(fs.readFileSync(`${__dirname}/../data/mesocycles.json`));

exports.checkID = (req, res, next, val) => {
    if (req.params.id * 1 > mesocycles.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.weeksDuration){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or weeks duration'
        })
    }
    next();
}

exports.getAllMesocycles = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: mesocycles.length,
        data: {
            mesocycles
        }
    });
}

exports.getMesocycle = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
}

exports.createMesocycle = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
}

exports.updateMesocycle = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
}

exports.deleteMesocycle = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: null
    });
}