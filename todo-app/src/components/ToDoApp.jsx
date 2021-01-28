import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { v4 as uuidv4 } from 'uuid';

function ToDoApp() {
  const [dash, setDash] = useState([<Dashboard key={uuidv4()} />]);

  const addDash = () => {
    setDash([...dash, <Dashboard key={uuidv4()} />]);
  };

  const removeItem = (key) => {
    setDash(dash.map((item) => (item?.key === key ? undefined : item)));
  };

  const themeChange = () => {
    document.querySelector('#root').classList.toggle('themeChangeClr');
    document
      .querySelector('.themeChangeText')
      .classList.toggle('themeChangeTxtClr');
  };

  return (
    <div>
      <label
        id='themeChange'
        onChange={themeChange}
        checked
        className='form-switch'
      >
        <input type='checkbox' />
        <i></i>
        <p className='themeChangeText'>Night mode</p>
      </label>
      <div className='dashBoardContainer'>
        {dash.map((singleDashboard) => {
          if (!singleDashboard) return undefined;
          return (
            <div>
              {singleDashboard}
              <div className='deleteDashBtnContainer'>
                <button
                  className='deleteDashBtn'
                  onClick={() => removeItem(singleDashboard.key)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
        <div className='addDashBtn'>
          <input type='button' onClick={addDash} value='+ Add Dashboard ' />
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;