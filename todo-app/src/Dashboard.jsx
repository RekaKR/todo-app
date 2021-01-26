import React, { useState } from 'react';
import './app.css';
import TextInpBut from './TextInpBut.jsx';

function Dashboard() {
  const [name, setName] = useState("Untilted dashboard");

  return (
    <div className="dashboard">
      <input type="text" className="dashboard-name" placeholder={name} />
      <TextInpBut />
    </div>
  );
}

export default Dashboard;