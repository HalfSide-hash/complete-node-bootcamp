const fs = require('fs');
const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  //const newTour = new Tour({}); another way to define it basically
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data',
    });
  }
};

exports.updateTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Totally Updated fr>',
    },
  });
};

exports.deleteTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
