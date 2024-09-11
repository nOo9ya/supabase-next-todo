import { NextRequest, NextResponse } from "next/server";

const CookieCounter = (request: NextRequest, response: NextResponse) => {
  const COOKIE_COUNTER = "cookie-counter";
  const counter = request.cookies.get(COOKIE_COUNTER);

  if (counter?.value) {
    const prev = counter?.value;
    response.cookies.set(COOKIE_COUNTER, `${Number(prev) + 1}`);
  } else {
    response.cookies.set(COOKIE_COUNTER, "1");
  }

  return response.cookies.get(COOKIE_COUNTER)?.value;
};

export default CookieCounter;
