import React from 'react';
import './app.css';

function TextInpBut() {

  return (
    <div className="text-inp-but">
      <button>Add</button>
      <input type="text" name="card" className="card-text" />
    </div>
  )
};

export default TextInpBut;