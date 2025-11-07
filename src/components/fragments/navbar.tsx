"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  FolderOpen,
  MessageCircle,
  Moon,
  Pen,
  Sun,
  User2Icon,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeToggle = theme === "dark" ? "light" : "dark";

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        {/* Tombol Trigger */}
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open Menu">
            <Menu />
          </Button>
        </DrawerTrigger>

        {/* Konten Drawer */}
        <DrawerContent className="fixed top-0 right-0 h-full w-[260px] md:w-[320px] border-l border-border/40 rounded-none px-6 py-8">
          <DrawerHeader className="px-0">
            <DrawerTitle className="text-xl font-semibold">
              Navigation
            </DrawerTitle>
          </DrawerHeader>

          <nav className="mt-6 flex flex-col gap-2 w-full">
            <Button
              variant="ghost"
              className="justify-start gap-3"
              onClick={() => handleScroll("#about")}
            >
              <User2Icon /> About
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-3"
              onClick={() => handleScroll("#skills")}
            >
              <Pen /> Skills
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-3"
              onClick={() => handleScroll("#projects")}
            >
              <FolderOpen /> Projects
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-3"
              onClick={() => handleScroll("#contact")}
            >
              <MessageCircle /> Contact
            </Button>
          </nav>

          <div className="mt-auto flex gap-3 items-center w-full pt-10">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setTheme(themeToggle)}
            >
              {theme === "dark" ? (
                <>
                  <Sun /> Light Mode
                </>
              ) : (
                <>
                  <Moon /> Dark Mode
                </>
              )}
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
