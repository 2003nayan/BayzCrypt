"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Wallet, Layers, Shield, DollarSign, HelpCircle, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn About <span className="text-gradient">NFTs</span> & Web3
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Your comprehensive guide to understanding non-fungible tokens, blockchain technology, and the future of
              digital ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-cyan-400" />,
                title: "What is an NFT?",
                description: "Learn the basics of non-fungible tokens and how they differ from cryptocurrencies.",
                link: "/learn/what-is-an-nft",
              },
              {
                icon: <Wallet className="h-8 w-8 text-cyan-400" />,
                title: "Crypto Wallets",
                description: "Understand how to set up and use cryptocurrency wallets to store and trade NFTs.",
                link: "/learn/crypto-wallets",
              },
              {
                icon: <Layers className="h-8 w-8 text-cyan-400" />,
                title: "Blockchain Basics",
                description: "Explore the fundamentals of blockchain technology that powers the NFT ecosystem.",
                link: "/learn/blockchain-basics",
              },
              {
                icon: <Shield className="h-8 w-8 text-cyan-400" />,
                title: "How to Create an NFT",
                description: "Step-by-step guide to creating, minting, and listing your first NFT on BayzCrypt.",
                link: "/learn/how-to-create",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-cyan-400" />,
                title: "Investing in NFTs",
                description: "Strategies, tips, and considerations for investing in the NFT market.",
                link: "/learn/investing",
              },
              {
                icon: <HelpCircle className="h-8 w-8 text-cyan-400" />,
                title: "FAQ",
                description: "Answers to the most common questions about NFTs, blockchain, and BayzCrypt.",
                link: "/learn/faq",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 bg-gray-800/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <Link href={item.link}>
                  <Button
                    variant="link"
                    className="p-0 text-cyan-400 hover:text-cyan-300 group-hover:underline flex items-center"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Getting Started with <span className="text-gradient">BayzCrypt</span>
            </h2>
            <p className="text-gray-400 mb-10 text-center">
              Follow these simple steps to begin your journey into the world of NFTs.
            </p>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Set Up a Crypto Wallet",
                  description:
                    "Start by setting up a cryptocurrency wallet like MetaMask or Coinbase Wallet to store your digital assets and connect to BayzCrypt.",
                },
                {
                  number: "02",
                  title: "Connect Your Wallet",
                  description:
                    "Link your wallet to BayzCrypt by clicking the 'Connect Wallet' button in the top right corner of the website.",
                },
                {
                  number: "03",
                  title: "Add Funds to Your Wallet",
                  description:
                    "Purchase cryptocurrency (ETH) through your wallet or a cryptocurrency exchange to use for buying NFTs.",
                },
                {
                  number: "04",
                  title: "Explore the Marketplace",
                  description:
                    "Browse through collections, discover artists, and find NFTs that interest you on the BayzCrypt marketplace.",
                },
                {
                  number: "05",
                  title: "Make Your First Purchase",
                  description:
                    "When you find an NFT you want to own, click 'Buy Now' and confirm the transaction through your wallet.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/marketplace">
                <Button className="rounded-xl px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium">
                  Start Exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
