import { create } from 'zustand'

type Hue = {
    base: number;
    primary: number;
    accent: number;
}

export type HueType = "base" | "primary" | "accent";

interface HueStore {
    hue: Hue;
    setHue: (val: Hue) => void;
    mode: "colorful" | "monochrome";
    setMode: (val: "colorful" | "monochrome") => void;
}
export const useHueStore = create<HueStore>((set) => ({
    hue: {
        base: 185,
        primary: 185,
        accent: 185,
    },
    setHue: (val) => set(() => ({ hue: val })),
    mode: "colorful",
    setMode: (val) => set(() => ({ mode: val })),
}))