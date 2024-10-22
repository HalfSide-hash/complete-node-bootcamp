const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

//Create a checkBody middleWare
// Check if cbody contains the name and price oroperty
// If not, get mad

//router.param('id', tourController.checkID);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
