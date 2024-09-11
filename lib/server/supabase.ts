import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase.types";
import { NextRequest, NextResponse } from "next/server";
import { getCookie, setCookie } from "cookies-next";

/**
 * ServerActions, RouterHandler
 * @param serverComponent<boolean>
 *
 * NOTE: RouterHandler
 * Router Handler 는 app/api 폴더안에 생성하여 경로를 생성하고
 * 하위 route.ts 파일안에서 GET, POST, PUT, PATCH, DELETE 를 라우팅한다.
 */
export const createServerSideClient = async (serverComponent = false) => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return;
          cookieStore.set(key, value, options);
        },
        remove: (key, options) => {
          if (serverComponent) return;
          cookieStore.set(key, "", options);
        },
      },
    },
  );
};

/**
 * RSC (React Server Component)
 * cookie 조작이 불가능하므로 serverSideClient 에서 끌어다 쓴다.
 */
export const createServerSideClientRSC = async () => {
  return createServerSideClient(true);
};

/**
 * Middleware - cookies-next 사용
 * @param req
 * @param res
 */
export const createServerSideMiddleware = async (
  req: NextRequest,
  res: NextResponse,
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => getCookie(key, { req, res }),
        set: (key, value, options) => {
          setCookie(key, value, { req, res, ...options });
        },
        remove: (key, options) => {
          setCookie(key, "", { req, res, ...options });
        },
      },
    },
  );
};
