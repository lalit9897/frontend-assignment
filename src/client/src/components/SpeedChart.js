import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.1, 
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Time',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Speed (km/h)',
      },
    },
  },
};

const SpeedChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.time).toLocaleTimeString()),
    datasets: [
        {
          label: 'Speed (km/h)',
          data: data.map((d) => d.speed),
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          fill: false,
        },
    ],
  };

  return (
    <div>
      <h2>Speed Profile</h2>
      <Line data={chartData} options ={options}/>
    </div>
  );
};

export default SpeedChart;
