"use client";
import { useBlockStore } from "@/lib/store/block";
import Features from "./features";
import { useHueStore } from "@/lib/store/hue";
import { useTheme } from "next-themes";
import Login from "./login";
import PricingBlock from "./PricingBlock";

export default function Blocks() {
  const { resolvedTheme } = useTheme();
  const { block } = useBlockStore();
  const { hue } = useHueStore();

  const darkVariables = {
    "--background": `${hue}, 10%, 4%`,
    "--foreground": `${hue}, 10%, 4%`,
    "--card": `${hue}, 10%, 7%`,
    "--card-foreground": `${hue}, 20%, 95%`,
    "--popover": `${hue}, 20%, 95%`,
    "--popover-foreground": `${hue}, 20%, 95%`,
    "--secondary": `${hue}, 20%, 5%`,
  } as React.CSSProperties;

  const lightVariables = {
    "--background": `${hue}, 20%, 96%`,
    "--foreground": `${hue}, 20%, 94%`,
    "--card": `${hue}, 20%, 98%`,
    "--card-foreground": `${hue}, 20%, 5%`,
    "--popover": `${hue}, 20%, 5%`,
    "--popover-foreground": `${hue}, 20%, 5%`,
    "--secondary": `${hue}, 15%, 88%`,
    "--secondary-foreground": `${hue}, 5%, 5%`,
    "--muted": `${hue}, 5%, 95%`,
  } as React.CSSProperties;

  return (
    <div
      className="h-full"
      style={resolvedTheme === "dark" ? darkVariables : lightVariables}
    >
      {block === "Pricing" && <PricingBlock />}
      {block === "Features" && <Features />}
      {block === "Login" && <Login />}
    </div>
  );
}
