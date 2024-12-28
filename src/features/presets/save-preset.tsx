import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { styles } from "@/config";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SavePreset() {
  const { style } = useStyleStore();
  const { hue, mode } = useHueStore();

  const presetColor =
    mode === "colorful"
      ? `hsl(${hue.base}, 40%, 35%)`
      : `hsl(${hue.base}, 0%, 35%)`;

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus />
          <p>Save</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Save preset</DialogTitle>
          <DialogDescription>
            The following preset will be saved:
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            backgroundColor: presetColor,
          }}
          className="flex h-24 items-center justify-around gap-2 rounded-md p-2"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-background dark:text-foreground">
            <p>Untitled</p>
            {styles.map((e) => {
              if (e.name === style) {
                return <e.icon className="size-10" key={e.name} />;
              }
            })}
          </div>
        </div>
        <Input placeholder="Preset name" />
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
