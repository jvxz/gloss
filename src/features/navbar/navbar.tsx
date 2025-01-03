import Presets from "./presets/presets";
import BlockSelect from "./block-select";
import Links from "./links";

export default function Navbar() {
  return (
    <nav className="flex h-20 flex-none items-center justify-between border-b border-border px-6">
      <BlockSelect />
      <Links />
      <Presets />
    </nav>
  );
}
