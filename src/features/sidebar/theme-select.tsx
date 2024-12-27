"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Tabs
      onValueChange={(e) => {
        setTheme(e);
      }}
      value={resolvedTheme}
      className="w-full"
    >
      <TabsList className="flex *:flex-1">
        <TabsTrigger value="dark">
          Dark <Moon className="ml-2 size-4" />
        </TabsTrigger>
        <TabsTrigger value="light">
          Light <Sun className="ml-2 size-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
