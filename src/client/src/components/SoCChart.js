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
        text: 'SOC %',
      },
    },
  },
};

const SoCChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'State of Charge (%)',
        data: data.map((d) => d.soc),
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>State of Charge Profile</h2>
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default SoCChart;
