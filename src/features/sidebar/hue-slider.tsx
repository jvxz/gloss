"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { useHueStore } from "@/lib/store/hue";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dices, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

function HueSlider<T extends React.ElementRef<typeof SliderPrimitive.Root>>(
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  ref: React.ForwardedRef<T>,
) {
  const { hue, setHue, mode } = useHueStore();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <SliderPrimitive.Root
          disabled={mode === "monochrome"}
          max={359}
          onValueChange={(e) => {
            if (e[0]) setHue({ ...hue, base: e[0] });
          }}
          value={[hue.base]}
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            mode === "monochrome" && "opacity-50",
            className,
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))",
              }}
            />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <div
              className="h-full w-full rounded-full"
              style={{
                backgroundColor: `hsl(${hue.base}, 100%, 50%)`,
              }}
            />
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Root>
        <Button
          variant="ghost"
          className="aspect-square rounded-full"
          size="icon"
          disabled={mode === "monochrome"}
          onClick={() => {
            setHue({ ...hue, base: Math.floor(Math.random() * 360) });
          }}
        >
          <Dices />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <Input
          disabled={mode === "monochrome"}
          value={hue.base}
          className="max-w-[100px]"
        />
        <Label className="flex items-center gap-2 pl-4">
          <Info className="size-6" />
          <p className="text-sm">
            You can also paste a hex code to grab its hue value.
          </p>
        </Label>
      </div>
    </div>
  );
}

HueSlider.displayName = SliderPrimitive.Root.displayName;

export { HueSlider };
