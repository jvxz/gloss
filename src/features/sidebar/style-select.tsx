"use client";
import { Button } from "@/components/ui/button";
import { styles } from "@/lib/config";
import { useStyleStore } from "@/lib/store/style";

export default function StyleSelect() {
  const { style, setStyle } = useStyleStore();

  return (
    <div className="flex gap-2 *:flex-1">
      {styles.map((e) => {
        return (
          <Button
            onClick={() => {
              setStyle(e.name);
            }}
            variant="outline"
            className={`flex h-28 flex-col gap-4 ${
              style === e.name ? "border-2 border-foreground bg-muted" : ""
            }`}
            key={e.name}
          >
            <e.icon className="!size-8" />
            {e.name}
          </Button>
        );
      })}
    </div>
  );
}
