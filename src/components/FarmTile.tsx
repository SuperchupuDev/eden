import { useEffect, useRef } from 'react';

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
  state: number;
  setState: (state: number) => void;
  gridStates: [number, (state: number) => void][][];
  setTalk: (talk: number) => void;
  setVN: (vn: boolean) => void;
  setSeedLevel: (level: number) => void;
  setToolLevel: (level: number) => void;
}

export const FarmTile = ({
  id,
  seed,
  selected,
  setSelected,
  focused,
  setFocused,
  state,
  setState,
  setTalk,
  setVN,
  gridStates,
  setSeedLevel,
  setToolLevel
}: FarmTileProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.style.setProperty('--tile-url', `url(${states[state].url})`);
  }, [state]);

  return (
    <button
      className={`farm-selector ${selected ? 'selected' : ''}`}
      onMouseDown={() =>
        handleClick({ id, seed, selected, setSelected, state, setState, setTalk, setVN, grid: gridStates, setSeedLevel, setToolLevel })
      }
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
  grid: [number, (state: number) => void][][];
  state: number;
  setState: (state: number) => void;
  setTalk: (talk: number) => void;
  setVN: (vn: boolean) => void;
  setSeedLevel: (level: number) => void;
  setToolLevel: (level: number) => void;
}

function handleClick({ id, seed, selected, setSelected, state, setState, setTalk, setVN, grid, setSeedLevel, setToolLevel }: ClickProps) {
  if (seed === 13 && state === 0) {
    if (grid.flat().filter(([state]) => state === 1).length === 17) {
      setTalk(1);
      setVN(true);
      setSeedLevel(1);
      setToolLevel(3);
    }

    setState(1);
  }

  setSelected(selected ? null : id);
}
