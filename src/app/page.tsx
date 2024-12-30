import Blocks from "@/features/blocks/blocks";
import Sidebar from "@/features/sidebar/sidebar";
import Navbar from "@/features/navbar/navbar";
import { headers } from "next/headers";
import { isMobile } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default async function Page() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  const mobile = isMobile(userAgent);

  return !mobile ? (
    <main className="h-screen md:flex">
      <Sidebar />
      <section className="flex h-screen w-full flex-col">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <div className="motion-preset-focus-sm h-full overflow-y-auto">
            <Blocks />
          </div>
        </div>
      </section>
    </main>
  ) : (
    <div className="motion-preset-fade grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center font-serif text-4xl font-bold">gloss</p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">
              Unsupported device
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              gloss is currently unsupported on mobile devices. Please switch to
              a desktop device to proceed.
            </p>
          </CardContent>
        </Card>
        <Button asChild variant="link" className="gap-2">
          <Link href="https://github.com/jvxz/gloss">
            <Github />
            Source code
          </Link>
        </Button>
      </div>
    </div>
  );
}
