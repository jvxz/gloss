"use client";
import { useBlockStore } from "@/lib/store/block";
import Features from "./features";
import { useHueStore } from "@/lib/store/hue";
import { useTheme } from "next-themes";
import Login from "./login";
import PricingBlock from "./PricingBlock";
import Dashboard from "./dashboard/dashboard";
// import Dashboard from "./dashboard";

export default function Blocks() {
  const { resolvedTheme } = useTheme();
  const { block } = useBlockStore();
  const { hue } = useHueStore();

  const darkVariables = {
    "--background": `${hue}, 10%, 4%`,
    "--foreground": `${hue}, 10%, 4%`,
    "--card": `${hue}, 10%, 7%`,
    "--card-foreground": `${hue}, 20%, 95%`,
    "--popover": `${hue}, 10%, 7%`,
    "--popover-foreground": `${hue}, 20%, 95%`,
    "--secondary": `${hue}, 9%, 12%`,
    "--secondary-foreground": `${hue}, 9%, 95%`,
    "--muted": `${hue}, 9%, 12%`,
    "--muted-foreground": `${hue}, 9%, 95%`,
  } as React.CSSProperties;

  const lightVariables = {
    "--background": `${hue}, 20%, 96%`,
    "--foreground": `${hue}, 20%, 6%`,
    "--card": `${hue}, 20%, 99%`,
    "--card-foreground": `${hue}, 20%, 6%`,
    "--popover": `${hue}, 20%, 6%`,
    "--popover-foreground": `${hue}, 20%, 6%`,
    "--secondary": `${hue}, 15%, 94%`,
    "--secondary-foreground": `${hue}, 20%, 6%`,
    "--muted": `${hue}, 15%, 94%`,
    "--muted-foreground": `${hue}, 20%, 6%`,
  } as React.CSSProperties;

  return (
    <div
      className="h-full"
      style={resolvedTheme === "dark" ? darkVariables : lightVariables}
    >
      {block === "Dashboard" && <Dashboard />}
      {block === "Pricing" && <PricingBlock />}
      {block === "Features" && <Features />}
      {block === "Login" && <Login />}
    </div>
  );
}
