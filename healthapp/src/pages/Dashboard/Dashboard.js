import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="calorie-wheel">
        <h2>Calorie Wheel</h2>
        <div className="circle"></div>
        <span>1,750 left</span>
      </div>
      <div className="sleep-score">
        <h2>Sleep Score</h2>
        <div className="bar"></div>
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
