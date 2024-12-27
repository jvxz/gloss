import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="destructive" className="group">
      <RefreshCcw className="transition-all group-hover:rotate-90" />
      Reset
    </Button>
  );
}
