import React, { useState } from 'react';
import '../style/app.css';
const Text = () => (
  <div className='descTile'>
    <textarea className='textArea' defaultValue='desc' name='' id=''></textarea>
  </div>
);
function Cards(key) {
  const [showText, setShowText] = useState(false);
  const showDesc = () => setShowText(true);
  const hideDesc = () => setShowText(false);
  console.log(key);
  // const [cards, setCards] = useState([]);

  return (
    <div className='text-inp-but'>
      <input type='text' placeholder='name me!' />
      <button>Copy</button>
      <button onClick={showDesc}>Show Desc</button>
      <button onClick={hideDesc}>Hide Desc</button>
      {showText ? <Text /> : null}
      {/* <div className='cardDesc'>
        <textarea
          className='textArea'
          defaultValue='desc'
          name=''
          id=''
        ></textarea>
      </div> */}
    </div>
  );
}

export default Cards;
