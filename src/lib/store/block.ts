import { create } from 'zustand'
import { type BlockType } from "@/lib/config"

interface BlockStore {
    block: BlockType;
    setBlock: (block: BlockType) => void;
}
export const useBlockStore = create<BlockStore>((set) => ({
    block: "Cards",
    setBlock: (block) => set({ block }),
}));
