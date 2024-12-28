"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SavePreset from "./save-preset";
import { Scroll, FileQuestion } from "lucide-react";
import { styles } from "@/lib/config";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";

export default function Presets() {
  const { style } = useStyleStore();
  const { hue, mode } = useHueStore();

  const presetColor =
    mode === "colorful"
      ? `hsl(${hue.base}, 40%, 35%)`
      : `hsl(${hue.base}, 0%, 35%)`;

  return (
    <div className="flex items-center gap-2">
      <SavePreset />
      <Sheet>
        <SheetTrigger>
          <Button>
            <Scroll />
            <p>Presets</p>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Presets</SheetTitle>
            <SheetDescription>
              <p>
                Presets are saved to your account, allowing access to any device
                when logged in.
              </p>
            </SheetDescription>
          </SheetHeader>
          {/* <div className="grid h-full place-items-center text-muted-foreground">
            <div className="flex flex-col items-center justify-center gap-2">
              <FileQuestion className="size-16" />
              <p className="text-xl font-semibold">No presets found</p>
              <p className="w-[50%] text-center text-sm">
                Save a preset by clicking the save button, or by pressing
                <kbd className="pointer-events-none mx-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>S
                </kbd>
              </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-4 pt-4">
            <div
              style={{
                backgroundColor: presetColor,
              }}
              className="flex h-24 items-center justify-around gap-2 rounded-md p-2"
            >
              <div className="flex flex-col items-center justify-center gap-2 text-background dark:text-foreground">
                <p>Untitled</p>
                {styles.map((e) => {
                  if (e.name === style) {
                    return <e.icon className="size-10" key={e.name} />;
                  }
                })}
              </div>
            </div>
            <div
              style={{
                backgroundColor: presetColor,
              }}
              className="flex h-24 items-center justify-around gap-2 rounded-md p-2"
            >
              <div className="flex flex-col items-center justify-center gap-2 text-background dark:text-foreground">
                <p>Untitled</p>
                {styles.map((e) => {
                  if (e.name === style) {
                    return <e.icon className="size-10" key={e.name} />;
                  }
                })}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
