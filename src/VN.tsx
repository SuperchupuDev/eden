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
  const [playing, setPlaying] = useState(false);

  const nameRef = useRef<HTMLParagraphElement>(null);

  const [showEden, setShowEden] = useState(false);
  const [showMilagros, setShowMilagros] = useState(false);

  const [showEdenName, setShowEdenName] = useState(false);
  const [showMilagrosName, setShowMilagrosName] = useState(false);

  useEffect(() => {
    if (talk !== 0 && conversation === 0 && index === 0) {
      setPlaying(true);
    }

    if (!playing) {
      return;
    }
    const { name, message, _showEden, _showMilagros, _showEdenName, _showMilagrosName } = messages[talk][conversation];
    if (index === 0) {
      setName(name);
      if (_showEdenName !== undefined) {
        setShowEdenName(_showEdenName);
      }
      if (_showMilagrosName !== undefined) {
        setShowMilagrosName(_showMilagrosName);
      }
      if (_showEden) {
        setShowEden(true);
      }
      if (_showMilagros) {
        setShowMilagros(true);
      }
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
    }, 15);

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
        <img id="eden" style={showMilagros ? {} : { display: 'none' }} src={eden} alt="eden" />
        <img id="not-eden" style={showEden ? {} : { display: 'none' }} src={eden} alt="not-eden" />
        <div id="talk-margin" />
        <div id="name-container">
          <p className="talk eden-name" id="namebox" ref={nameRef}>
            {getName({ name, showEdenName, showMilagrosName })}
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

function getName({ name, showEdenName, showMilagrosName }: { name: string; showEdenName: boolean; showMilagrosName: boolean }) {
  if (name === 'Edén' && !showEdenName) {
    return '???';
  }

  if (name === 'Milagros' && !showMilagrosName) {
    return '???';
  }

  return name;
}

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
