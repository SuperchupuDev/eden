import { useState } from 'react';
import { Selector } from './Selector';

interface SeedSelectorProps {
  data: { id: number; name: string; url?: string }[];
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export const SeedSelector = ({ data, selected, setSelected }: SeedSelectorProps) => {
  const [level, setLevel] = useState<number>(0);

  return (
    <div>
      <Selector data={data} level={level} setLevel={setLevel} selected={selected} setSelected={setSelected} />
    </div>
  );
};
