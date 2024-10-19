import eden from './assets/eden.png';

import './VN.css';

export const VN = () => (
  <div id="side">
    <img id="eden" src={eden} alt="eden" />
    <img id="not-eden" src={eden} alt="not-eden" />
    <div id="talk-margin" />
    <div id="talk-container">
      <p id="talk">h</p>
    </div>
  </div>
);
