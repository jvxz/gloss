import { create } from 'zustand'

interface BlockStore {
    block: string;
    setBlock: (block: string) => void;
}
export const useBlockStore = create<BlockStore>((set) => ({
    block: "pricing",
    setBlock: (block) => set({ block }),
}));
