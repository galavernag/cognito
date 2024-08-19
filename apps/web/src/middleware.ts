import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { env } from "./lib/env";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { get_user } from "./actions/get-user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const token = cookiesStore.get("cognito.token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const { payload } = await jose.jwtVerify(token.value, env.JWT_SECRET);

  if (!payload) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/app"],
};
