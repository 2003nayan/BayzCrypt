"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function WhatIsNFTPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <Link href="/learn" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Learn
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What is an <span className="text-gradient">NFT</span>?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Understanding non-fungible tokens and their impact on digital ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert">
              <h2>Definition of NFTs</h2>
              <p>
                NFT stands for <strong>Non-Fungible Token</strong>. Unlike cryptocurrencies such as Bitcoin or Ethereum,
                which are fungible (meaning each unit is identical to another), NFTs are unique digital assets that
                represent ownership of a specific item or piece of content.
              </p>

              <p>
                Each NFT contains unique identification codes and metadata that distinguish them from each other. This
                uniqueness is what gives NFTs their value and makes them different from cryptocurrencies.
              </p>

              <h2>How NFTs Work</h2>
              <p>
                NFTs are typically created, or "minted," from digital objects that represent both tangible and
                intangible items, including:
              </p>

              <ul>
                <li>Digital artwork</li>
                <li>GIFs</li>
                <li>Videos and sports highlights</li>
                <li>Collectibles</li>
                <li>Virtual avatars and video game skins</li>
                <li>Designer sneakers</li>
                <li>Music</li>
              </ul>

              <p>
                NFTs are stored on a blockchain—a distributed public ledger that records transactions. Specifically,
                NFTs are typically held on the Ethereum blockchain, although other blockchains support them as well.
              </p>

              <h2>What Makes NFTs Valuable?</h2>
              <p>The value of an NFT comes from several factors:</p>

              <ul>
                <li>
                  <strong>Scarcity:</strong> NFTs can have limited editions or be one-of-a-kind, creating scarcity.
                </li>
                <li>
                  <strong>Ownership:</strong> They provide verifiable ownership of digital assets.
                </li>
                <li>
                  <strong>Authenticity:</strong> The blockchain ensures the authenticity of the NFT.
                </li>
                <li>
                  <strong>Transferability:</strong> NFTs can be bought, sold, and traded on various marketplaces.
                </li>
                <li>
                  <strong>Royalties:</strong> Creators can receive royalties for future sales of their NFTs.
                </li>
              </ul>

              <h2>NFTs vs. Cryptocurrencies</h2>
              <p>The main difference between NFTs and cryptocurrencies is fungibility:</p>

              <ul>
                <li>
                  <strong>Cryptocurrencies:</strong> Fungible, meaning one Bitcoin is identical to another Bitcoin.
                </li>
                <li>
                  <strong>NFTs:</strong> Non-fungible, meaning each token is unique and cannot be exchanged on a
                  like-for-like basis.
                </li>
              </ul>

              <h2>Use Cases for NFTs</h2>
              <p>NFTs have a wide range of applications:</p>

              <ul>
                <li>
                  <strong>Digital Art:</strong> Artists can sell their work directly to collectors without
                  intermediaries.
                </li>
                <li>
                  <strong>Collectibles:</strong> Digital trading cards, virtual real estate, and other collectibles.
                </li>
                <li>
                  <strong>Gaming:</strong> In-game items that can be bought, sold, and used across different games.
                </li>
                <li>
                  <strong>Music and Entertainment:</strong> Musicians can sell limited editions of their music as NFTs.
                </li>
                <li>
                  <strong>Identity and Certification:</strong> NFTs can represent certificates, licenses, or
                  credentials.
                </li>
              </ul>

              <h2>The Future of NFTs</h2>
              <p>
                As the technology evolves, NFTs are likely to find new applications beyond digital art and collectibles.
                They could revolutionize how we think about ownership, intellectual property, and digital identity in
                the future.
              </p>

              <p>
                The NFT space is still in its early stages, and we're just beginning to explore the possibilities of
                this technology. As more creators, collectors, and innovators enter the space, we can expect to see new
                and exciting developments in the world of NFTs.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/learn/blockchain-basics">
                <Button variant="outline" className="rounded-xl border-cyan-500/50 text-white hover:bg-cyan-500/10">
                  Next: Blockchain Basics
                </Button>
              </Link>

              <Link href="/marketplace">
                <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium">
                  Explore NFTs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>

        <div className="container px-4 relative">
          <h2 className="text-2xl font-bold text-white mb-8">Related Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Blockchain Basics",
                description: "Understand the technology behind NFTs.",
                link: "/learn/blockchain-basics",
              },
              {
                title: "How to Create an NFT",
                description: "Learn how to mint your own NFTs.",
                link: "/learn/how-to-create",
              },
              {
                title: "Investing in NFTs",
                description: "Tips for collecting and investing in NFTs.",
                link: "/learn/investing",
              },
            ].map((topic, i) => (
              <Link href={topic.link} key={i}>
                <div className="rounded-xl p-6 bg-gray-800/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-gray-400">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
