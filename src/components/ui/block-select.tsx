"use client";
import { useBlockStore } from "@/lib/store/block";
import { Button } from "./button";

export default function BlockSelect() {
  const { block, setBlock } = useBlockStore();

  return (
    <div className="flex gap-2">
      <Button
        variant={block === "pricing" ? "default" : "outline"}
        onClick={() => setBlock("pricing")}
      >
        Pricing
      </Button>
      <Button
        variant={block === "login" ? "default" : "outline"}
        onClick={() => setBlock("login")}
      >
        Login
      </Button>
      <Button
        variant={block === "default" ? "default" : "outline"}
        onClick={() => setBlock("default")}
      >
        Default
      </Button>
    </div>
  );
}
