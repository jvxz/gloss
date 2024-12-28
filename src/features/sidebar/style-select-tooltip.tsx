import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export default function StyleSelectTooltip() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="size-4" />
        </TooltipTrigger>
        <TooltipContent side="right" className="max-w-[300px] py-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">What are styles?</p>
            <p className="text-xs text-muted-foreground">
              Styles make up the fundamental scheme of how your hue establishes
              your custom theme. Try out different styles to see how they impact
              your theme!
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
