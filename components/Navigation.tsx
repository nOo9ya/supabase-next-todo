"use client";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import DarkMode from "./ui/Darkmode";
import { useCopyToClipboard } from "usehooks-ts";

const Navigation = ({ ownerUserId = "" }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    const shareLink = `${text}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`Copied:${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <div>
      <div
        className={
          "flex flex-row items-center justify-between border-b border-neutral-700 p-4"
        }
      >
        <h1 className="flex">Navigation</h1>
        <div className="flex flex-row items-center justify-center gap-2.5">
          <DarkMode />
          {ownerUserId && (
            <div className="cursor-pointer rounded-full p-2.5 transition duration-500 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-500">
              <IoShareSocialOutline
                size={18}
                onClick={() => handleCopy("abc")}
                className="stroke-black dark:stroke-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
