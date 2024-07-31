


import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import './Progress.css'; // Assuming you will create a separate CSS file

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function Progress() {
    const [logs, setLogs] = useState([]);

    // Retrieve the logged-in user's email from local storage
    const email = localStorage.getItem('email');
    console.log("Email from local storage:", email);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            // Fetch logs for the specific user based on email
            const response = await axios.get('/api/log/logs', {
                params: { email },
            });
            setLogs(response.data);
            console.log("response data in p", response.data);
        } catch (error) {
            console.error('Error fetching progress data:', error);
        }
    };

    // Prepare data for charts
    const prepareChartData = () => {
        const dates = logs.map(log => log.date);
        const workoutDurations = logs.map(log => log.duration);
        const caloriesBurned = logs.map(log => log.caloriesBurned);

        return { dates, workoutDurations, caloriesBurned };
    };

    const { dates, workoutDurations, caloriesBurned } = prepareChartData();

    // Data for bar chart (Workout duration by date)
    const barData = {
        labels: dates,
        datasets: [
            {
                label: 'Workout Duration (minutes)',
                data: workoutDurations,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Data for doughnut chart (Calories burned by date)
    const doughnutData = {
        labels: dates,
        datasets: [
            {
                label: 'Calories Burned',
                data: caloriesBurned,
                backgroundColor: dates.map(
                    () =>
                        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                            Math.random() * 255
                        )}, ${Math.floor(Math.random() * 255)}, 0.6)`
                ),
            },
        ],
    };

    // Options for bar chart (scales for axes)
    const barOptions = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Date'
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 45
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Duration (minutes)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Workout Duration Over Time'
            }
        }
    };

    // Options for doughnut chart (customize chart elements)
    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Calories Burned Distribution'
            }
        },
        elements: {
            arc: {
                borderWidth: 1,
            },
        },
    };

    return (
        <div className="progress-container">
            <h2 className="progress-heading">Progress</h2>
            <div className="chart-container">
                <h3 className="chart-heading">Workout Duration Over Time</h3>
                <Bar data={barData} options={barOptions} />
            </div>
            <div className="chart-container">
                <h3 className="chart-heading">Calories Burned Distribution</h3>
                <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            
        </div>
    );
}

export default Progress;
