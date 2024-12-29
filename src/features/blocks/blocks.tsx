"use client";
import { useBlockStore } from "@/lib/store/block";
import Features from "./features";
import { useHueStore } from "@/lib/store/hue";
import { useTheme } from "next-themes";
import Login from "./login";
import PricingBlock from "./PricingBlock";
import Dashboard from "./dashboard/dashboard";
import { formatHue } from "@/lib/utils";
import { useStyleStore } from "@/lib/store/style";
import { useMounted } from "@/hooks/use-mounted";
import { Loader2 } from "lucide-react";

export default function Blocks() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const { style } = useStyleStore();
  const { block } = useBlockStore();
  const { hue, mode } = useHueStore();

  const base = mode === "colorful" ? hue.base : 0;
  const variables = formatHue(base, style, mode);

  if (!mounted) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="size-16 animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="motion-preset-fade-lg h-full"
      style={resolvedTheme === "dark" ? variables.dark : variables.light}
    >
      {block === "Dashboard" && <Dashboard />}
      {block === "Pricing" && <PricingBlock />}
      {block === "Features" && <Features />}
      {block === "Login" && <Login />}
    </div>
  );
}
