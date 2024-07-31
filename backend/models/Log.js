
// Assuming using Mongoose for MongoDB schema
const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    email: String, // Include email field to associate with the user
    exerciseName: String,
    duration: Number,
    age: Number,
    mealCalories: Number,
    caloriesBurned: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', LogSchema);