import React, { useState } from 'react';

export default function Boxes(props) {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    if(color!=='green'){
    console.log("you are drawing on ",props.id)
    setColor('green');
    props.onBoxClick(props.id);
    }
  }



  return (
    <>
    <div className='boxes' onDragOver={handleClick} style={{backgroundColor: color}}>
    </div>
    {/* <div className="output">
    <h2>You are drawing </h2>
    <div className="answer">
        {guess}
    </div>
  </div> */}
  </>
  );
}
