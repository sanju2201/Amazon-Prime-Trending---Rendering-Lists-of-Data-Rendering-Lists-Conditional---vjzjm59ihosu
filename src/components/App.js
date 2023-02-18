import React, { Component, useState } from "react";
import '../styles/App.css';

let slideNum = 1
const App = ({ slides }) => {

  // const [currSlide, setSlide] = useState(slides[slideNum - 1]);
  const [currIdx, setIndex] = useState(0);


  // function prevClicked() {
  //   slideNum--;
  //   setSlide(slides[slideNum - 1]);
  // }
  // function nextClicked() {
  //   slideNum++;
  //   setSlide(slides[slideNum - 1]);
  // }
  // function restartClicked() {
  //   slideNum = 1;
  //   setSlide(slides[slideNum - 1]);
  // }

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


// import React, { Component, useState } from 'react';
// import '../styles/App.css';

// const App = ({ slides }) => {
//   const [idx, setIdx] = useState(0);
//   return (
//     <>
//       <h1 data-testid="title">{slides[idx].title}</h1>
//       <p data-testid="text">{slides[idx].text}</p>
//       {idx === 0 ? (
//         <button
//           disabled
//           data-testid="button-prev"
//           onClick={() => {
//             idx === 0 ? null : setIdx(idx - 1);
//           }}>
//           Prev
//         </button>
//       ) : (
//         <button
//           data-testid="button-prev"
//           onClick={() => {
//             idx === 0 ? null : setIdx(idx - 1);
//           }}>
//           Prev
//         </button>
//       )}
//       {idx === slides.length - 1 ? (
//         <button
//           disabled
//           data-testid="button-next"
//           onClick={() => {
//             idx === slides.length - 1 ? null : setIdx(idx + 1);
//           }}>
//           Next
//         </button>
//       ) : (
//         <button
//           data-testid="button-next"
//           onClick={() => {
//             idx === slides.length - 1 ? null : setIdx(idx + 1);
//           }}>
//           Next
//         </button>
//       )}
//       {idx === 0 ? (
//         <button
//           data-testid="button-restart"
//           disabled
//           onClick={() => {
//             setIdx(0);
//           }}>
//           Restart
//         </button>
//       ) : (
//         <button
//           data-testid="button-restart"
//           onClick={() => {
//             setIdx(0);
//           }}>
//           Restart
//         </button>
//       )}
//     </>
//   );
// };

// export default App;