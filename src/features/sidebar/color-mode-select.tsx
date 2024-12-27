"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHueStore } from "@/lib/store/hue";

export default function ColorModeSelect() {
  const { setMode } = useHueStore();

  return (
    <Tabs
      defaultValue="colorful"
      className="w-full"
      onValueChange={(value) => {
        setMode(value as "colorful" | "monochrome");
      }}
    >
      <TabsList className="flex *:flex-1">
        <TabsTrigger value="colorful">Colorful</TabsTrigger>
        <TabsTrigger value="monochrome">Monochrome</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
