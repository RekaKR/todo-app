import React, { useState } from 'react';
import '../style/app.css';

function Cards() {
  // const [cards, setCards] = useState([]);
  const showDesc = (e) => {
    e.target.style.display = 'block';
  };
  return (
    <div className='text-inp-but'>
      <input type='text' placeholder='name me!' />
      <button>Copy</button>
      <button>Delete</button>
      <div className='cardDesc' onClick={showDesc}>
        <textarea name='' id=''></textarea>
      </div>
    </div>
  );
}

export default Cards;
