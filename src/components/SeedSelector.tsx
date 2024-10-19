import { useState } from 'react';
import { Selector } from './Selector';

const data = [
  {
    id: 1,
    name: 'Seed 1'
  },
  {
    id: 2,
    name: 'Seed 2'
  },
  {
    id: 3,
    name: 'Seed 3'
  },
  {
    id: 4,
    name: 'Seed 4'
  },
  {
    id: 5,

    name: 'Seed 5'
  },
  {
    id: 6,
    name: 'Seed 6'
  },
  {
    id: 7,
    name: 'Seed 7'
  },
  {
    id: 8,
    name: 'Seed 8'
  },
  {
    id: 9,
    name: 'Seed 9'
  }
];

export const SeedSelector = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [level, setLevel] = useState<number>(1);

  return (
    <div>
      <Selector data={data} level={level} setLevel={setLevel} selected={selected} setSelected={setSelected} />
    </div>
  );
};
