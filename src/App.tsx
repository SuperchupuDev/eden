import { useState } from 'react';

import { FarmGrid } from './components/FarmGrid';
import { SelectorManager } from './components/SelectorManager';

import './App.css';

function App() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div id="side">
        <SelectorManager selected={selected} setSelected={setSelected} />
        <div id="right-side">
          <div id="farm">
            <FarmGrid seed={selected} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
