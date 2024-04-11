import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Button from 'react-bootstrap/Button';
import './HealthData.css'; 

function HealthData() {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const heartRates = [
    60, 58, 57, 56, 58, 62, 65, 70, 80, 85, 90, 95, 110, 100, 120, 90, 78, 75, 72, 70, 68, 65, 63, 62
  ];
  const stressLevels = heartRates.map(rate => rate > 80 ? rate : null);

  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRates,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'BPM'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time of Day'
        }
      }
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      }
    },
    maintainAspectRatio: false, 
  };

  const stressData = {
    labels: hours,
    datasets: [
      {
        label: 'High Stress Zones',
        data: stressLevels,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      }
    ]
  };

  const stressOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Heart Rate (bpm)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time of Day'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="health-data">
      <div className="health-item">
        <h2>Heart Rate</h2>
        <div className="graph-container">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="health-item">
        <h2>High Stress Zones</h2>
        <div className="graph-container">
          <Bar data={stressData} options={stressOptions} />
        </div>
      </div>
      <div className="health-item sleep">
        <h2>Sleep</h2>
        <div className="graph-placeholder">Zzz...</div>
        <p>You've met 0% of your sleep goal</p>
        <div className="button-container">
          <Button variant="light" className='add-item' onClick={() => window.location.href = '/additem'}>Log Sleep</Button>
        </div>
      </div>
    </div>
  );
}

export default HealthData;