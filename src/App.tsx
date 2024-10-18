import { useState } from 'react';
import './App.css';

import { Seed } from './components/Seed';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="side">
        <div id="left-side">
          <div id="top-left">
            <Seed />
            <Seed />
            <Seed />
            <Seed />
            <Seed />
          </div>
          <div id="bottom-left">bottom left</div>
        </div>
        <div id="right-side">right</div>
      </div>
    </>
  );
}

export default App;
