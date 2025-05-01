"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function HowToCreatePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <Link
            href="/learn"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Learn
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How to <span className="text-gradient">Create</span> Your First
              NFT
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A step-by-step guide to creating, minting, and listing your first
              NFT on BayzCrypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-cyan-900/20 rounded-lg p-6 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Connect Your Wallet
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Before you can create an NFT, you'll need to connect your
                      cryptocurrency wallet to BayzCrypt. We support MetaMask,
                      Coinbase Wallet, and WalletConnect.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                      <li>
                        Click the "Connect Wallet" button in the top right
                        corner
                      </li>
                      <li>Select your preferred wallet provider</li>
                      <li>Follow the prompts to complete the connection</li>
                    </ol>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-cyan-900/20 rounded-lg p-6 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Create Your NFT
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Now it's time to create your digital asset. Navigate to
                      the creation page and prepare your artwork.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                      <li>Go to the "Mint" page from the navigation menu</li>
                      <li>Click "Create New NFT"</li>
                      <li>
                        Upload your digital file (image, video, audio, or 3D
                        model)
                      </li>
                      <li>
                        Ensure your file meets our requirements (max 100MB,
                        supported formats: JPG, PNG, GIF, MP4, MP3, GLB)
                      </li>
                    </ol>
                    <Link href="/mint">
                      <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        Go to Mint Page
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-cyan-900/20 rounded-lg p-6 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Add Details & Metadata
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Provide information about your NFT to help collectors
                      discover and understand your creation.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                      <li>Give your NFT a name</li>
                      <li>Write a detailed description</li>
                      <li>Add relevant tags and categories</li>
                      <li>Set properties, levels, or stats (optional)</li>
                      <li>Include external links if applicable</li>
                    </ol>
                    <p className="text-gray-400 text-sm italic">
                      Tip: Detailed and accurate metadata increases the
                      discoverability and value of your NFT.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-cyan-900/20 rounded-lg p-6 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Mint Your NFT
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Minting is the process of publishing your NFT to the
                      blockchain, making it official and unique.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                      <li>
                        Choose the blockchain (Ethereum, Polygon, or Solana)
                      </li>
                      <li>Select between a single NFT or multiple editions</li>
                      <li>
                        Set royalties (percentage you'll receive from secondary
                        sales)
                      </li>
                      <li>Review all details carefully</li>
                      <li>
                        Click "Mint NFT" and confirm the transaction in your
                        wallet
                      </li>
                      <li>
                        Pay the gas fee (transaction cost on the blockchain)
                      </li>
                    </ol>
                    <p className="text-amber-400 mb-4">
                      Important: Once minted, some aspects of your NFT cannot be
                      changed, so double-check everything!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-cyan-900/20 rounded-lg p-6 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      List Your NFT for Sale
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Now that your NFT is minted, you can list it for sale on
                      the BayzCrypt marketplace.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                      <li>
                        Navigate to "My Collection" to see your newly minted NFT
                      </li>
                      <li>Click on your NFT and select "List for Sale"</li>
                      <li>
                        Choose a sale type:
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>Fixed Price: Set a specific price</li>
                          <li>
                            Timed Auction: Set a minimum bid and auction
                            duration
                          </li>
                          <li>Open Offer: Allow collectors to make offers</li>
                        </ul>
                      </li>
                      <li>Set your price in ETH, MATIC, or SOL</li>
                      <li>Choose the duration of your listing</li>
                      <li>
                        Confirm the listing and approve the transaction in your
                        wallet
                      </li>
                    </ol>
                    <Link href="/collection">
                      <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        Go to My Collection
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-900/30 rounded-xl p-8 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Congratulations!
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  You've successfully created, minted, and listed your first NFT
                  on BayzCrypt. Now it's time to promote your work, engage with
                  the community, and continue your journey in the world of
                  digital collectibles.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/learn">
                    <Button
                      variant="outline"
                      className="border-cyan-600 text-cyan-400 hover:bg-cyan-900/20"
                    >
                      More Learning Resources
                    </Button>
                  </Link>
                  <Link href="/mint">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Create Your NFT Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
