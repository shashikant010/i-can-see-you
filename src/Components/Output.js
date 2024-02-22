import React,{useState , useEffect} from 'react'

export default function Output(props) {

    const [OutArray, setOutArray] = useState(new Array(784).fill(0));
  
    useEffect(() => {
      let newArray = [...OutArray];
      newArray[props.i] = 255;
      setOutArray(newArray);
    }, [props.i]);
  
    const handleDone = () => {
      console.log(OutArray);
    };
  return (
    <div>
       <div className="output">
    <h2>You are drawing </h2>
    <div className="answer">
        {props.i
        }
    </div>
    <button className="done" onClick={handleDone}>
      Done
    </button>
  </div>
    </div>
  )
}
