"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function SignInButton({
  children,
  provider,
  ...props
}: {
  children: React.ReactNode;
  provider: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Button
      onClick={async () => {
        setIsLoading(true);
        await signIn.social({
          provider: provider as "github" | "discord",
          callbackURL: "/",
        });
      }}
      disabled={isLoading}
      data-loading={isLoading}
      className="group relative"
      {...props}
    >
      <span className="flex items-center gap-2 group-data-[loading=true]:text-transparent">
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
