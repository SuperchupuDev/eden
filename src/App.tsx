import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="side">
        <div id="left-side">
          <div id="top-left">top left</div>
          <div id="bottom-left">bottom left</div>
        </div>
        <div id="right-side">
          <div id="buttons-left">buttons left</div>
          <div id="workaround-middle-buttons">
          <div id="right-middle">right</div>
          <div id="buttons-right">buttons right</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
