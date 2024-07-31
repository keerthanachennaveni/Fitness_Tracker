// routes/userDataRoutes.js

const express = require('express');
const Workout = require('../models/Workout');
const FoodIntake = require('../models/FoodIntake');
const Measurement = require('../models/Measurement');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Route to fetch user-specific workouts
router.get('/workouts', authenticate, async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to fetch user-specific food intakes
router.get('/foodintakes', authenticate, async (req, res) => {
  try {
    const foodIntakes = await FoodIntake.find({ userId: req.user.id });
    res.json(foodIntakes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to fetch user-specific measurements
router.get('/measurements', authenticate, async (req, res) => {
  try {
    const measurements = await Measurement.find({ userId: req.user.id });
    res.json(measurements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
