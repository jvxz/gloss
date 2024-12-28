import Blocks from "@/features/blocks/blocks";
import BlockSelect from "@/components/ui/block-select";
import Presets from "@/features/presets/presets";
export default function Page() {
  return (
    <section className="flex h-screen w-full flex-col">
      <nav className="flex h-20 flex-none items-center justify-between border-b border-border px-6">
        <BlockSelect />
        <Presets />
      </nav>
      <div className="flex-1 overflow-hidden">
        <div className="motion-preset-focus-sm h-full overflow-y-auto">
          <Blocks />
        </div>
      </div>
    </section>
  );
}