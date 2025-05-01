"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Layers,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { nfts } from "@/lib/data";
import NFTCard from "@/components/nft-card";
import Footer from "@/components/footer";
import CountUp from "@/components/count-up";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black dark:bg-black light:bg-gray-900 min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>

        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black dark:to-black light:to-gray-900 opacity-70"></div>

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* 3D-like NFT Cards floating */}
        <div
          className="absolute -right-20 top-1/4 transform rotate-12 animate-float opacity-80 hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden">
            <Image
              src="/images/nft1.png"
              alt="NFT"
              width={256}
              height={256}
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
          </div>
        </div>

        <div
          className="absolute -left-10 bottom-1/4 transform -rotate-12 animate-float opacity-80 hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden">
            <Image
              src="/images/nft2.png"
              alt="NFT"
              width={192}
              height={192}
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
          </div>
        </div>

        <div className="container relative z-10 px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              The Future of Digital Ownership
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              BayzCrypt
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white dark:text-white light:text-gray-800">
              Discover, Collect & Trade <br className="hidden md:block" />
              <span className="text-cyan-400">Extraordinary NFTs</span>
            </h2>

            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-10 max-w-2xl">
              The next generation marketplace for non-fungible tokens. Buy,
              sell, and discover exclusive digital assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/marketplace">
                <Button
                  size="lg"
                  className="rounded-xl text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium w-full sm:w-auto"
                >
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/learn">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl text-lg px-8 py-6 border-cyan-500/50 text-white dark:text-white light:text-gray-800 hover:bg-cyan-500/10 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black dark:bg-black light:bg-gray-900 border-t border-cyan-900/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={10} suffix="K+" />
              </p>
              <p className="text-gray-400">Artworks</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={3.5} decimals={1} suffix="K+" />
              </p>
              <p className="text-gray-400">Artists</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={18} suffix="K+" />
              </p>
              <p className="text-gray-400">Collectors</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={32} suffix="M+" />
              </p>
              <p className="text-gray-400">Trading Volume</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-gray-900 light:to-gray-800 relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>

        <div className="container px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-800">
              <span className="text-gradient">Featured</span> Collections
            </h2>
            <Link
              href="/marketplace"
              className="text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              View all collections
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cyber Punks",
                creator: "CyberLabs",
                items: 10000,
                image: "/images/collection1.png",
                banner: "/images/banner1.png",
              },
              {
                name: "Digital Dreams",
                creator: "NeoArtist",
                items: 5000,
                image: "/images/collection2.png",
                banner: "/images/banner2.png",
              },
              {
                name: "Quantum Art",
                creator: "QuantumCollective",
                items: 3000,
                image: "/images/collection3.png",
                banner: "/images/banner3.png",
              },
            ].map((collection, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-gray-900/50 dark:bg-gray-900/50 light:bg-gray-200/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <Image
                    src={collection.banner || "/placeholder.svg"}
                    alt={collection.name}
                    width={600}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 pt-0 relative">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border-4 border-gray-900 dark:border-gray-900 light:border-gray-200 -mt-10 mb-3 bg-gray-800 dark:bg-gray-800 light:bg-gray-100">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-bold text-xl text-white dark:text-white light:text-gray-800 mb-1">
                    {collection.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className="text-gray-400">By {collection.creator}</p>
                    <p className="text-cyan-400">
                      {collection.items.toLocaleString()} items
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending NFTs */}
      <section className="py-20 bg-gray-900 dark:bg-gray-900 light:bg-gray-800 relative">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>

        <div className="container px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-800">
              <span className="text-gradient">Trending</span> NFTs
            </h2>
            <Link
              href="/marketplace"
              className="text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              View all NFTs
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nfts.slice(0, 4).map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black dark:bg-black light:bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-800 mb-4">
              How <span className="text-gradient">BayzCrypt</span> Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting started with NFTs has never been easier. Follow these
              simple steps to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-cyan-400" />,
                title: "Connect Wallet",
                description:
                  "Link your cryptocurrency wallet to start buying, selling, and creating NFTs on our platform.",
              },
              {
                icon: <Layers className="h-10 w-10 text-cyan-400" />,
                title: "Create or Collect",
                description:
                  "Upload your digital creations as NFTs or browse the marketplace to collect unique digital assets.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
                title: "Trade & Earn",
                description:
                  "Buy, sell, and trade NFTs in our marketplace. Earn rewards and build your digital portfolio.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-gray-900/50 dark:bg-gray-900/50 light:bg-gray-200/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-900/80 dark:hover:bg-gray-900/80 light:hover:bg-gray-300/50"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-teal-900/50 dark:from-cyan-900/50 dark:to-teal-900/50 light:from-cyan-800/30 light:to-teal-800/30 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-800 mb-6">
              Ready to Start Your NFT Journey?
            </h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 text-lg">
              Join thousands of artists and collectors in the world's most
              innovative NFT marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace">
                <Button
                  size="lg"
                  className="rounded-xl text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium w-full sm:w-auto"
                >
                  Explore Marketplace
                </Button>
              </Link>

              <Link href="/mint">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl text-lg px-8 py-6 border-cyan-500/50 text-white dark:text-white light:text-gray-800 hover:bg-cyan-500/10 w-full sm:w-auto"
                >
                  Create NFT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
