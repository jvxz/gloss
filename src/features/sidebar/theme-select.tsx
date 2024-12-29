"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

export default function ThemeSelect() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <Tabs className="w-full">
        <TabsList className="flex *:flex-1"></TabsList>
      </Tabs>
    );
  }

  return (
    <Tabs
      onValueChange={(e) => {
        setTheme(e);
      }}
      className="w-full"
      value={theme}
    >
      <TabsList className="flex *:flex-1">
        <TabsTrigger className="motion-preset-fade-sm" value="dark">
          Dark <Moon className="ml-2 size-4" />
        </TabsTrigger>
        <TabsTrigger className="motion-preset-fade-sm" value="light">
          Light <Sun className="ml-2 size-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
