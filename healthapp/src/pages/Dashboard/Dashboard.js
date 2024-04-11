import React from 'react';
import './Dashboard.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Doughnut } from 'react-chartjs-2';

import 'chart.js/auto';


function Dashboard() {
  const sleepValue = 7 ; // Example sleep value, you can replace it with your own value
  const barWidth = sleepValue * 20; // Adjust the width of the bar based on the sleep value
  const barColor = sleepValue >= 8 ? 'lawngreen' : 'orange'; // Set the color based on the sleep value
  if (sleepValue < 6) {
    barColor = 'red';
  } // Change the color to red if the sleep value is less than 6
  const totalCalories = 2000;
  const caloriesConsumed = 1250;
  const caloriesLeft = totalCalories - caloriesConsumed;
  const data = {
    labels: ['Calories Consumed', 'Calories Left'],
    datasets: [
      {
        label: 'Calorie Intake',
        data: [caloriesConsumed, caloriesLeft],
        backgroundColor: ['green', 'grey'],
        borderColor: ['green', 'grey'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false, 
      },
      datalabels: {
        display: true,
        color: 'white',
        cutout: '40%'
      },
    },
  };


  const moveData = 80; 
  const moveGoal = 100;
  const exerciseData = 90;
  const exerciseGoal = 100
  const standData = 24;
  const standGoal = 24;

  const movementData = {
    labels: ['Move', 'Exercise', 'Stand'],
    datasets: [
      {
        data: [moveData, moveGoal - moveData],
        backgroundColor: ['#ff3b30', 'transparent'],
        borderWidth: 0,
        cutout: '40%',
      },
      {
        data: [exerciseData, exerciseGoal - exerciseData],
        backgroundColor: ['#ffcc00', 'transparent'],
        borderWidth: 0,
        cutout: '40%',
      },
      {
        data: [standData, standGoal - standData],
        backgroundColor: ['#34c759', 'transparent'],
        borderWidth: 0,
        cutout: '40%',
      },
    ],
  };

  const movementOptions = {
    rotation: 0, // Rotate the chart to start from the top
    circumference: 360, // Full circle
    cutout: '20%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

// [8:13 PM]

  return (
    <div className="dashboard">
      <div className="calorie-wheel">
        <h2>Calorie Wheel</h2>
        <Doughnut data={data} options={options} />
        <div className="calorie-info">
          <span className="calories-consumed">{caloriesLeft} cal</span>
          <span className="calories-left">/ {totalCalories} cal</span>
        </div>
      </div>
      <div className="sleep-score">
        <h2 className='lg'>Sleep Score</h2>
        <svg class="sleepbar" width="30" height="60%">
          <rect width="30" height={barWidth} fill={barColor} rx="10" ry="10" />
        </svg>
      </div>
      <div className="suggestions">
        <h2>Suggestions</h2>
        <p>Optimize your wellness with every charge! ...</p>
      </div>
      <div className="movement">
        <h2>Your Movement</h2>
        <div className="ring-container">
          <Doughnut data={movementData} options={movementOptions} />
        </div>
        <div className="activity-stats">
          <div className="stat-item">
            <span className="stat-label">Move Time: &nbsp;</span>
            <span className="stat-value">{moveData} / {moveGoal} steps</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Exercise: </span>
            <span className="stat-value">{exerciseData} / {exerciseGoal} cals</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Stand Time: </span>
            <span className="stat-value">{standData} / {standGoal} hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Dashboard;