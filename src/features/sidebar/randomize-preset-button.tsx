"use client";

import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";
import { styles } from "@/lib/config";

export default function RandomizePresetButton() {
  const { hue, setHue } = useHueStore();
  const { setStyle } = useStyleStore();

  const randomStyle = () => {
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    if (!randomStyle) return "Charm";
    return randomStyle.name;
  };

  return (
    <Button
      onClick={() => {
        setHue({ ...hue, base: Math.floor(Math.random() * 360) });
        setStyle(randomStyle());
      }}
      variant="outline"
    >
      <Dices />
      Randomize
    </Button>
  );
}
