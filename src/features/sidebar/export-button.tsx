"use client";
import { CodeBlock } from "react-code-block";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download, Loader2 } from "lucide-react";
import { formatHue } from "@/lib/utils";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";
import exportTheme from "@/lib/hue-formulas/export";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";
import CopyButton from "./copy-button";
import CommandCopy from "./command-copy";

export default function ExportButton() {
  const { hue, mode } = useHueStore();
  const { style } = useStyleStore();
  const variables = formatHue(hue.base, style, mode);

  const { data, refetch } = useQuery({
    queryKey: ["export-theme"],
    queryFn: () => exportTheme(variables),
  });

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          onClick={async () => {
            await refetch();
          }}
          className="w-full"
        >
          <Download />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Export theme
          </DialogTitle>
          <DialogDescription>
            Run the provided command in your terminal, or manually copy the
            variables to your globals.css
          </DialogDescription>
        </DialogHeader>
        {data ? (
          <>
            <CommandCopy
              command={`npx shadcn@latest add https://gloss.wisp.bio/api/theme/${hue.base}-${style}-${mode}`}
            />
            <ScrollArea
              scrollbar={false}
              className="relative h-[450px] rounded-sm border border-border bg-black p-4 text-xs dark:bg-black/50"
            >
              <div className="absolute right-0 top-0 p-2">
                <CopyButton text={data} variant="ghost" />
              </div>
              <CodeBlock code={data} language="css">
                <CodeBlock.Code className="">
                  <CodeBlock.LineContent>
                    <CodeBlock.Token />
                  </CodeBlock.LineContent>
                </CodeBlock.Code>
              </CodeBlock>
            </ScrollArea>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
