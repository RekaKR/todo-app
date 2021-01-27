import React, { useState } from 'react';
import '../style/app.css';
import Dashboard from './Dashboard';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [dash, setDash] = useState([]);
  const addDash = () => {
    setDash([...dash, <Dashboard key={uuidv4()} />]);
  };
  console.log(dash);
  const removeItem = (key) => {
    setDash(dash.filter((item) => item.key !== key));
  };
  return [
    <input type='button' onClick={addDash} value='Add dashboard' />,
    <div className='dashBoardContainer'>
      {dash.map((singleDashboard) => (
        <>
          {singleDashboard}
          <button
            className='deleteDashBtn'
            onClick={() => removeItem(singleDashboard.key)}
          >
            Delete dashboard
          </button>
        </>
      ))}
    </div>,
  ];
}

export default App;
