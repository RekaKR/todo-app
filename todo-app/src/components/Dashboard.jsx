import React, { useState } from 'react';
import '../style/app.css';
import Cards from './Cards.jsx';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [cards, setCards] = useState([]);
  const listNameV = localStorage.getItem('listName');
  const addCard = () => {
    setCards([...cards, <Cards key={uuidv4()} />]);
  };
  const deleteCard = (key) => {
    setCards(cards.map((item) => (item?.key === key ? undefined : item)));
  };
  console.log(cards);
  return (
    <div className='dashboard'>
      <div>
        <input
          type='text'
          className='dashboard-name'
          // value={listNameV}
          placeholder='Untilted dashboard'
        // onChange={(event) => {
        //   setNames(event.target.value);
        //   localStorage.setItem('listName', event.target.value);
        // }}
        />
        <button onClick={addCard}>add card</button>
        <div>{cards}</div>
      </div>
    </div>
  );
}

export default Dashboard;
