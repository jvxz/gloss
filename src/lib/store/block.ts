import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { type BlockType } from "../config";

type State = {
    block: BlockType;
};

type Actions = {
    setBlock: (block: BlockType) => void;
};

const initialState: State = {
    block: "Cards"
};

export const useBlockStore = create(
    immer<State & Actions>((_) => ({
        ...initialState,
        setBlock,
    }))
);

function setBlock(val: BlockType) {
    useBlockStore.setState(state => {
        state.block = val
    })
}