import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { type StyleName } from "@/lib/config";
import { flocon, charm, eclipse, oasis } from "./hue-formulas/colorful";
import { floconMono, charmMono, eclipseMono, oasisMono } from "./hue-formulas/monochrome";

export type CSSVariables = {
  dark: React.CSSProperties
  light: React.CSSProperties
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatHue(hue: number, type: StyleName, mode: "colorful" | "monochrome") {
  if (mode === "monochrome") {
    switch (type) {
      case "Flocon": return floconMono(hue);
      case "Charm": return charmMono(hue);
      case "Eclipse": return eclipseMono(hue);
      case "Oasis": return oasisMono(hue);
    }
  } else {
    switch (type) {
      case "Flocon": return flocon(hue);
      case "Charm": return charm(hue);
      case "Eclipse": return eclipse(hue);
      case "Oasis": return oasis(hue);
    }
  }
}
