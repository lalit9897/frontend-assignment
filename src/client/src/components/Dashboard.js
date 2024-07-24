import React from 'react';
import SoCChart from './SoCChart';
import SpeedChart from './SpeedChart';
import Map from './Map';

const Dashboard = ({ data }) => {
  const latestData = data[data.length - 1] || {};
  const progressBarStyle = {
    width: `${latestData.speed}%`,
  };
  const progressBarStyleSoc = {
    width: `${latestData.soc}%`,
  };
  return (
    <div className="dashboard">
      <div className="map-and-stats">
        <div className="map-container">
          {latestData.gps ? <Map gps={latestData.gps} /> : <p>GPS data not available</p>}
        </div>
        <div className="stats">
          <label>Current Speed</label>
          <div className="stat">
            <div className="stat-progress" style={progressBarStyle}>
              <div className="value">{latestData.speed || 0} km/h</div>
            </div>
          </div>
          <label>State of Charge</label>
          <div className="stat">
            <div className="stat-progress" style={progressBarStyleSoc}>
              <div className="value">{latestData.soc || 0} km/h</div>
            </div>
          </div>
          <div className="stat-item">
            <div >
              <label>Energy</label>
              <div >{latestData.energy || 0} kW</div>
            </div>
            <div>
              <label>Odometer</label>
              <div >{latestData.odo || 0} km</div>
            </div>
          </div>
        </div>
      </div>
      <div className="chart">
        <SpeedChart data={data} />
      </div>
      <div className="chart">
        <SoCChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
