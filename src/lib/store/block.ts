import { create } from 'zustand'
import { type BlockType } from "@/config"

interface BlockStore {
    block: BlockType;
    setBlock: (block: BlockType) => void;
}
export const useBlockStore = create<BlockStore>((set) => ({
    block: "Dashboard",
    setBlock: (block) => set({ block }),
}));
