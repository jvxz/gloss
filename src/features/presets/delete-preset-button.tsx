"use client";
import { Trash2 } from "lucide-react";
import { deletePreset } from "./actions/delete-preset";
import { revalidatePresets } from "./actions/revalidate";
import LoadingButton from "@/components/ui/loading-button";

export default function DeletePresetButton({
  presetId,
  uid,
}: {
  presetId: string;
  uid: string | undefined;
}) {
  return (
    <LoadingButton
      onClick={async () => {
        if (!uid) return;
        await deletePreset(uid, presetId);
        await revalidatePresets();
      }}
      variant="ghost"
      size="icon"
      className="duration-[250ms] size-8 translate-x-4 scale-150 text-background opacity-0 transition-all ease-in-out hover:bg-background/30 hover:text-background group-hover:translate-x-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-foreground hover:dark:text-foreground"
    >
      <Trash2 className="size-6" />
    </LoadingButton>
  );
}
