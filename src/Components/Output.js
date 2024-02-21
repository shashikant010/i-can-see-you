import React,{useState} from 'react'

export default function Output(props) {
    
  let guesses=[{'1':'one','2':'two' }];

  const [guess,setguess]=useState("guessing")
  return (
    <div>
       <div className="output">
    <h2>You are drawing </h2>
    <div className="answer">
        {props.i}
    </div>
  </div>
    </div>
  )
}
