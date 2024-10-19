import { useEffect, useRef, useState } from 'react';

import { data } from '../data';
import seedsUrl from '../assets/seeds.png';

const states = [
  { id: 0, url: '/grid-trash.png' },
  { id: 1, url: '/grid-empty.png' }
];

interface FarmTileProps {
  id: number;
  seed: number | null;
  selected: boolean;
  setSelected: (id: number | null) => void;
  focused: boolean;
  setFocused: (id: number | null) => void;
}

export const FarmTile = ({ id, seed, selected, setSelected, focused, setFocused }: FarmTileProps) => {
  const [state, setState] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.style.setProperty('--tile-url', `url(${states[state].url})`);
  }, [state]);

  return (
    <button
      className={`farm-selector ${selected ? 'selected' : ''}`}
      onClick={() => handleClick({ id, seed, selected, setSelected, state, setState })}
      onMouseOver={() => setFocused(id)}
      onFocus={() => setFocused(id)}
      onMouseOut={() => (focused ? setFocused(null) : null)}
      onBlur={() => (focused ? setFocused(null) : null)}
      type="button"
      ref={ref}
    >
      {focused ? <img id="tile-action" src={seed && data[seed - 1] ? (data[seed - 1].url ?? seedsUrl) : ''} /> : null}
    </button>
  );
};

interface ClickProps {
  id: number;
  seed: number | null;
  selected: boolean;
  setSelected: (id: number | null) => void;
  state: number;
  setState: (state: number) => void;
}

function handleClick({ id, seed, selected, setSelected, state, setState }: ClickProps) {
  if (seed === 13 && state === 0) {
    setState(1);
  }
  setSelected(selected ? null : id);
}
