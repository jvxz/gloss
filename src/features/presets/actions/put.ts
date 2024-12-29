"use server";

import { db } from "@/db";
import { userPreset } from "@/schema";

export const putPreset = async (name: string, userId: string, preset: {
    hue: string,
    style: string,
}) => {
    await db.insert(userPreset).values({
        createdAt: new Date(),
        id: crypto.randomUUID(),
        name: name || "Untitled",
        preset,
        updatedAt: new Date(),
        userId,
    })

};
