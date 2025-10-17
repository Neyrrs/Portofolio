"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  FolderOpen,
  Menu,
  MessageCircle,
  Moon,
  Pen,
  Sun,
  User2Icon,
} from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeToggle = theme === "dark" ? "light" : "dark";

  return (
    <div className="w-screen flex justify-start ml-5 h-12 mt-8 fixed top-0 z-50 ">
      <div
        className={`w-10 h-12 transition-all overflow-hidden ease-in-out duration-500 hover:w-78 rounded-md flex gap-4 items-center border-white/40 border-2 bg-primary ${
          theme?.toLowerCase() == "light"
            ? "text-primary-foreground"
            : "text-primary-foreground"
        }`}
      >
        <Button variant={"ghost"} size={"icon"}>
          <Menu width={25} height={25} />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <User2Icon width={25} height={25} />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Pen />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <FolderOpen />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <MessageCircle />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setTheme(themeToggle)}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
