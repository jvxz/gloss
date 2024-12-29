"use client";

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
import { presetCardColor, styles } from "@/lib/config";
import { useHueStore } from "@/lib/store/hue";
import { useStyleStore } from "@/lib/store/style";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { putPreset } from "./actions/put";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/hooks/use-toast";
import { revalidatePresets } from "./actions/revalidate";

export default function SavePreset() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const { style } = useStyleStore();
  const { hue, mode } = useHueStore();

  const presetHue = mode === "colorful" ? hue.base.toString() : "200";

  const uid = authClient.useSession().data?.user.id;

  const preset = {
    hue: hue.base.toString(),
    style,
  };

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
          <DialogTitle className="font-serif text-2xl">Save preset</DialogTitle>
          <DialogDescription>
            The following preset will be saved:
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            backgroundColor: presetCardColor(presetHue),
          }}
          className="flex h-24 items-center justify-around gap-2 rounded-md p-2"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-background dark:text-foreground">
            <p>{name ? name : "Untitled"}</p>
            {styles.map((e) => {
              if (e.name === style) {
                return <e.icon className="size-10" key={e.name} />;
              }
            })}
          </div>
        </div>
        <Input
          placeholder="Preset name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button
              onClick={async () => {
                if (!uid) throw new Error("User not found");
                await putPreset(name, uid, preset);
                await revalidatePresets();
                toast({
                  title: "Preset saved",
                  description: "Your preset has been saved",
                });
                setName("");
              }}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
