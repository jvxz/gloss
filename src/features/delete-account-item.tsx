"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteAccountDialogStore } from "./auth/delete-account-dialog";

export default function DeleteAccountItem() {
  const { open } = useDeleteAccountDialogStore();

  return (
    <DropdownMenuItem
      className="text-destructive hover:text-destructive focus:bg-destructive/10 focus:text-destructive"
      onClick={open}
    >
      Delete account
    </DropdownMenuItem>
  );
}
