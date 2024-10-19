import seedsUrl from '../assets/seeds.png';

interface SeedProps {
  id: number;
  selected: boolean;
  setSelected: (id: number | null) => void;
  name: string;
  url?: string;
}

export const Seed = ({ id, name, url, selected, setSelected }: SeedProps) => (
  <button className={`selector ${selected ? 'selected' : ''}`} onClick={() => setSelected(selected ? null : id)}>
    <img src={url ?? seedsUrl} />
    <br />
    {name}
  </button>
);
