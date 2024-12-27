import StyleSelect from "./style-select";
import ThemeSelect from "./theme-select";
import StyleSelectTooltip from "./style-select-tooltip";
import { Button } from "@/components/ui/button";
import { HueSlider } from "./hue-slider";
import ColorModeSelect from "./color-mode-select";

export default function Sidebar() {
  return (
    <section className="top-0 h-screen min-w-[30%] border-r border-border">
      <div className="flex h-20 items-center justify-between border-b border-border px-6">
        <div className="flex items-end gap-1">
          <h1 className="font-serif text-3xl font-bold">gloss</h1>
          <p className="text-sm text-muted-foreground">v0.0.1</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
      <article className="motion-preset-fade">
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
        </div>
        <div className="prose prose-neutral flex w-full flex-col gap-2 p-4 dark:prose-invert">
          Edit your colors:
          <div className="flex flex-col gap-4">
            <ColorModeSelect />
            <HueSlider />
          </div>
        </div>
      </article>
    </section>
  );
}
