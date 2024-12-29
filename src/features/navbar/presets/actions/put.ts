"use server";

import { db } from "@/db";
import { userPreset } from "@/schema";

export const putPreset = async (name: string, userId: string, preset: {
    hue: string,
    style: string,
    mode: "colorful" | "monochrome",
}) => {
    await db.insert(userPreset).values({
        createdAt: new Date(),
        id: crypto.randomUUID(),
        name: name || "Untitled",
        preset: {
            hue: preset.hue,
            style: preset.style,
            mode: preset.mode,
        },
        updatedAt: new Date(),
        userId,
    })

};
