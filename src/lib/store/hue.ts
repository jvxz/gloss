import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type HueType = "base" | "primary" | "accent";
type Hue = {
    base: number;
    primary: number;
    accent: number;
}

interface State {
    hue: Hue;
    mode: "colorful" | "monochrome";
}

interface Actions {
    setHue: (val: Hue) => void;
    setMode: (val: State["mode"]) => void;
}

const initialState: State = {
    hue: {
        base: 185,
        primary: 185,
        accent: 185,
    },
    mode: "colorful",
};

function setHue(val: Hue) {
    useHueStore.setState(state => {
        state.hue = val
    })
}

function setMode(val: State["mode"]) {
    useHueStore.setState(state => {
        state.mode = val
    })
}

export const useHueStore = create<State & Actions>()(
    immer((_) => ({
        ...initialState,
        setHue,
        setMode,
    }))
)
