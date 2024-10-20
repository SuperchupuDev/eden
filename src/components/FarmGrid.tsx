import { useState } from 'react';
import { FarmTile } from './FarmTile';

const data = [
  {
    id: 0
  },
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
  {
    id: 11
  },
  {
    id: 12
  },
  {
    id: 13
  },
  {
    id: 14
  },
  {
    id: 15
  },
  {
    id: 16
  },
  {
    id: 17
  }
];

interface FarmGridProps {
  seed: number | null;
  setTalk: (talk: number) => void;
  setVN: (vn: boolean) => void;
}

export const FarmGrid = ({ seed, setTalk, setVN }: FarmGridProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);

  const states = [
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)],
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)],
    [useState(0), useState(0), useState(0), useState(0), useState(0), useState(0)]
  ];

  return (
    <div>
      {data.map(({ id }) => {
        const [state, setState] = states[Math.floor(id / 6)][id % 6];

        return (
          <FarmTile
            key={id}
            id={id}
            seed={seed}
            selected={id === selected}
            setSelected={setSelected}
            focused={id === focused}
            setFocused={setFocused}
            state={state}
            setState={setState}
            gridStates={states}
            setTalk={setTalk}
            setVN={setVN}
          />
        );
      })}
    </div>
  );
};
