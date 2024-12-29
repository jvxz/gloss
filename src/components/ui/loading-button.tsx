"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function LoadingButton({
  onClick,
  variant,
  children,
  size,
  className,
}: {
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  children: React.ReactNode;
  size?: ButtonProps["size"];
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick?.();
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      size={size}
      disabled={isLoading}
      data-loading={isLoading}
      className={cn("group relative", className)}
    >
      <span className="group-data-[loading=true]:text-transparent">
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircle
            className="animate-spin"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      )}
    </Button>
  );
}
