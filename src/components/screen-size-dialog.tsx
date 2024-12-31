"use client";
import { useMediaQuery } from "usehooks-ts";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

export default function ScreenSizeDialog() {
  const small = useMediaQuery("(max-width: 862px)");

  return (
    <Dialog open={small}>
      <DialogContent closeBtn={false}>
        <DialogTitle>
          <p>Expand screen size</p>
        </DialogTitle>
        <p>
          gloss currently does not support usage on devices with small screens.
          Please expand your screen size or switch to a larger device to
          proceed.
        </p>
      </DialogContent>
    </Dialog>
  );
}
