"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ConnectWalletButton } from "@/components/connect-wallet-button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Mint", path: "/mint" },
  { name: "My Collection", path: "/collection" },
  { name: "Learn", path: "/learn" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-cyan-900/30 backdrop-blur-sm transition-all duration-300",
        scrolled
          ? "bg-black/80 dark:bg-black/80 bg-white/80 light:bg-white/80"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl hidden sm:inline-block text-gradient">
            BayzCrypt
          </span>
        </Link>

        {/* Navigation items in the center */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600",
                  pathname === item.path
                    ? "text-cyan-400 dark:text-cyan-400 light:text-cyan-600"
                    : "text-gray-300 dark:text-gray-300 light:text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Connect wallet and mobile menu on the right */}
        <div className="flex items-center gap-2">
          {/* <ModeToggle /> */}
          <ConnectWalletButton />

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-cyan-900/50 text-white dark:text-white light:text-gray-800 hover:bg-cyan-900/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-cyan-900/30 bg-black/90 dark:bg-black/90 light:bg-white/90"
          >
            <div className="container py-4 px-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-cyan-400 p-2 rounded-md",
                      pathname === item.path
                        ? "bg-cyan-900/20 text-cyan-400"
                        : "text-gray-300 dark:text-gray-300 light:text-gray-700"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
