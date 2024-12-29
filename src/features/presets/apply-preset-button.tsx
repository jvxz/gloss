"use client";
import { CloudDownload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";
import { type StyleName } from "@/lib/config";

export default function ApplyPresetButton({
  preset,
}: {
  preset: {
    hue: string;
    style: string;
  };
}) {
  const { hue, setHue } = useHueStore();
  const { setStyle } = useStyleStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="duration-[250ms] size-8 -translate-x-4 scale-150 text-background opacity-0 transition-all ease-in-out hover:bg-background/30 hover:text-background group-hover:translate-x-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-foreground hover:dark:text-foreground"
      onClick={() => {
        setHue({ ...hue, base: Number(preset.hue) });
        setStyle(preset.style as StyleName);
      }}
    >
      <CloudDownload className="size-6" />
    </Button>
  );
}
