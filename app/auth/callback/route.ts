import { NextResponse } from "next/server";
import { createServerSideClient } from "@/lib/server/supabase";

export async function GET(request: Request) {
  const overrideOrigin = process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME;
  const { searchParams, origin } = new URL(request.url);

  // console.log("SearchParams : ", searchParams);
  // console.log("Origin : ", origin);

  const code = searchParams.get("code");
  const next = searchParams.get("next");

  // console.log("Code : ", code);
  // console.log("Next : ", next);

  if (code) {
    const supabase = await createServerSideClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${overrideOrigin}`);
    }

    return NextResponse.redirect(`${overrideOrigin}${next}`);
  }

  return NextResponse.redirect(`${overrideOrigin}`);
}
