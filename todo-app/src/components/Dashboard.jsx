import React, { useState } from 'react';
import '../style/app.css';
import TextInpBut from './TextInpBut.jsx';

function Dashboard() {
  const [name, setName] = useState("");

  return (
    <div className="dashboard">
      <input type="text" className="dashboard-name" value={name} placeholder="Untilted dashboard" onChange={(event) => setName(event.target.value)} />
      <TextInpBut />
    </div>
  );
}

export default Dashboard;