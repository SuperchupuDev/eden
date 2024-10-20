import { SeedSelector } from './SeedSelector';
import { ToolSelector } from './ToolSelector';

import { data } from '../data';

interface SelectorManagerProps {
  selected: number | null;
  setSelected: (id: number | null) => void;
  seedLevel: number;
  toolLevel: number;
}

export const SelectorManager = ({ selected, setSelected, seedLevel, toolLevel }: SelectorManagerProps) => (
  <div id="left-side">
    <div id="top-left">
      <SeedSelector data={data.filter(e => e.id <= 12)} selected={selected} setSelected={setSelected} level={seedLevel} />
    </div>
    <div id="bottom-left">
      <ToolSelector data={data.filter(e => e.id > 12)} selected={selected} setSelected={setSelected} level={toolLevel} />
    </div>
  </div>
);
