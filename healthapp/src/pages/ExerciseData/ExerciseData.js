import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ExerciseData.css'; 
import { Button } from 'react-bootstrap';

function ExerciseData() {

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const caloriesBurned = [200, 300, 150, 400, 250, 350, 300]; // Example values

  const data = {
    labels: weekDays,
    datasets: [
      {
        label: 'Calories Burned',
        data: caloriesBurned,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      }
    },
    maintainAspectRatio: false, // Important to set for responsive height
  };

  return (
    <div className="exercise-data">
      <div className="exercise-item">
        <h2>Your Movement</h2>
        {/* <div className="graph-placeholder">Graph here</div> */}
        <div className="graph-container">

          <Bar data={data} options={options} />

        </div>
        <div className="button-container">
          <Button variant="light" className='add-item' onClick={() => window.location.href = '/additem'}>Add Exercise +</Button>
        </div>
      </div>
      <div className="exercise-item">
        <h2>Your Activity</h2>
        
        <div className="graph-placeholder">Graph here</div>
      </div>
      <div className="exercise-item">
        <h2>Macro Goals</h2>
        
        <div className="graph-placeholder">Graph here</div>
      </div>
    </div>
  );
}

export default ExerciseData;