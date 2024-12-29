"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({
  text,
  variant,
}: {
  text: string;
  variant?: ButtonProps["variant"];
}) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant={variant}
      size="icon"
      className="disabled:opacity-100"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied}
    >
      <div
        className={cn(
          "transition-all duration-150",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      >
        <Check
          //   className="stroke-emerald-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <div
        className={cn(
          "absolute transition-all duration-150",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
      >
        <Copy size={16} strokeWidth={2} aria-hidden="true" />
      </div>
    </Button>
  );
}
