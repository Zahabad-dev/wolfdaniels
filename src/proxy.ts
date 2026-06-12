import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoginPage = pathname === "/crm/login";

  if (!req.auth && !isLoginPage) {
    const loginUrl = new URL("/crm/login", req.nextUrl);
    return NextResponse.redirect(loginUrl);
  }

  if (req.auth && isLoginPage) {
    return NextResponse.redirect(new URL("/crm", req.nextUrl));
  }
});

export const config = {
  matcher: ["/crm/:path*"],
};
