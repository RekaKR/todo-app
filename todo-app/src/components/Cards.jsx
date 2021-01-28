<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../style/app.css';
<<<<<<< HEAD
=======
>>>>>>> Marci
// const Text = (desc) => (
//   <div className='descTile'>
//     <textarea className='textArea' defaultValue='+' name='' id=''>
//       {desc}
//     </textarea>
//   </div>
// );
function Cards() {
  // const [showText, setShowText] = useState(false);
  // const showDesc = () => setShowText(true);
  // const hideDesc = () => setShowText(false);
  // const listNameV = localStorage.getItem('listName');
  // const [names, setNames] = useState('');
  // console.log(key);
=======

const Text = () => (
  <div className='descTile'>
    <textarea className='textArea' defaultValue='Írj belém!' name='' id='' ></textarea>
  </div>
);
function Cards(key) {
  const [showText, setShowText] = useState(false);
  const showDesc = () => setShowText(true);
  const hideDesc = () => setShowText(false);
  /*
    useEffect((key) => {
      if (showText === false) {
        setShowText(false)
      }
    }, [showText]);
  */
>>>>>>> 471a85baf5c793b6cfd4d06898cb66503067b247
  // const [cards, setCards] = useState([]);
  const showDesc = (e) => {
    console.log(e.target.parentElement.parentElement.children[1]);
    e.target.parentElement.parentElement.children[1].classList.toggle(
      'hideDesc'
    );
  };
  const hideCard = (e) => {
    e.target.parentElement.parentElement.classList.toggle('killCard');
  };
  return (
<<<<<<< HEAD
    <div className='text-inp-but'>
<<<<<<< HEAD
=======
    <div className='text-inp-but newItem'>
>>>>>>> Marci
      <div className='cardTitleHolder'>
        <input className='cardTitle' type='text' placeholder='name me!' />
        <button onClick={hideCard} style={{ zIndex: 9999 }}>
          x
        </button>
      </div>
      <div className='descHolder'>
        <label class='form-switch'>
          <input type='checkbox' onChange={showDesc} />
          <i></i>
          Description On/Off
        </label>
        <div className='cardTrans cardDesc '>
          <textarea className='inputClass' name='' id=''></textarea>
        </div>
      </div>
      {/* <button onClick={showDesc}>Show Desc</button>
      <button onClick={hideDesc}>Hide Desc</button> */}
      {/* <div className='cardDesc'>
        <textarea
          className='textArea'
          defaultValue='desc'
          name=''
          id=''
        ></textarea>
      </div> */}
=======
      <input type='text' placeholder='name me!' />
      <button>Copy</button>
      <button onClick={showDesc}>Show Desc</button>
      <button onClick={hideDesc}>Hide Desc</button>
      {showText ? <Text /> : null}
>>>>>>> 471a85baf5c793b6cfd4d06898cb66503067b247
    </div>
  );
}

export default Cards;
