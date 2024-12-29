"use server";

import { db } from "@/db";
import { userPreset } from "@/schema";
import { sql } from "drizzle-orm";

export const getPresets = async (uid: string) => {
    "use server";
    const presets = await db.select().from(userPreset).where(sql`${userPreset.userId} = ${uid}`);
    return presets;
};