"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    setIsLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
    toast({
      description: "You have been signed out.",
    });
  };

  return (
    <Button
      onClick={handleSignOut}
      disabled={isLoading}
      data-loading={isLoading}
      className="group relative"
    >
      <span className="flex items-center gap-2 group-data-[loading=true]:text-transparent">
        Sign out
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
