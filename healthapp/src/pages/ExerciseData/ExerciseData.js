import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaSwimmer, FaHiking, FaBicycle, FaDumbbell } from 'react-icons/fa';
import { FaDrumstickBite, FaBreadSlice, FaPills, FaLeaf, FaBalanceScale } from 'react-icons/fa';
import './ExerciseData.css'; 

function ExerciseData() {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const caloriesBurned = [200, 300, 150, 400, 250, 350, 300]; 
  const proteinGoal = { current: 120, goal: 150 }; // in grams
  const carbsGoal = { current: 200, goal: 250 };
  const vitaminsGoal = { current: 5, goal: 10 }; // count of vitamin pills perhaps?
  const fiberGoal = { current: 30, goal: 35 }; // in grams
  const fatGoal = { current: 50, goal: 70 }; // in grams

  const calculateWidth = (current, goal) => (current / goal) * 100;

  const getIconStyle = () => ({
    position: 'absolute',
    left: '50%', // Center the icon
    transform: 'translateX(-50%)', // Adjust horizontally
    zIndex: 2,
  });

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
        display: false, 
      }
    },
    maintainAspectRatio: false, 
  };


  return (
    <div className="exercise-data">
      <div className="exercise-item">
        <h2>Your Movement</h2>
        <div className="graph-container">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="exercise-item activities">
        <h2>Your Activities</h2>
        <div className="activity">
          <FaSwimmer className="icon" />
          <span>45 mins swim</span>
        </div>
        <div className="activity">
          <FaHiking className="icon" />
          <span>25 mins hike</span>
        </div>
        <div className="activity">
          <FaDumbbell className="icon" />
          <span>60 mins weightlifting</span>
        </div>
        <div className="activity">
          <FaBicycle className="icon" />
          <span>20 mins cycling</span>
        </div>
      </div>
      <div className="exercise-item macro-goals">
        <h2>Macro Goals</h2>

        {/* Protein Goal */}
        <div className="goal">
          <div className="goal-bar">
            <div className="goal-progress" style={{ width: `${calculateWidth(proteinGoal.current, proteinGoal.goal)}%` }}>
              <FaDrumstickBite className="icon goal-icon" style={getIconStyle()} />
            </div>
          </div>
        </div>
        
        {/* Carbs Goal */}
        <div className="goal">
          <div className="goal-bar">
            <div className="goal-progress" style={{ width: `${calculateWidth(carbsGoal.current, carbsGoal.goal)}%` }}>
              <FaBreadSlice className="icon goal-icon" style={getIconStyle()} />
            </div>
          </div>
        </div>
        
        {/* Vitamins Goal */}
        <div className="goal">
          <div className="goal-bar">
            <div className="goal-progress" style={{ width: `${calculateWidth(vitaminsGoal.current, vitaminsGoal.goal)}%` }}>
              <FaPills className="icon goal-icon" style={getIconStyle()} />
            </div>
          </div>
        </div>
        
        {/* Fiber Goal */}
        <div className="goal">
          <div className="goal-bar">
            <div className="goal-progress" style={{ width: `${calculateWidth(fiberGoal.current, fiberGoal.goal)}%` }}>
              <FaLeaf className="icon goal-icon" style={getIconStyle()} />
            </div>
          </div>
        </div>
        
        {/* Fat Goal */}
        <div className="goal">
          <div className="goal-bar">
            <div className="goal-progress" style={{ width: `${calculateWidth(fatGoal.current, fatGoal.goal)}%` }}>
              <FaBalanceScale className="icon goal-icon" style={getIconStyle()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseData;