"use client";

import { useBlockStore } from "@/lib/store/block";
import Pricing from "./pricing";

export default function Blocks() {
  const { block } = useBlockStore();

  return block === "pricing" ? <Pricing /> : null;
}
