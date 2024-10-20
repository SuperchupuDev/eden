import { useState } from 'react';

import { FarmGrid } from './components/FarmGrid';
import { SelectorManager } from './components/SelectorManager';
import { VN } from './VN';

import './App.css';

function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [vn, setVN] = useState(true);
  const [talk, setTalk] = useState(0);

  const [seedLevel, setSeedLevel] = useState(0);
  const [toolLevel, setToolLevel] = useState(1);

  const [level, setLevel] = useState(0);

  const [isWin, setIsWin] = useState(false);

  const states = [
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)],
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)],
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)]
  ];

  if (isWin) {
    return (
      <>
        <h1>Edén</h1>
        Por{' '}
        <a href="https://twitter.com/superchupu" target="_blank">
          Madeline
        </a>
        ,{' '}
        <a href="https://twitter.com/Rainbow_aspirin" target="_blank">
          Celia
        </a>{' '}
        y{' '}
        <a href="https://twitter.com/Imocade" target="_blank">
          Abdiel
        </a>
        <br />
        Hecho en JavaScript
        <br />
        Gracias por jugar
      </>
    );
  }

  return vn ? (
    <VN setVN={setVN} talk={talk} setIsWin={setIsWin} />
  ) : (
    <div id="side">
      <SelectorManager selected={selected} setSelected={setSelected} seedLevel={seedLevel} toolLevel={toolLevel + 12} />
      <div id="right-side">
        <div id="farm">
          <FarmGrid
            seed={selected}
            setTalk={setTalk}
            setVN={setVN}
            setSeedLevel={setSeedLevel}
            setToolLevel={setToolLevel}
            level={level}
            setLevel={setLevel}
            states={states}
          />
        </div>
        {/* <button type="button" onClick={() => setVN(true)}>
          [Debug] VN
        </button> */}
      </div>
    </div>
  );
}

export default App;
