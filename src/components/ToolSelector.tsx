import { useState } from 'react';
import { Selector } from './Selector';

const data = [
  {
    id: 1,
    name: 'Tool 1'
  },
  {
    id: 2,
    name: 'Tool 2'
  },
  {
    id: 3,
    name: 'Tool 3'
  },
  {
    id: 4,
    name: 'Tool 4'
  },
  {
    id: 5,

    name: 'Tool 5'
  },
  {
    id: 6,
    name: 'Tool 6'
  },
  {
    id: 7,
    name: 'Tool 7'
  },
  {
    id: 8,
    name: 'Tool 8'
  },
  {
    id: 9,
    name: 'Tool 9'
  }
];

export const ToolSelector = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [level, setLevel] = useState<number>(1);

  return (
    <div>
      <Selector data={data} level={level} setLevel={setLevel} selected={selected} setSelected={setSelected} />
    </div>
  );
};
