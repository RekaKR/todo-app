import React, { useState } from 'react';
import '../style/app.css';
import TextInpBut from './TextInpBut.jsx';

function Dashboard() {
  const [names, setNames] = useState("");

  return (
    <div className="dashboard">
      <input type="text" className="dashboard-name" value={names} placeholder="Untilted dashboard" onChange={(event) => setNames(event.target.value)} />
      <TextInpBut />
    </div>
  );
}

export default Dashboard;