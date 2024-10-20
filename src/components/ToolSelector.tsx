import { Selector } from './Selector';

interface ToolSelectorProps {
  data: { id: number; name: string; url?: string }[];
  selected: number | null;
  setSelected: (id: number | null) => void;
  level: number;
}

export const ToolSelector = ({ data, level, selected, setSelected }: ToolSelectorProps) => {

  return (
    <div>
      <Selector data={data} level={level} selected={selected} setSelected={setSelected} />
    </div>
  );
};
