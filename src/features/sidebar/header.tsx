"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function SidebarHeader() {
  const router = useRouter();
  const session = useSession();

  return (
    <header className="flex h-20 items-center justify-between border-b border-border px-6">
      <div className="flex items-end gap-1">
        <h1 className="text-shadow-lg font-serif text-3xl font-bold text-shadow-background/60">
          gloss
        </h1>
        <p className="text-sm text-muted-foreground">v0.0.1</p>
      </div>
      <div className="flex items-center gap-2">
        {!session ? (
          <Link href="/auth/sign-in">
            <Button>Sign in</Button>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage
                src={
                  session.data?.user.image ??
                  `https://avatar.vercel.sh/712364508913465.jpg`
                }
              />
              <AvatarFallback>
                {session.data?.user.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <Button
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
            >
              Sign out
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
