"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function InvestingPage() {
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
              Investing in <span className="text-gradient">NFTs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Strategies, tips, and considerations for investing in the NFT
              market.
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
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Understanding NFT Investments
                </h2>
                <p className="text-gray-300 mb-6">
                  NFTs (Non-Fungible Tokens) represent a new asset class with
                  unique investment characteristics. Unlike traditional
                  investments, NFTs derive value from scarcity, authenticity,
                  and cultural significance.
                </p>
                <div className="bg-cyan-900/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Key Investment Considerations
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      NFTs are highly speculative and volatile investments
                    </li>
                    <li>
                      The market is still emerging and relatively unregulated
                    </li>
                    <li>Liquidity can be limited for certain NFT categories</li>
                    <li>Technical understanding of blockchain is beneficial</li>
                    <li>Research and due diligence are essential</li>
                  </ul>
                </div>
              </motion.div>

              {/* Investment Strategies */}
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
                      Investment Strategies
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Different approaches to investing in the NFT market can
                      yield varying results based on your goals and risk
                      tolerance.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                          Blue Chip Collections
                        </h3>
                        <p className="text-gray-300">
                          Investing in established, high-value collections with
                          strong communities and proven track records. Examples
                          include Bored Ape Yacht Club, CryptoPunks, and Art
                          Blocks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                          Emerging Artists
                        </h3>
                        <p className="text-gray-300">
                          Discovering and supporting promising new artists
                          before they gain mainstream recognition. This approach
                          requires deep knowledge of art and cultural trends.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                          Utility-Based NFTs
                        </h3>
                        <p className="text-gray-300">
                          Focusing on NFTs that offer practical utility beyond
                          collectibility, such as access to exclusive
                          communities, events, or digital/physical products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Due Diligence */}
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
                      Due Diligence Checklist
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Before investing in any NFT, conduct thorough research
                      using this checklist.
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-6">
                      <li>
                        <span className="font-semibold text-white">
                          Creator Verification:
                        </span>{" "}
                        Confirm the authenticity of the creator's profile and
                        previous work
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Community Analysis:
                        </span>{" "}
                        Evaluate the size, engagement, and sentiment of the
                        community
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Trading History:
                        </span>{" "}
                        Review sales volume, price trends, and holder
                        distribution
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Project Roadmap:
                        </span>{" "}
                        Assess the long-term vision and development plans
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Smart Contract Audit:
                        </span>{" "}
                        Verify the security and functionality of the underlying
                        code
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Utility Assessment:
                        </span>{" "}
                        Understand what benefits or rights come with ownership
                      </li>
                    </ol>
                    <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4 mb-4">
                      <p className="text-amber-400">
                        <strong>Warning:</strong> Always be wary of scams, rug
                        pulls, and wash trading in the NFT space. If something
                        seems too good to be true, it probably is.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Market Timing */}
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
                      Market Timing and Cycles
                    </h2>
                    <p className="text-gray-300 mb-6">
                      The NFT market experiences cycles of hype and
                      consolidation. Understanding these patterns can help
                      inform your investment decisions.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Bull Markets
                        </h3>
                        <p className="text-gray-300">
                          During periods of high enthusiasm, prices can increase
                          rapidly. Consider taking profits and being selective
                          with new investments.
                        </p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Bear Markets
                        </h3>
                        <p className="text-gray-300">
                          During downturns, focus on accumulating high-quality
                          assets at discounted prices and projects with strong
                          fundamentals.
                        </p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Seasonal Trends
                        </h3>
                        <p className="text-gray-300">
                          NFT markets can be influenced by broader crypto market
                          cycles, major events, and platform-specific
                          developments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Portfolio Management */}
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
                      Portfolio Management
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Developing a balanced NFT portfolio can help manage risk
                      while maximizing potential returns.
                    </p>
                    <div className="bg-cyan-900/20 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Diversification Strategies
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                          Spread investments across different NFT categories
                          (art, collectibles, gaming, etc.)
                        </li>
                        <li>
                          Balance between established blue chips and higher-risk
                          emerging projects
                        </li>
                        <li>
                          Consider diversifying across different blockchains
                          (Ethereum, Solana, etc.)
                        </li>
                        <li>
                          Allocate only a portion of your overall investment
                          portfolio to NFTs
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-300">
                      Remember to regularly reassess your portfolio, taking into
                      account changing market conditions, project developments,
                      and your own investment goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tax and Legal Considerations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-900/30 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Tax and Legal Considerations
                </h2>
                <p className="text-gray-300 mb-6">
                  NFT investments have unique tax and legal implications that
                  investors should understand.
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      Tax Implications
                    </h3>
                    <p className="text-gray-300">
                      In many jurisdictions, NFT sales may be subject to capital
                      gains tax. Keep detailed records of all purchases, sales,
                      and associated costs including gas fees. Consider
                      consulting with a tax professional familiar with digital
                      assets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      Intellectual Property Rights
                    </h3>
                    <p className="text-gray-300">
                      Understand what rights you're acquiring when purchasing an
                      NFT. Typically, you own the token but not the underlying
                      intellectual property unless explicitly stated otherwise.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      Regulatory Developments
                    </h3>
                    <p className="text-gray-300">
                      Stay informed about evolving regulations related to NFTs
                      and digital assets in your jurisdiction, as these can
                      impact investment strategies and obligations.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4">
                  <p className="text-amber-400">
                    <strong>Disclaimer:</strong> This information is not
                    financial or legal advice. Always consult with qualified
                    professionals regarding your specific situation.
                  </p>
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
                  Start Your NFT Investment Journey
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Armed with these strategies and considerations, you're better
                  prepared to navigate the exciting world of NFT investments.
                  Remember that education, research, and patience are your most
                  valuable tools in this emerging market.
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
                  <Link href="/marketplace">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Explore the Marketplace
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
