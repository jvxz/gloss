import Blocks from "@/features/blocks/blocks";
import Sidebar from "@/features/sidebar/sidebar";
import Navbar from "@/features/navbar/navbar";
export default function Page() {
  return (
    <>
      <Sidebar />
      <section className="flex h-screen w-full flex-col">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <div className="motion-preset-focus-sm h-full overflow-y-auto">
            <Blocks />
          </div>
        </div>
      </section>
    </>
  );
}
