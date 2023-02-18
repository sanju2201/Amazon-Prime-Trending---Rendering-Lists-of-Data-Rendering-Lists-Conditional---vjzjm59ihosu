import React, { Component, useState } from "react";
import '../styles/App.css';

let slideNum = 1
const App = ({ slides }) => {

  const [currSlide, setSlide] = useState(slides[slideNum - 1]);

  function prevClicked() {
    slideNum--;
    setSlide(slides[slideNum - 1]);
  }
  function nextClicked() {
    slideNum++;
    setSlide(slides[slideNum - 1]);
  }
  function restartClicked() {
    slideNum = 1;
    setSlide(slides[slideNum - 1]);
  }

  return (
    <>
      <div>
        <h1 data-testid="title">{currSlide.title}</h1>
        <p data-testid="text">{currSlide.text}</p>
      </div>
      <button disabled={slideNum == 1} data-testid="button-prev" onClick={prevClicked}>Prev</button>
      <button disabled={slideNum == 1} data-testid="button-restart" onClick={restartClicked}>Restart</button>
      <button disabled={slideNum == slides.length} data-testid="button-next" onClick={nextClicked}>Next</button>
    </>
  )
}


export default App;
