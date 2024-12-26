"use client";
import { useBlockStore } from "@/lib/store/block";
import Pricing from "./pricing";
import Features from "./features";

export default function Blocks() {
  const { block } = useBlockStore();

  return (
    <>
      {block === "Pricing" && <Pricing />}
      {block === "Features" && <Features />}
    </>
  );
}
