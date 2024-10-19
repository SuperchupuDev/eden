import { useEffect, useRef, useState } from 'react';
import eden from './assets/eden.png';

import { messages } from './messages';

import './VN.css';

interface VNProps {
  setVN: (vn: boolean) => void;
  talk: number;
}

export const VN = ({ setVN, talk }: VNProps) => {
  const [conversation, setConversation] = useState(0);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [name, setName] = useState('Edén');
  const [playing, setPlaying] = useState(true);

  const nameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!playing) {
      return;
    }
    const { name, message } = messages[talk][conversation];
    if (index === 0) {
      setName(name);
      if (name === 'Edén') {
        nameRef.current?.classList.add('eden-name');
        nameRef.current?.classList.remove('milagros-name');
      } else {
        nameRef.current?.classList.remove('eden-name');
        nameRef.current?.classList.add('milagros-name');
      }
    }
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
        <div id="name-container">
          <p className="talk" id="namebox" ref={nameRef}>
            {name}
          </p>
        </div>
        <div id="talk-container">
          <p
            className="talk"
            id="conversation"
            // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
            tabIndex={0}
            onClick={() => handleClick({ talk, playing, setPlaying, conversation, setText, setVN })}
            onKeyUp={e =>
              e.key === 'Enter' ? handleClick({ talk, playing, setPlaying, conversation, setText, setVN }) : null
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

interface ClickProps {
  talk: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  conversation: number;
  setText: (text: string) => void;
  setVN: (vn: boolean) => void;
}

function handleClick({ talk, playing, setPlaying, conversation, setText, setVN }: ClickProps) {
  if (playing) {
    return;
  }
  if (conversation === messages[talk].length) {
    setVN(false);
    return;
  }
  setPlaying(true);
  setText('');
}
