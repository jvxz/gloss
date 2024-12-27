"use client";
import { useBlockStore } from "@/lib/store/block";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { blocks, type BlockType } from "@/config";

export default function BlockSelect() {
  const { block, setBlock } = useBlockStore();

  return (
    <div className="flex gap-4">
      <ToggleGroup
        value={block}
        onValueChange={(e) => {
          if (!e) return;
          setBlock(e as BlockType);
        }}
        defaultValue="Default"
        type="single"
      >
        {blocks.map((e) => {
          return (
            <ToggleGroupItem className="rounded-3xl px-4" key={e} value={e}>
              {e}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </div>
  );
}
