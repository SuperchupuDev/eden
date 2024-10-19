import { useState } from 'react';

import { FarmGrid } from './components/FarmGrid';
import { SelectorManager } from './components/SelectorManager';
import { VN } from './VN';

import './App.css';

function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [vn, setVN] = useState(false);

  return vn ? (
    <VN setVN={setVN} />
  ) : (
    <div id="side">
      <SelectorManager selected={selected} setSelected={setSelected} />
      <div id="right-side">
        <div id="farm">
          <FarmGrid seed={selected} />
        </div>
        <button type="button" onClick={() => setVN(true)}>
          [Debug] VN
        </button>
      </div>
    </div>
  );
}

export default App;
