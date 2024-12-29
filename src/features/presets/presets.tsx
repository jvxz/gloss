import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SavePreset from "./save-preset";
import { Scroll } from "lucide-react";
import { getPresets } from "./actions/get";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
import { presetCardColor, styles } from "@/lib/config";

export default async function Presets() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const getUserPresets = async () => {
    if (!session) return;
    const presets = await getPresets(session.user.id);
    return presets;
  };

  const presets = await getUserPresets();
  console.log("presets", JSON.stringify(presets, null, 2));

  return (
    <div className="flex items-center gap-2">
      <SavePreset />
      <Sheet>
        <SheetTrigger>
          <Button>
            <Scroll />
            <p>Presets</p>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="font-serif text-2xl">Presets</SheetTitle>
            <SheetDescription>
              <p>
                Presets are saved to your account, allowing access to any device
                when logged in.
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                {presets?.map((preset) => {
                  return (
                    <div
                      key={preset.id}
                      style={{
                        backgroundColor: presetCardColor(preset.preset.hue),
                      }}
                      className="flex h-24 items-center justify-around gap-2 rounded-md p-2 text-foreground"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <p>{preset.name}</p>
                        {styles.map((e) => {
                          if (e.name === preset.preset.style) {
                            return <e.icon className="size-10" key={e.name} />;
                          }
                        })}
                      </div>
                    </div>
                  );
                })}
              </Suspense>
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 pt-4">{}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
