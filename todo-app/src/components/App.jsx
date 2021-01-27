import React, { useState } from 'react';
import '../style/app.css';
import Dashboard from './Dashboard';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [dash, setDash] = useState([]);
  const addDash = () => {
    console.log('sdf');
    setDash([...dash, <Dashboard key={uuidv4()} />]);
  };
  const removeItem = (key) => {
    setDash(dash.map((item) => (item?.key === key ? undefined : item)));
  };
  return (
    <>
      <input type='button' onClick={addDash} value='Add dashboard' />
      <div className='dashBoardContainer'>
        {dash.map((singleDashboard) => {
          console.log(singleDashboard);
          if (!singleDashboard) return undefined;
          return (
            <div>
              {singleDashboard}
              <button
                className='deleteDashBtn'
                onClick={() => removeItem(singleDashboard.key)}
              >
                Delete dashboard
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
