const express = require('express');
const mesocycleController = require('./../controllers/mesocycleController');

const router = express.Router();

router.param('id', mesocycleController.checkID);

router
    .route('/')
    .get(mesocycleController.getAllMesocycles)
    .post(mesocycleController.checkBody, mesocycleController.createMesocycle); 

router
    .route('/:id')
    .get(mesocycleController.getMesocycle)
    .put(mesocycleController.updateMesocycle)
    .delete(mesocycleController.deleteMesocycle);

module.exports = router;