const express = require('express');
const mesocycleController = require('./../controllers/mesocycleController');

const router = express.Router();

router.param('id', mesocycleController.checkID);

router
    .route('/')
    .get(mesocycleController.getAllMesocycles)
    .post(mesocycleController.createMesocycle); //Checkbody middleware?

router
    .route('/:id')
    .get(mesocycleController.getMesocycle)
    .patch(mesocycleController.updateMesocycle)
    .delete(mesocycleController.deleteMesocycle);

module.exports = router;