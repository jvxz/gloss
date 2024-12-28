"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function HueInput() {
  const minValue = 0;
  const maxValue = 255;
  const steps = 1;
  const [value, setValue] = useState([100]);

  const decreaseValue = () =>
    setValue((prev) => [Math.max(minValue, prev[0] - steps)]);
  const increaseValue = () =>
    setValue((prev) => [Math.min(maxValue, prev[0] + steps)]);

  return (
    <>
      <div className="flex items-center justify-between">
        Edit the hue:
        <Input className="; w-[75px]" />
      </div>
      <div className="w-full space-y-3">
        <div className="flex items-center gap-2">
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-full"
              aria-label="Decrease value"
              onClick={decreaseValue}
              disabled={value[0] === 0}
            >
              <Minus size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
          <Slider
            className="hue-slider grow"
            value={value}
            onValueChange={setValue}
            min={minValue}
            max={maxValue}
            step={steps}
            aria-label="Dual range slider with buttons"
          />
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-full"
              aria-label="Increase value"
              onClick={increaseValue}
              disabled={value[0] === 200}
            >
              <Plus size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
