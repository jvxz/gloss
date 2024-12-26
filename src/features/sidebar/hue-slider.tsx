"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { useHueStore } from "@/lib/store/hue";

function HueSlider<T extends React.ElementRef<typeof SliderPrimitive.Root>>(
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  ref: React.ForwardedRef<T>,
) {
  const { hue, setHue } = useHueStore();

  return (
    <SliderPrimitive.Root
      max={359}
      onValueChange={(e) => {
        if (e[0]) setHue(e[0]);
      }}
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
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
            backgroundColor: `hsl(${hue ?? 0}, 100%, 50%)`,
          }}
        />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
}

HueSlider.displayName = SliderPrimitive.Root.displayName;

export { HueSlider };
