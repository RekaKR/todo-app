import React, { useState } from 'react';
import '../style/app.css';
import TextInpBut from './TextInpBut.jsx';

function Dashboard() {
  const [names, setNames] = useState("");
  const listNameV = localStorage.getItem('listName');

  return (
    <div className="dashboard">
      <input type="text" className="dashboard-name" value={listNameV} placeholder="Untilted dashboard" onChange={(event) => { setNames(event.target.value); localStorage.setItem('listName', event.target.value) }} />
      <TextInpBut />
    </div>
  );
}

export default Dashboard;