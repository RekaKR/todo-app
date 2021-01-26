import React, { useState } from 'react';
import '../style/app.css';

function TextInpBut() {
  const [cards, setCards] = useState([]);

  return (
    <div className="text-inp-but">
      <button onClick={() => setCards([...cards, cards.length])}>Add</button>
      {/*{cards.map(card => { return <input type="text" name="card" className="card-text" /> })}*/}
      {cards.map(card => { return <textarea className="card-text" ></textarea> })}
    </div>
  )
};

export default TextInpBut;