import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session && req.nextUrl.pathname === "/sign-in") {
        return NextResponse.redirect(new URL("/", req.url));
    }
}