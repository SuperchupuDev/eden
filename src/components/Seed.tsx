import seedsUrl from '../assets/seeds.png';

interface SeedProps {
  id: number;
  selected: boolean;
  setSelected: (id: number | null) => void;
  name: string;
}

export const Seed = ({ id, name, selected, setSelected }: SeedProps) => (
  <button className={`selector ${selected ? 'selected' : ''}`} onClick={() => setSelected(selected ? null : id)}>
    <img src={seedsUrl} />
    <br />
    {name}
  </button>
);
