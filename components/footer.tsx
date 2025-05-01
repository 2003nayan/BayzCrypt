import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { Toast } from "./ui/toast";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black light:bg-gray-900 text-gray-300 border-t border-cyan-900/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-gradient">BayzCrypt</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              BayzCrypt is the premier NFT marketplace for discovering,
              collecting, and trading digital assets secured by blockchain
              technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Marketplace</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/marketplace"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  All NFTs
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=art"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Art
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=collectibles"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Collectibles
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=photography"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=music"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=virtual-worlds"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Virtual Worlds
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Learn</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/learn"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  What is an NFT?
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/how-to-create"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  How to Create an NFT
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/blockchain-basics"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Blockchain Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/crypto-wallets"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Crypto Wallets
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/investing"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Investing in NFTs
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/faq"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and drops.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                id="newsletter-email"
                className="rounded-l-xl bg-gray-800 border-gray-700 focus:border-cyan-500 text-white"
              />
              <Button
                className="rounded-r-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
                onClick={() => {
                  const emailInput = document.getElementById(
                    "newsletter-email"
                  ) as HTMLInputElement;
                  if (emailInput && emailInput.value) {
                    emailInput.value = "";
                  }
                }}
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BayzCrypt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-cyan-400 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-cyan-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/help"
              className="text-gray-500 hover:text-cyan-400 text-sm"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
