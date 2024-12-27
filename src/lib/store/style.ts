import { type StyleName } from "@/config";
import { create } from 'zustand'

interface StyleStore {
    style: StyleName;
    setStyle: (val: StyleName) => void;
}

export const useStyleStore = create<StyleStore>((set) => ({
    style: "Eclipse",
    setStyle: (name) => set({
        style: name
    }),
}));
