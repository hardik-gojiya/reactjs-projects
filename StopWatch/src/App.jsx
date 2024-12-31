import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStartClick() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current)
    // Update the current time every 10ms.
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondPass = 0; 
  if(startTime != null && now!= null){
    secondPass = (now - startTime ) / 1000;
  }

  function handleStopClick() {
    clearInterval(intervalRef.current)
  }

  return (
    <>
      <h1>Time Passed : {secondPass} </h1>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </>
  );
}

export default App;
