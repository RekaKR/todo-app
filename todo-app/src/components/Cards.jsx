import React, { useState } from 'react';
import '../style/app.css';

function Cards() {
  const [cards, setCards] = useState([]);

  return (
    <div className='text-inp-but'>
      {/* <button onClick={() => setCards([...cards, cards.length])}>Add</button>
      {cards.map(card => { return <textarea className="card-text" ></textarea> })} */}
      im a new card
    </div>
  );
}

export default Cards;
