import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./sign-out-button";

export default async function SidebarHeader() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

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
                  session.user.image ??
                  `https://avatar.vercel.sh/712364508913465.jpg`
                }
              />
              <AvatarFallback>{session.user.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <SignOutButton />
          </div>
        )}
      </div>
    </header>
  );
}
