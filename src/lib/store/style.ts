import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { type StyleName } from "../config";

type State = {
    style: StyleName;
};

type Actions = {
    setStyle: (val: StyleName) => void;
};

const initialState: State = {
    style: "Eclipse",
}

export const useStyleStore = create(
    immer<State & Actions>((_) => ({
        ...initialState,
        setStyle,
    }))
);

function setStyle(val: StyleName) {
    useStyleStore.setState(state => {
        state.style = val
    })
}