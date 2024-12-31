"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <Button
      asChild
      className="text-md group mx-0 mb-4 px-0"
      variant="link"
      onClick={() => router.back()}
    >
      <Link href="/auth/sign-in">
        <ChevronLeft
          className="!size-5 opacity-60 transition-opacity group-hover:opacity-100"
          strokeWidth={2}
          aria-hidden="true"
        />
        Go back
      </Link>
    </Button>
  );
}
