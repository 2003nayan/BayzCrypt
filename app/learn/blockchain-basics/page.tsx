"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function BlockchainBasicsPage() {
  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-gray-100">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-gray-900 light:to-gray-800 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <Link href="/learn" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Learn
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white light:text-gray-800">
              Blockchain <span className="text-gradient">Basics</span>
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl">
              Understanding the technology that powers NFTs and cryptocurrencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900 dark:bg-gray-900 light:bg-gray-100 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert light:prose-gray max-w-none">
              <h2>What is Blockchain?</h2>
              <p>
                A blockchain is a distributed, decentralized, and typically public digital ledger consisting of records
                called blocks that are used to record transactions across many computers. This ensures that any involved
                block cannot be altered retroactively, without the alteration of all subsequent blocks.
              </p>

              <div className="my-8 rounded-xl overflow-hidden">
                <Image src="/images/banner1.png" alt="Blockchain Concept" width={800} height={400} className="w-full" />
              </div>

              <h2>Key Characteristics of Blockchain</h2>
              <ul>
                <li>
                  <strong>Decentralization:</strong> No single entity has control over the entire blockchain. It's
                  maintained by a network of computers (nodes) around the world.
                </li>
                <li>
                  <strong>Transparency:</strong> All transactions on a public blockchain are visible to anyone
                  participating in the network.
                </li>
                <li>
                  <strong>Immutability:</strong> Once data is recorded on a blockchain, it's extremely difficult to
                  change or remove.
                </li>
                <li>
                  <strong>Security:</strong> Cryptographic techniques ensure that transactions are secure and that data
                  cannot be tampered with.
                </li>
                <li>
                  <strong>Consensus:</strong> Blockchain networks use various consensus mechanisms to agree on the state
                  of the ledger.
                </li>
              </ul>

              <h2>How Blockchain Works</h2>
              <p>
                At its core, a blockchain is a chain of blocks, where each block contains a list of transactions. Here's
                a simplified explanation of how it works:
              </p>

              <ol>
                <li>
                  <strong>Transaction Initiation:</strong> A user initiates a transaction (e.g., sending cryptocurrency
                  or creating an NFT).
                </li>
                <li>
                  <strong>Transaction Verification:</strong> The transaction is broadcast to a network of computers
                  (nodes) that validate it based on predetermined rules.
                </li>
                <li>
                  <strong>Block Creation:</strong> Verified transactions are grouped together into a block.
                </li>
                <li>
                  <strong>Block Validation:</strong> Nodes in the network compete to solve a complex mathematical puzzle
                  (in Proof of Work systems) or are selected based on their stake (in Proof of Stake systems) to
                  validate the block.
                </li>
                <li>
                  <strong>Block Addition:</strong> Once validated, the block is added to the chain, creating a permanent
                  and unalterable record.
                </li>
                <li>
                  <strong>Transaction Completion:</strong> The transaction is now complete and recorded on the
                  blockchain.
                </li>
              </ol>

              <h2>Types of Blockchains</h2>
              <p>There are several types of blockchains, each with its own characteristics and use cases:</p>

              <ul>
                <li>
                  <strong>Public Blockchains:</strong> Open to anyone, fully decentralized, and transparent. Examples
                  include Bitcoin and Ethereum.
                </li>
                <li>
                  <strong>Private Blockchains:</strong> Restricted to a specific group of participants, often used by
                  organizations for internal purposes.
                </li>
                <li>
                  <strong>Consortium Blockchains:</strong> Operated by a group of organizations rather than a single
                  entity.
                </li>
                <li>
                  <strong>Hybrid Blockchains:</strong> Combine features of both public and private blockchains.
                </li>
              </ul>

              <h2>Blockchain and NFTs</h2>
              <p>
                NFTs (Non-Fungible Tokens) are built on blockchain technology, primarily on the Ethereum blockchain.
                Here's how blockchain enables NFTs:
              </p>

              <ul>
                <li>
                  <strong>Uniqueness:</strong> Blockchain ensures that each NFT is unique and cannot be replicated.
                </li>
                <li>
                  <strong>Ownership:</strong> The blockchain provides a clear and immutable record of who owns each NFT.
                </li>
                <li>
                  <strong>Provenance:</strong> The entire history of an NFT, including its creation and all transfers,
                  is recorded on the blockchain.
                </li>
                <li>
                  <strong>Smart Contracts:</strong> These are self-executing contracts with the terms directly written
                  into code. They automate the creation, sale, and transfer of NFTs.
                </li>
              </ul>

              <h2>Popular Blockchain Platforms for NFTs</h2>
              <p>Several blockchain platforms support NFTs, each with its own advantages:</p>

              <ul>
                <li>
                  <strong>Ethereum:</strong> The most popular platform for NFTs, using the ERC-721 and ERC-1155
                  standards.
                </li>
                <li>
                  <strong>Solana:</strong> Known for its high speed and low transaction costs.
                </li>
                <li>
                  <strong>Flow:</strong> Designed specifically for NFTs and digital collectibles.
                </li>
                <li>
                  <strong>Binance Smart Chain:</strong> Offers lower fees compared to Ethereum.
                </li>
                <li>
                  <strong>Tezos:</strong> Energy-efficient blockchain with a focus on digital art NFTs.
                </li>
              </ul>

              <h2>The Future of Blockchain and NFTs</h2>
              <p>
                As blockchain technology continues to evolve, we can expect to see improvements in scalability, energy
                efficiency, and interoperability between different blockchains. These advancements will likely lead to
                new and innovative applications for NFTs beyond digital art and collectibles.
              </p>

              <p>
                The integration of blockchain with other technologies like augmented reality (AR), virtual reality (VR),
                and the metaverse will create new opportunities for NFTs to represent ownership of virtual assets and
                experiences.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/learn/crypto-wallets">
                <Button
                  variant="outline"
                  className="rounded-xl border-cyan-500/50 text-white dark:text-white light:text-gray-800 hover:bg-cyan-500/10"
                >
                  Next: Crypto Wallets
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
      <section className="py-16 bg-black dark:bg-black light:bg-gray-900 relative">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>

        <div className="container px-4 relative">
          <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-8">Related Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "What is an NFT?",
                description: "Learn the basics of non-fungible tokens.",
                link: "/learn/what-is-an-nft",
              },
              {
                title: "Crypto Wallets",
                description: "How to store and manage your digital assets.",
                link: "/learn/crypto-wallets",
              },
              {
                title: "Investing in NFTs",
                description: "Tips for collecting and investing in NFTs.",
                link: "/learn/investing",
              },
            ].map((topic, i) => (
              <Link href={topic.link} key={i}>
                <div className="rounded-xl p-6 bg-gray-900/50 dark:bg-gray-900/50 light:bg-gray-200/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-800 mb-2">
                    {topic.title}
                  </h3>
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
