import React from 'react';
import './ExerciseData.css'; 
import { Button } from 'react-bootstrap';

function ExerciseData() {
  return (
    <div className="exercise-data">
      <div className="exercise-item">
        <h2>Your Movement</h2>
        <div className="graph-placeholder">Graph here</div>
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