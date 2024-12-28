"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icons from "@/components/ui/icons";
import SignInButton from "@/components/ui/sign-in-button";

export default function SignIn() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <div className="motion-preset-fade flex flex-col gap-4">
        <p className="text-center font-serif text-4xl font-bold">gloss</p>
        <Card className="w-[24vw]">
          <CardHeader>
            <CardTitle className="text-center font-serif text-2xl font-bold">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center">
              Sign in with the following providers
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <SignInButton provider="github">
              <Icons.GitHub />
              GitHub
            </SignInButton>
            <SignInButton provider="discord">
              <Icons.Discord />
              Discord
            </SignInButton>
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
