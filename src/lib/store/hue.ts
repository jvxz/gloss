import { create } from 'zustand'

interface HueStore {
    hue: number;
    setHue: (val: number) => void;
}
export const useHueStore = create<HueStore>((set) => ({
    hue: 0,
    setHue: (val) => set(() => ({ hue: val }))
}))
