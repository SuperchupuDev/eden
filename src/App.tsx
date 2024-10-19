import './App.css';

import { SeedSelector } from './components/SeedSelector';
import { ToolSelector } from './components/ToolSelector';

function App() {
  return (
    <>
      <div id="side">
        <div id="left-side">
          <div id="top-left">
            <SeedSelector />
          </div>
          <div id="bottom-left">
            <ToolSelector />
          </div>
        </div>
        <div id="right-side">
          <div id="farm">
            waow
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
