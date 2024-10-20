import { Selector } from './Selector';

interface SeedSelectorProps {
  data: { id: number; name: string; url?: string }[];
  selected: number | null;
  setSelected: (id: number | null) => void;
  level: number;
}

export const SeedSelector = ({ data, level, selected, setSelected }: SeedSelectorProps) => {
  return (
    <div>
      <Selector data={data} level={level} selected={selected} setSelected={setSelected} />
    </div>
  );
};
