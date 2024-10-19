import { data } from '../data';
import seedsUrl from '../assets/seeds.png';

interface FarmTileProps {
  id: number;
  seed: number | null;
  selected: boolean;
  setSelected: (id: number | null) => void;
  focused: boolean;
  setFocused: (id: number | null) => void;
}

export const FarmTile = ({ id, seed, selected, setSelected, focused, setFocused }: FarmTileProps) => (
  <button
    className={`farm-selector ${selected ? 'selected' : ''}`}
    onClick={() => setSelected(selected ? null : id)}
    onMouseOver={() => setFocused(id)}
    onMouseOut={() => (focused ? setFocused(null) : null)}
  >
    {focused ? <img id="tile-action" src={seed && data[seed - 1] ? (data[seed - 1].url ?? seedsUrl) : ''} /> : null}
  </button>
);
