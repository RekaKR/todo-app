import React from 'react';

function Cards() {
  const showDesc = (e) => {
    e.target.parentElement.parentElement.children[1].classList.toggle(
      'hideDesc'
    );
  };

  const hideCard = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  return (
    <div className='text-inp-but newItem'>
      <div className='cardTitleHolder'>
        <input className='cardTitle' type='text' placeholder='Name me!' />
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
        <div className='cardTrans'>
          <textarea className='inputClass' name='' id=''></textarea>
        </div>
      </div>
    </div>
  );
}

export default Cards;