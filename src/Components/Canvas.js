import React, { useState } from 'react';
import Boxes from './Boxes';// Import the CSS file
import Output from './Output';

export default function Canvas() {
  const rows = 784; // number of rows
  const [seei,setseei]=useState(0)// number of columns

  const handleboxclick = (id) => {
    setseei(id);
  };

  const boxes = Array.from({length: rows}, (_, i) => 
    <Boxes key={i} id={i} onBoxClick={handleboxclick} />
  );
  
  
 
  return (
    <>
    <div className="heading">
      <h2>Draw Here</h2>
    </div>
    <section className="container">
        {boxes.map((box, i) => 
          <div key={i} className="row">
            {box}
          </div>
        )}
     
    </section>
     <Output i={seei}/>
    </>
  );
}
