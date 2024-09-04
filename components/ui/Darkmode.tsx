"use client";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface IDarkMode {}

const DarkMode = ({}: IDarkMode) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = (mode: string) => () => {
    setTheme(mode);
  };

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer rounded-full p-2.5 transition duration-500 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-500">
      {currentTheme === "dark" ? (
        <BsFillMoonFill onClick={onClick("light")} className="fill-white" />
      ) : (
        <BsFillSunFill onClick={onClick("dark")} className="fill-black" />
      )}
    </div>
  );
};

export default DarkMode;
