import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => [...prevData, newData]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="app">
      <h1>Vehicle Dashboard</h1>
      <Dashboard data={data} />
    </div>
  );
};

export default App;
