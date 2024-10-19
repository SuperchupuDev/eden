import { useState } from 'react';
import { FarmTile } from './FarmTile';

const data = [
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
  },
  {
    id: 18
  }
];

export const FarmGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div>
      {data.map(({ id }) => (
        <FarmTile
          key={id}
          id={id}
          selected={id === selected}
          setSelected={setSelected}
          focused={id === focused}
          setFocused={setFocused}
        />
      ))}
    </div>
  );
};
