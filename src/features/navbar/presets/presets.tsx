import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SavePreset from "./save-preset-dialog";
import { Scroll, Loader2, FileX2 } from "lucide-react";
import { getPresets } from "./actions/get";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
import { presetCardColor, styles } from "@/lib/config";
import { AutoAnimateParent } from "@/components/auto-animate";
import DeletePresetButton from "./delete-preset-button";
import ApplyPresetButton from "./apply-preset-button";

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

  return (
    <div className="flex items-center gap-2">
      <SavePreset disabled={!session} />
      <Sheet>
        <SheetTrigger disabled={!session}>
          <Button disabled={!session}>
            <Scroll />
            <p>Presets</p>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="font-serif text-2xl">Presets</SheetTitle>
            <SheetDescription className="h-full">
              <p>
                Presets are saved to your account, allowing access to any device
                when logged in.
              </p>
            </SheetDescription>
          </SheetHeader>
          <Suspense fallback={<Loader2 className="size-4 animate-spin" />}>
            <AutoAnimateParent className="h-full pt-2">
              {presets && presets.length > 0 ? (
                presets?.map((preset) => {
                  return (
                    <div
                      key={preset.id}
                      style={{
                        backgroundColor:
                          preset.preset.mode === "colorful"
                            ? presetCardColor(preset.preset.hue)
                            : "hsl(0, 0%, 50%)",
                      }}
                      className="group my-4 flex h-24 items-center justify-evenly gap-2 rounded-md p-2 text-background dark:text-foreground"
                    >
                      <SheetClose>
                        <ApplyPresetButton preset={preset.preset} />
                      </SheetClose>
                      <div className="flex flex-col items-center justify-center gap-2">
                        <p className="pointer-events-none">{preset.name}</p>
                        {styles.map((e) => {
                          if (e.name === preset.preset.style) {
                            return <e.icon className="size-10" key={e.name} />;
                          }
                        })}
                      </div>
                      <DeletePresetButton
                        presetId={preset.id}
                        uid={session?.user.id}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="motion-preset-fade grid h-full place-items-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileX2 className="size-10" />
                    <p>No presets saved</p>
                  </div>
                </div>
              )}
            </AutoAnimateParent>
          </Suspense>
        </SheetContent>
      </Sheet>
    </div>
  );
}
