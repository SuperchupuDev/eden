import { useEffect, useState } from 'react';
import eden from './assets/eden.png';

import { messages } from './messages';

import './VN.css';

interface VNProps {
  setVN: (vn: boolean) => void;
}

export const VN = ({ setVN }: VNProps) => {
  const [talk, setTalk] = useState(0);
  const [conversation, setConversation] = useState(0);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) {
      return;
    }
    const { message } = messages[talk][conversation];
    const interval = setInterval(() => {
      setText(prev => prev + message[index]);
      setIndex(prev => prev + 1);
    }, 50);

    if (index === message.length) {
      clearInterval(interval);
      setIndex(0);
      setConversation(conversation + 1);
      setPlaying(false);
    }

    return () => clearInterval(interval);
  }, [index, conversation, talk, playing]);

  return (
    <div id="vn">
      <div id="side">
        <img id="eden" src={eden} alt="eden" />
        <img id="not-eden" src={eden} alt="not-eden" />
        <div id="talk-margin" />
        <div id="talk-container">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: TODO */}
          <p
            id="talk"
            onClick={() => {
              if (playing) {
                return;
              }
              if (conversation === messages[talk].length) {
                setVN(false);
                return;
              }
              setConversation(conversation + 1);
              setPlaying(true);
              setText('');
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
