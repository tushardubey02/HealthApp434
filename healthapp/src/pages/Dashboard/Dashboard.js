import React from 'react';
import './Dashboard.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Dashboard() {
  const sleepValue = 10 ; // Example sleep value, you can replace it with your own value

  const barWidth = sleepValue * 20; // Adjust the width of the bar based on the sleep value
  const barColor = sleepValue >= 8 ? 'lawngreen' : 'orange'; // Set the color based on the sleep value
  if (sleepValue < 6) {
    barColor = 'red';
  } // Change the color to red if the sleep value is less than 6
  
  return (
    <div className="dashboard">
      <div className="calorie-wheel">
        <h2>Calorie Wheel</h2>
        <div className="circle"></div>
        <span>1,750 left</span>
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
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Dashboard;
