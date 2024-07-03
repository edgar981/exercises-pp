const express = require('express');
const mesocycleController = require('./../controllers/mesocycleController');

const router = express.Router();

// router.param('id', mesocycleController.checkID);

router
    .route('/')
    .get(mesocycleController.getAllMesocycles)
    .post(mesocycleController.createMesocycle); 

router
    .route('/:id')
    .get(mesocycleController.getMesocycle)
    .patch(mesocycleController.updateMesocycle)
    .delete(mesocycleController.deleteMesocycle);

router
    .route('/:id/exercises/:dayId/:dayWorkoutId')
    .patch(mesocycleController.updateDaysExercise);

router
    .route('/:id/exercises/:dayId/:dayWorkoutId/sets/')
    .patch(mesocycleController.updateSetsInfo);    

module.exports = router;