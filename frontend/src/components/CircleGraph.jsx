

import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const CaloriesBurnedGraph = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/foodworkouts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;

        const caloriesBurnedByDate = data.reduce((acc, item) => {
          const date = new Date(item.date).toLocaleDateString('en-US');
          const caloriesBurned = calculateCaloriesBurned(item);
          acc[date] = (acc[date] || 0) + caloriesBurned;
          return acc;
        }, {});

        const labels = Object.keys(caloriesBurnedByDate);
        const dataValues = Object.values(caloriesBurnedByDate);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Calories Burned',
              data: dataValues,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateCaloriesBurned = (item) => {
    const MET_VALUES = {
      running: 9.8,
      walking: 3.8,
      cycling: 7.5,
    };

    const MET = MET_VALUES[item.workoutType.toLowerCase()] || 1;
    const weight = 70; // Replace with actual user weight
    return (MET * weight * (item.duration / 60));
  };

  return (
    <div className="chart-container">
      <h3>Calories Burned by Day</h3>
      <Doughnut data={chartData} />
    </div>
  );
};

export default CaloriesBurnedGraph;
