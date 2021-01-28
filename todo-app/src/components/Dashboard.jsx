import React, { useState } from 'react';
import Cards from './Cards.jsx';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [cards, setCards] = useState([]);
  const listNameV = localStorage.getItem('listName');
  const addCard = () => {
    setCards([...cards, <Cards key={uuidv4()} />]);
  };

  console.log(cards);
  return (
    <div className='dashboard newItem'>
      <div>
        <input
          type='text'
          className='dashboard-name'
          // value={listNameV}
          placeholder='Untitled dashboard'
          // onChange={(event) => {
          //   setNames(event.target.value);
          //   localStorage.setItem('listName', event.target.value);
          // }}
        />
        <button className='addCardBtn' onClick={addCard}>
          +
        </button>
        <div>{cards}</div>
      </div>
    </div>
  );
}

export default Dashboard;
