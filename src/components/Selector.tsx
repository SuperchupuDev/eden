import { Seed } from './Seed';

interface SelectorProps {
  data: { id: number; name: string }[];
  level: number;
  setLevel: (level: number) => void;
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export const Selector = ({ data, level, setLevel, selected, setSelected }: SelectorProps) => {
  return (
    <>
      {data.map(({ id, name }) =>
        level >= id ? <Seed key={id} id={id} name={name} selected={id === selected} setSelected={setSelected} /> : null
      )}
      <input type="button" value="[Debug] unlock next level" onClick={() => setLevel(level + 1)} />
    </>
  );
};
