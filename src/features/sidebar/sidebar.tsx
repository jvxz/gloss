import StyleSelect from "./style-select";
import ThemeSelect from "./theme-select";
import StyleSelectTooltip from "./style-select-tooltip";
import { Button } from "@/components/ui/button";
import HueInput from "./hue-input";
import { HueSlider } from "./hue-slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Sidebar() {
  return (
    <section className="top-0 h-screen min-w-[30%] border-r border-border">
      <div className="flex h-20 items-center justify-between border-b border-border px-6">
        <div className="flex items-end gap-1">
          <h1 className="font-serif text-3xl font-bold">gloss</h1>
          <p className="text-sm text-muted-foreground">v0.0.1</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
      <article className="motion-preset-fade">
        <div className="prose prose-neutral dark:prose-invert flex w-full flex-col gap-2 p-4">
          Select your theme:
          <ThemeSelect />
        </div>
        <div className="prose prose-neutral dark:prose-invert flex w-full flex-col gap-2 p-4">
          <div className="flex items-center gap-1">
            <StyleSelectTooltip />
            Select your style:
          </div>
          <StyleSelect />
        </div>
        <div className="prose prose-neutral dark:prose-invert flex w-full flex-col gap-2 p-4">
          Edit your hue:
          <HueSlider />
        </div>
      </article>
    </section>
  );
}
