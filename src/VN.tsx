import { useEffect, useRef, useState } from 'react';
import eden from './assets/eden.png';
import milagros from './assets/milagros.png';

import { messages } from './messages';

import './VN.css';

interface VNProps {
  setVN: (vn: boolean) => void;
  talk: number;
  setIsWin: (isWin: boolean) => void;
}

export const VN = ({ setVN, talk, setIsWin }: VNProps) => {
  const [conversation, setConversation] = useState(0);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [name, setName] = useState('Edén');
  const [playing, setPlaying] = useState(false);

  const nameRef = useRef<HTMLParagraphElement>(null);
  const vnRef = useRef<HTMLDivElement>(null);

  const [showEden, setShowEden] = useState(talk !== 0);
  const [showMilagros, setShowMilagros] = useState(talk !== 0);

  const [showEdenName, setShowEdenName] = useState(talk !== 0);
  const [showMilagrosName, setShowMilagrosName] = useState(talk !== 0);

  useEffect(() => {
    if (talk !== 0 && conversation === 0 && index === 0) {
      setPlaying(true);
    }

    if (!playing) {
      return;
    }
    const { bg, name, message, _showEden, _showMilagros, _showEdenName, _showMilagrosName } =
      messages[talk][conversation];
    console.log(_showEden, _showMilagros, _showEdenName, _showMilagrosName);
    if (index === 0) {
      setName(name);
      if (_showEdenName !== undefined) {
        setShowEdenName(_showEdenName);
      }
      if (_showMilagrosName !== undefined) {
        setShowMilagrosName(_showMilagrosName);
      }
      if (_showEden !== undefined) {
        setShowEden(_showEden);
      }
      if (_showMilagros !== undefined) {
        setShowMilagros(_showMilagros);
      }
      if (bg) {
        vnRef.current?.style.setProperty('--bg-url', `url(${bg})`);
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
    <div id="vn" ref={vnRef}>
      <div id="side">
        <img id="eden" style={showMilagros ? {} : { visibility: 'hidden' }} src={milagros} alt="Milagros" />
        <img id="not-eden" style={showEden ? {} : { visibility: 'hidden' }} src={eden} alt="Edén" />
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
            onClick={() => handleClick({ talk, playing, setPlaying, conversation, setText, setVN, setIsWin })}
            onKeyUp={e =>
              e.key === 'Enter'
                ? handleClick({ talk, playing, setPlaying, conversation, setText, setVN, setIsWin })
                : e.key === 's'
                  ? setVN(false)
                  : null
            }
          >
            {text}
            {playing ? null : (
              <label id="continue" htmlFor="continue">
                {' '}
                ▶
              </label>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

function getName({
  name,
  showEdenName,
  showMilagrosName
}: { name: string; showEdenName: boolean; showMilagrosName: boolean }) {
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
  setIsWin: (win: boolean) => void;
}

function handleClick({ talk, playing, setPlaying, conversation, setText, setVN, setIsWin }: ClickProps) {
  if (playing) {
    return;
  }
  if (conversation === messages[talk].length) {
    if (talk === 6) {
      setIsWin(true);
    }
    setVN(false);
    return;
  }
  setPlaying(true);
  setText('');
}
