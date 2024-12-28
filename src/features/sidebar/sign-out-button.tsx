"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function SignOutItem() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
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

  return <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>;
}
