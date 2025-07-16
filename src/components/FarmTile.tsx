import { useEffect, useRef } from 'react';
import seedsUrl from '../assets/seeds.png';
import { data } from '../data';

const states = [
  { id: 0, url: '/grid-trash.png' },
  { id: 1, url: '/grid-empty.png' },
  { id: 2, url: '/grid-arada.png' },
  { id: 3, url: '/grid-semillas-arada.png' },
  { id: 4, url: '/grid-semillas-regada.png' },
  { id: 5, url: '/grid-hotel.png' },
  { id: 6, url: '/grid-habas.png' }
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
  level: number;
  setLevel: (level: number) => void;
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
  setToolLevel,
  level,
  setLevel
}: FarmTileProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.style.setProperty('--tile-url', `url(${states[state].url})`);
  }, [state]);

  return (
    <button
      className={`farm-selector ${selected ? 'selected' : ''}`}
      onMouseDown={() =>
        handleClick({
          id,
          seed,
          selected,
          setSelected,
          state,
          setState,
          setTalk,
          setVN,
          grid: gridStates,
          setSeedLevel,
          setToolLevel,
          level,
          setLevel
        })
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
  level: number;
  setLevel: (level: number) => void;
}

function handleClick({
  id,
  seed,
  selected,
  setSelected,
  state,
  setState,
  setTalk,
  setVN,
  grid,
  setSeedLevel,
  setToolLevel,
  level,
  setLevel
}: ClickProps) {
  if (!seed) {
    return;
  }
  if (seed === 13 && level !== 0) {
    return setState(1);
  }
  switch (level) {
    case 0: {
      if (seed === 13 && state === 0) {
        if (grid.flat().filter(([state]) => state === 1).length === 17) {
          setLevel(1);
          setTalk(1);
          setVN(true);
          setSeedLevel(1);
          setToolLevel(4);
        }

        setState(1);
      }
      break;
    }
    case 1: {
      function fail() {
        setState(1);
        setTalk(2);
        setVN(true);
      }
      function win() {
        setLevel(2);
        setTalk(3);
        setVN(true);
        setSeedLevel(2);
      }
      checkGarbanzos({ seed, state, setState, win, fail });
      break;
    }
    case 2: {
      function fail() {
        setLevel(3);
        setState(1);
        setTalk(4);
        setVN(true);
        setToolLevel(5);
      }
      checkHabas({ grid, seed, state, setState, win: fail, fail, fake: true });
      break;
    }
    case 3: {
      function fail() {
        setState(1);
        setTalk(5);
        setVN(true);
      }
      function win() {
        setLevel(4);
        setTalk(6);
        setVN(true);
      }

      checkHabas({ grid, seed, state, setState, win, fail });
      break;
    }
  }

  setSelected(selected ? null : id);
}

interface CheckProps {
  seed: number | null;
  state: number;
  setState: (state: number) => void;
  win?: () => void;
  fail?: () => void;
  fake?: boolean;
  grid?: [number, (state: number) => void][][];
}

function checkGarbanzos({ seed, state, setState, win = () => null, fail = () => setState(1) }: CheckProps) {
  console.log('checkGarbanzos', seed, state);
  if (state === 1) {
    if (seed === 14) {
      setState(2);
    } else {
      fail();
    }
  } else if (state === 2) {
    if (seed === 1) {
      setState(3);
    } else {
      fail();
    }
  } else if (state === 3) {
    if (seed === 15) {
      setState(4);

      win();
    } else {
      fail();
    }
  } else {
    fail();
  }
}

function checkHabas({ seed, state, setState, win = () => null, fail = () => setState(1), fake, grid }: CheckProps) {
  console.log('checkHabas', seed, state);
  console.log(grid);
  if (state === 1) {
    if (seed === 14) {
      setState(2);
    } else if (seed === 17) {
      if (grid && grid.flat().filter(([state]) => state === 6).length > 0) {
        win();
      }
      setState(5);
    } else {
      fail();
    }
  } else if (state === 2) {
    if (seed === 2) {
      if (fake || (grid && grid.flat().filter(([state]) => state === 5).length > 0)) {
        win();
      } else {
        setState(6);
      }
    } else {
      fail();
    }
  } else {
    fail();
  }
}
