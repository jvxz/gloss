"use client";
import { useBlockStore } from "@/lib/store/block";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { blocks, type BlockType } from "@/lib/config";

export default function BlockSelect() {
  const { block, setBlock } = useBlockStore();

  return (
    <ToggleGroup
      value={block}
      className="flex gap-2"
      onValueChange={(e) => {
        if (!e) return;
        setBlock(e as BlockType);
      }}
      defaultValue="Default"
      type="single"
    >
      {blocks.map((e) => {
        return (
          <ToggleGroupItem className="rounded-3xl px-3" key={e} value={e}>
            {e}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
