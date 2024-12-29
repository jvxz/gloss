"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function LoadingButton({
  onClick,
  variant,
  children,
}: {
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  children: React.ReactNode;
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
      disabled={isLoading}
      data-loading={isLoading}
      className="group relative"
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
