"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";

const AuthUi = () => {
  const [user, setUser]: any = useState();
  const isMount = useHydrate();
  const supabase = createSupabaseBrowserClient();

  const getUserInfo = useCallback(async () => {
    const auth = await supabase.auth.getUser();
    console.log(auth);
    if (auth?.data?.user) {
      setUser(auth?.data?.user);
    }
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  // Auth UI 사용 안하고 싶으면 아래와 같이 콜백 핸들링 함수를 이용하여 로그인할 수 있다.
  // 수동 로그인 콜백 핸들링
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  // 수동 로그인 콜백 핸들링
  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  if (!isMount) return null;

  return (
    <section className={"w-full"}>
      <div>login state: {user ? `${user?.email}` : "logout"}</div>
      <>
        {user && (
          <button
            onClick={handleLogout}
            className={"border-2 border-black p-2.5"}
          >
            logout
          </button>
        )}
      </>
      <div className={"mx-auto max-w-[500px]"}>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          onlyThirdPartyProviders
          providers={["google", "github"]}
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
        />
      </div>
    </section>
  );
};

export default AuthUi;
