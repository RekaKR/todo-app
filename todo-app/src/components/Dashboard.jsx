import React, { useState } from 'react';
import '../style/app.css';
import TextInpBut from './TextInpBut.jsx';

function Dashboard() {
  const [name, setName] = useState("Untilted dashboard");

  return (
    <div className="dashboard">
      <input type="text" className="dashboard-name" placeholder={name} onChange={(event) => setName(event.target.placeholder)} />
      <TextInpBut />
    </div>
  );
}

export default Dashboard;