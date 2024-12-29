"use server";

import { db } from "@/db";
import { userPreset } from "@/schema";
import { sql } from "drizzle-orm";

export const deletePreset = async (uid: string, presetId: string) => {
    "use server";
    await db.delete(userPreset).where(sql`${userPreset.userId} = ${uid} AND ${userPreset.id} = ${presetId}`);
};