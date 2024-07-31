

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Log.css';

axios.defaults.baseURL = 'http://localhost:5000';

function Log() {
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState('');
  const [age, setAge] = useState('');
  const [mealCalories, setMealCalories] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const log = { email, exerciseName, duration, age, mealCalories, date };
      const response = await axios.post('/api/log/add', log);
      console.log('Log saved successfully:', response.data);
      alert('Log saved successfully');
      navigate('/progress');
    } catch (error) {
      console.error('Error saving log:', error);
      alert('Error saving log. Please try again.');
    }
  };

  return (
    <div className="log-container">
      <div className="log-box">
        <h2 className="log-heading">Workouts and Food Intake</h2>
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Meal Calories"
          value={mealCalories}
          onChange={(e) => setMealCalories(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button onClick={handleSubmit} className="blue">Log my details</button>
      </div>
    </div>
  );
}

export default Log;



