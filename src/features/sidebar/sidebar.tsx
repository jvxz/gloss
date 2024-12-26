import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <section className="top-0 h-screen min-w-[25%] border-r border-border">
      <div className="flex h-20 items-center justify-between border-b border-border px-6">
        <h1 className="text-3xl font-bold">gloss</h1>
      </div>
      <div className="flex w-fit items-center justify-center rounded-md border border-border p-1 *:flex-1"></div>
    </section>
  );
}
