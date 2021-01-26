import React from 'react';
import '../style/app.css';
import Dashboard from './Dashboard';
import AddDash from './AddDash.jsx';

function App() {
  return (
    <div className="app">
      <Dashboard />
      <AddDash />
    </div>
  );
}

export default App;
