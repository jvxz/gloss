import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { session } from "@/schema";
import { account, verification } from "@/schema";
import { user } from "@/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        schema: {
            user: user,
            session: session,
            account: account,
            verification: verification,
        },
        provider: "pg",
    }),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }
    }
});