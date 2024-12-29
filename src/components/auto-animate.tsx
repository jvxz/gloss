"use client";

import autoAnimate from "@formkit/auto-animate";
import { useRef } from "react";
import { useEffect } from "react";

export const AutoAnimateParent = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  const parent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!parent.current) return;
    autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent} className="relative" {...props}>
      {children}
    </div>
  );
};
