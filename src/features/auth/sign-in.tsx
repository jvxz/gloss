"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icons from "@/components/ui/icons";
import SignInButton from "@/components/ui/sign-in-button";
import Link from "next/link";
import { Link as TransitionLink } from "next-view-transitions";

export default function SignIn() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <div className="motion-preset-fade flex flex-col gap-4">
        <TransitionLink
          href="/"
          className="text-center font-serif text-4xl font-bold underline-offset-4 hover:underline"
        >
          gloss
        </TransitionLink>
        <Card className="w-[24vw]">
          <CardHeader>
            <CardTitle className="text-center font-serif text-2xl font-bold">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center">
              Sign in with the following providers
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 py-0 pb-2">
            <SignInButton provider="github">
              <Icons.GitHub />
              GitHub
            </SignInButton>
            <SignInButton provider="discord">
              <Icons.Discord />
              Discord
            </SignInButton>
            <CardFooter className="px-6 pb-0 pt-2">
              <div className="flex w-full justify-center border-t">
                <p className="py-4 text-center text-xs text-neutral-500">
                  Powered by{" "}
                  <Link
                    href="https://better-auth.com"
                    className="underline"
                    target="_blank"
                  >
                    <span className="dark:text-orange-200/90">
                      better-auth.
                    </span>
                  </Link>
                </p>
              </div>
            </CardFooter>
          </CardContent>
        </Card>
        <Button
          variant="link"
          className="text-center text-sm text-muted-foreground hover:text-foreground"
        >
          Learn about how your data is handled
        </Button>
      </div>
    </div>
  );
}
