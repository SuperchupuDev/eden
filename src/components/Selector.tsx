import { Seed } from './Seed';

interface SelectorProps {
  data: { id: number; name: string; url?: string }[];
  level: number;
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export const Selector = ({ data, level, selected, setSelected }: SelectorProps) => {
  return (
    <>
      {data.map(({ id, name, url }) =>
        level >= id ? (
          <Seed key={id} id={id} name={name} url={url} selected={id === selected} setSelected={setSelected} />
        ) : null
      )}
    </>
  );
};
