import StyleSelect from "./style-select";
import ThemeSelect from "./theme-select";
import StyleSelectTooltip from "./style-select-tooltip";
import { HueSlider } from "./hue-slider";
import ColorModeSelect from "./color-mode-select";
import { Label } from "@/components/ui/label";
import SidebarHeader from "./header";
import RandomizePresetButton from "./randomize-preset-button";
import ExportButton from "./export-button";

export default function Sidebar() {
  return (
    <section className="top-0 flex max-h-screen w-[570px] flex-col border-r border-border lg:min-w-[400px]">
      <SidebarHeader />
      <article className="motion-preset-fade flex h-full flex-1 flex-col">
        <div className="prose prose-neutral flex w-full flex-col gap-2 p-4 dark:prose-invert">
          Select your theme:
          <ThemeSelect />
        </div>
        <div className="prose prose-neutral flex w-full flex-col gap-2 p-4 dark:prose-invert">
          <div className="flex items-center gap-1">
            <StyleSelectTooltip />
            Select your style:
          </div>
          <StyleSelect />
          <Label>More styles will be added in the future.</Label>
        </div>
        <div className="prose prose-neutral flex w-full flex-col gap-2 p-4 dark:prose-invert">
          Edit your colors:
          <div className="flex flex-col gap-4">
            <ColorModeSelect />
            <HueSlider />
          </div>
        </div>
        <div className="flex h-full flex-col justify-end gap-2 p-4">
          <div className="flex w-full items-center gap-2 *:flex-1">
            <RandomizePresetButton />
            <ExportButton />
          </div>
        </div>
      </article>
    </section>
  );
}
