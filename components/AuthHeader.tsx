"use client";
import { User } from "@supabase/supabase-js";
import React from "react";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import DarkMode from "./ui/Darkmode";
import { useCopyToClipboard } from "usehooks-ts";

interface AuthHeaderProps {
  user?: User | null;
}

const AuthHeader = ({ user }: AuthHeaderProps) => {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    const shareLink = `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/share/${user?.id}`;
    copy(shareLink)
      .then(() => {
        window.alert(`Copied:${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const goToHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div>
      <div
        className={
          "flex flex-row items-center justify-between border-b border-neutral-700 p-4"
        }
      >
        <h1 className="flex cursor-pointer" onClick={goToHome}>
          TODO
        </h1>
        <div className="flex flex-row items-center justify-center gap-2.5">
          <DarkMode />

          {!isLoggedIn ? (
            <button
              onClick={handleGoogleLogin}
              className={
                "flex flex-row items-center gap-2 rounded-2xl border border-neutral-500 px-2.5 py-1.5 text-xs"
              }
            >
              login
              <FcGoogle size={16} />
            </button>
          ) : (
            <>
              <div className="cursor-pointer rounded-full p-2.5 transition duration-500 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-500">
                <IoShareSocialOutline
                  size={18}
                  onClick={handleCopy}
                  className="stroke-black dark:stroke-white"
                />
              </div>
              <button
                onClick={handleLogout}
                className={
                  "flex flex-row items-center gap-2 rounded-2xl border border-neutral-500 px-2.5 py-1.5 text-xs"
                }
              >
                logout
                <AiOutlineLogout size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
