import { NextRequest, NextResponse } from "next/server";
import CookieCounter from "@/middlewares/CookieCounter";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cookie counter middleware
  const cookieCounter = CookieCounter(request, response);
  console.log("cookie counter => ", cookieCounter);

  return response;
}

export const config = {
  matcher: ["/", "/todos", "/api/:path*"],
};
