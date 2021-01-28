import { useState } from 'react';
import Cards from './Cards.jsx';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, <Cards key={uuidv4()} />]);
  };

  return (
    <div className='dashboard newItem'>
      <div>
        <input
          type='text'
          className='dashboard-name'
          placeholder='Untitled dashboard'
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