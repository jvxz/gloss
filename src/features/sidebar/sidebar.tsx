import StyleSelect from "./style-select";
import ThemeSelect from "./theme-select";
import StyleSelectTooltip from "./style-select-tooltip";
import { Button } from "@/components/ui/button";
import { HueSlider } from "./hue-slider";
import ColorModeSelect from "./color-mode-select";
import ResetButton from "./reset-button";
import { Download } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function Sidebar() {
  return (
    <section className="top-0 flex max-h-screen w-[570px] flex-col border-r border-border lg:min-w-[400px]">
      <header className="flex h-20 items-center justify-between border-b border-border px-6">
        <div className="flex items-end gap-1">
          <h1 className="text-shadow-lg text-shadow-background/60 font-serif text-3xl font-bold">
            gloss
          </h1>
          <p className="text-sm text-muted-foreground">v0.0.1</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </header>
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
        <div className="flex flex-1 items-end gap-2 p-4 *:flex-1">
          <ResetButton />

          <Button>
            <Download />
            Export
          </Button>
        </div>
      </article>
    </section>
  );
}
