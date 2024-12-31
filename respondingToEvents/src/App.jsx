import { useState } from "react";
import { sculptureList } from "./assets/Data";
import "./App.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false)
  const hasNext = index < sculptureList.length - 1;

  function handleNextclick() {
    if (hasNext) {
      setIndex(index + 1);
      setShowDetails(!showDetails)
    } else {
      setIndex(0);
    }
  }

  function handleShowClick() {
    setShowDetails(!showDetails)
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextclick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>   
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowClick}>{showDetails? "Hide" : "Show"} details</button>
      {showDetails && <p>{sculpture.description}</p>}<br/>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
