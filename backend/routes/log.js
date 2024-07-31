
const express = require('express');
const router = express.Router();
const Log = require('../models/Log'); // Assuming you have a Log model defined

// Middleware to parse JSON bodies
router.use(express.json());
// Handle logging details
router.post('/add', async (req, res) => {
    try {
        const logDetails = req.body;
        const { email } = logDetails;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        console.log("Log details being saved:", logDetails);

        const caloriesBurned = calculateCaloriesBurned(logDetails);
        logDetails.caloriesBurned = caloriesBurned;

        // Create a new Log document using Mongoose
        const newLog = new Log(logDetails);
        await newLog.save();
        console.log("saved data ",newLog)
        res.json({ message: 'Log details saved successfully', caloriesBurned });
    } catch (error) {
        console.error('Error saving log:', error);
        res.status(500).json({ error: 'Error saving log' });
    }
});
// Handle fetching logs for a specific user
router.get('/logs', async (req, res) => {
    try {
        const email = req.query.email;
        console.log("Email received:", email);
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const userLogs = await Log.find({ email });
        console.log("Logs fetched from database:", userLogs);
        res.json(userLogs);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ error: 'Error fetching logs' });
    }
});
// Function to calculate calories burned
function calculateCaloriesBurned(logDetails) {
    const { duration, age, mealCalories } = logDetails;
    const baseCalories = 100; // Example base calories burned per minute
    const ageFactor = 0.2; // Example age factor for calorie calculation
    const mealCaloriesFactor = 0.5; // Example meal calories impact on burn rate

    let caloriesBurned = baseCalories * duration;
    caloriesBurned -= age * ageFactor;
    caloriesBurned += mealCalories * mealCaloriesFactor;

    return caloriesBurned;
}
module.exports = router;
