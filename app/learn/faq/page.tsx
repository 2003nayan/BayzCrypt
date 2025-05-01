"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is an NFT?",
      answer:
        "NFT stands for Non-Fungible Token. Unlike cryptocurrencies such as Bitcoin or Ethereum, NFTs are unique digital assets that represent ownership of a specific item or piece of content, such as digital art, collectibles, music, or videos. Each NFT has distinct information and properties that make it irreplaceable and non-interchangeable.",
    },
    {
      question: "How do I create an NFT on BayzCrypt?",
      answer:
        "Creating an NFT on BayzCrypt is simple. First, connect your wallet, then navigate to the 'Create' section. Upload your digital file, fill in details like title, description, and optional properties. Choose your preferred blockchain, set royalties if desired, and click 'Mint NFT'. After paying the gas fee, your NFT will be created and appear in your collection.",
    },
    {
      question: "What blockchains does BayzCrypt support?",
      answer:
        "BayzCrypt currently supports Ethereum, Polygon, and Solana blockchains. Each offers different advantages in terms of transaction costs, speed, and ecosystem. You can choose which blockchain to use when creating or trading NFTs on our platform.",
    },
    {
      question: "What are gas fees?",
      answer:
        "Gas fees are transaction costs paid to blockchain network validators for processing and validating transactions. These fees vary based on network congestion and complexity of the transaction. On Ethereum, gas fees can be higher during peak times, while Polygon and Solana typically offer lower transaction costs.",
    },
    {
      question: "How do royalties work?",
      answer:
        "Royalties allow creators to earn a percentage of sales each time their NFT is resold on the secondary market. When minting your NFT on BayzCrypt, you can set a royalty percentage (typically between 5-10%). This ensures you continue to benefit financially as your creation increases in value over time.",
    },
    {
      question: "Is my NFT purchase secure?",
      answer:
        "Yes, NFT purchases on BayzCrypt are secured by blockchain technology, which provides an immutable record of ownership. We also implement additional security measures to protect transactions and user accounts. Always ensure you're connected to the official BayzCrypt platform and practice good wallet security.",
    },
    {
      question: "What wallets can I use with BayzCrypt?",
      answer:
        "BayzCrypt supports popular wallets including MetaMask, Coinbase Wallet, WalletConnect, Phantom, and more. These wallets allow you to securely store your NFTs and cryptocurrencies, as well as sign transactions when buying, selling, or creating NFTs on our platform.",
    },
    {
      question: "How do I sell my NFT?",
      answer:
        "To sell your NFT, navigate to 'My Collection', select the NFT you wish to sell, and click 'List for Sale'. You can choose between fixed price listings, timed auctions, or open offers. Set your desired price, duration, and confirm the listing. Your NFT will then be visible to potential buyers in the marketplace.",
    },
    {
      question: "What file types are supported for NFTs?",
      answer:
        "BayzCrypt supports a wide range of file types including JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, and GLTF. Maximum file size is 100MB for most files, though we recommend optimizing larger files for better user experience.",
    },
    {
      question: "What happens if I forget my wallet password?",
      answer:
        "BayzCrypt doesn't store your wallet passwords or recovery phrases. If you forget your wallet password, you'll need to use the recovery methods provided by your specific wallet provider. This typically involves using your seed phrase or recovery methods set up when you created your wallet. Always store your recovery phrase in a secure location.",
    },
  ];

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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Answers to common questions about NFTs, blockchain technology, and
              using the BayzCrypt platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-cyan-900/30 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {item.question}
                    </h3>
                    <div
                      className={`transform transition-transform duration-200 ${
                        openQuestion === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-cyan-400"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openQuestion === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-300">{item.answer}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-900/30 rounded-xl p-8 text-center mt-16"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is
                here to help with any questions about NFTs, blockchain
                technology, or using BayzCrypt.
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
                <Link href="/contact">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
