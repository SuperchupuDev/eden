import { SeedSelector } from "./SeedSelector";
import { ToolSelector } from "./ToolSelector";

import removeUrl from '../assets/remove.png';

const data = [
  {
    id: 1,
    name: 'Seed 1'
  },
  {
    id: 2,
    name: 'Seed 2'
  },
  {
    id: 3,
    name: 'Seed 3'
  },
  {
    id: 4,
    name: 'Seed 4'
  },
  {
    id: 5,

    name: 'Seed 5'
  },
  {
    id: 6,
    name: 'Seed 6'
  },
  {
    id: 7,
    name: 'Seed 7'
  },
  {
    id: 8,
    name: 'Seed 8'
  },
  {
    id: 9,
    name: 'Seed 9'
  },{
    id: 10,
    name: 'Remove',
    url: removeUrl
  },
  {
    id: 11,
    name: 'Tool 2'
  },
  {
    id: 12,
    name: 'Tool 3'
  },
  {
    id: 13,
    name: 'Tool 4'
  },
  {
    id: 14,

    name: 'Tool 5'
  },
  {
    id: 15,
    name: 'Tool 6'
  },
  {
    id: 16,
    name: 'Tool 7'
  },
  {
    id: 17,
    name: 'Tool 8'
  },
  {
    id: 18,
    name: 'Tool 9'
  }
];

interface SelectorManagerProps {
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export const SelectorManager = ({ selected, setSelected }: SelectorManagerProps) => <div id="left-side">
<div id="top-left">
  <SeedSelector data={data.filter(e => e.id <= 9)} selected={selected} setSelected={setSelected} />
</div>
<div id="bottom-left">
  <ToolSelector data={data.filter(e => e.id > 9)} selected={selected} setSelected={setSelected} />
</div>
</div>
