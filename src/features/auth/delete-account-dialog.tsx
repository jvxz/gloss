"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { create } from "zustand";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { deletePresets } from "../navbar/presets/actions/delete";

interface DeleteAccountDialogStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export default function DeleteAccountDialog() {
  const router = useRouter();
  const { isOpen, close } = useDeleteAccountDialogStore();

  const handleDelete = async () => {
    const session = await authClient.getSession();
    const uid = session?.data?.user.id;

    if (!uid) return;

    await deletePresets(uid);

    await authClient.deleteUser({
      fetchOptions: {
        onSuccess: () => {
          close();
          router.refresh();
        },
      },
    });
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent onInteractOutside={close}>
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Delete account
          </DialogTitle>
          <DialogDescription>
            Your account data and presets will be permanently deleted. This
            action cannot be undone.
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <LoadingButton onClick={handleDelete} variant="destructive">
              Proceed
            </LoadingButton>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export const useDeleteAccountDialogStore = create<DeleteAccountDialogStore>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }),
);
