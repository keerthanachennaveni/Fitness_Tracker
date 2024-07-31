

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const WorkoutMinutesGraph = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/foodworkouts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;

        const workoutMinutesByDate = data.reduce((acc, item) => {
          const date = new Date(item.date).toLocaleDateString('en-US');
          acc[date] = (acc[date] || 0) + item.duration;
          return acc;
        }, {});

        const labels = Object.keys(workoutMinutesByDate);
        const dataValues = Object.values(workoutMinutesByDate);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Workout Minutes',
              data: dataValues,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h3>Workout Minutes by Day</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default WorkoutMinutesGraph;
