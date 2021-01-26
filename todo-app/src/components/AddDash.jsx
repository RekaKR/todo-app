import React, { useState } from 'react';
import '../style/app.css';
import Dashboard from './Dashboard';

function AddDash() {
  const [dashes, setDashes] = useState([]);

  return (
    <div className="add-dash">
      <button onClick={() => setDashes([...dashes, dashes.length])}>Add dash</button>
      {dashes.map(dash => { return <Dashboard /> })}
    </div>
  );
}

export default AddDash;