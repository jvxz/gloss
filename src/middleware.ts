import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";
import { isMobile } from "./lib/utils";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
    const mobile = isMobile(request.headers.get("user-agent"));
    if (mobile) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const { data: session } = await betterFetch<Session>(
        "/api/auth/get-session",
        {
            baseURL: request.nextUrl.origin,
            headers: {
                //get the cookie from the request
                cookie: request.headers.get("cookie") ?? "",
            },
        },
    );

    if (session) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/sign-in", "/privacy"],
};
