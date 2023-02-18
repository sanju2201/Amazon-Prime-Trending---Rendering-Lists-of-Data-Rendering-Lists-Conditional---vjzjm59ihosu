import React, { Component, useState } from "react";
import '../styles/App.css';

const App = ({ slides }) => {
  const [currIdx, setIndex] = useState(0);

  return (
    <>
      <div>
        <h1 data-testid="title">{slides[currIdx].title}</h1>
        <p data-testid="text">{slides[currIdx].text}</p>
      </div>
      <button disabled={currIdx == 0} data-testid="button-prev" onClick={() => { setIndex(currIdx - 1) }}>Prev</button>
      <button disabled={currIdx == 0} data-testid="button-restart" onClick={() => { setIndex(0) }}>Restart</button>
      <button disabled={currIdx == 4} data-testid="button-next" onClick={() => { setIndex(currIdx + 1) }}>Next</button>
    </>
  )
}

export default App;

