import React, { useState } from 'react';
import '../style/app.css';

function TextInpBut() {
  let [arr, setArr] = useState(["Réka"])
  //  const newTextArea = React.creatElement('div', { className: "text-area" }, "Ablabla");
  let newArr = [];

  return (
    <div className="text-inp-but">
      <button>Add</button>
      <input type="text" name="card" className="card-text" onChange={(event) => setArr(event.target.value)} />
      {arr}
    </div>
  )
};

export default TextInpBut;