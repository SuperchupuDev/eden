import seedsUrl from '../assets/seeds.png';

interface FarmTileProps {
  id: number;
  selected: boolean;
  setSelected: (id: number | null) => void;
  focused: boolean;
  setFocused: (id: number | null) => void;
}

export const FarmTile = ({ id, selected, setSelected, focused, setFocused }: FarmTileProps) => (
  <button
    className={`farm-selector ${selected ? 'selected' : ''}`}
    onClick={() => setSelected(selected ? null : id)}
    onMouseOver={() => setFocused(id)}
    onMouseOut={() => focused ? setFocused(null) : null}
  >
    {focused ? <img src={seedsUrl} /> : null}
  </button>
);
