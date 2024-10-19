import { useState } from 'react';
import { Selector } from './Selector';

interface ToolSelectorProps {

  data: { id: number; name: string, url?: string }[];
    selected: number | null;
    setSelected: (id: number | null) => void;
  }

export const ToolSelector = ({ data, selected, setSelected }: ToolSelectorProps) => {
  const [level, setLevel] = useState<number>(10);

  return (
    <div>
      <Selector data={data} level={level} setLevel={setLevel} selected={selected} setSelected={setSelected} />
    </div>
  );
};
