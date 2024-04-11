import React from 'react';
import './HealthData.css'; 
import Button from 'react-bootstrap/Button';

function HealthData() {
  return (
    <div className="health-data">
      <div className="health-item">
        <h2>Heart Rate</h2>
        <div className="graph-placeholder">Graph here</div>
      </div>
      <div className="health-item">
        <h2>High Stress Zones</h2>
        <div className="graph-placeholder">Graph here</div>
      </div>
      <div className="health-item sleep">
        <h2>Sleep</h2>
        <div className="graph-placeholder">Zzz...</div>
        <p>You've met 0% of your sleep goal</p>
        <div className="button-container">
          <Button variant="light" className='add-item' onClick={() => window.location.href = '/additem'}>Track Sleep</Button>
        </div>
      </div>
    </div>
  );
}

export default HealthData;