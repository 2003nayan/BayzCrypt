"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, HelpCircle, MessageCircle, Mail, FileText, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="container px-4 relative">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How Can We <span className="text-gradient">Help</span>?
            </h1>
            <p className="text-xl text-gray-300 mb-8">Find answers to your questions or contact our support team.</p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                className="pl-10 rounded-xl bg-gray-800 border-gray-700 focus:border-cyan-500 text-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <HelpCircle className="h-6 w-6 text-cyan-400" />,
                title: "Getting Started",
                description: "Learn the basics of using BayzCrypt.",
                link: "/learn",
              },
              {
                icon: <FileText className="h-6 w-6 text-cyan-400" />,
                title: "Account Issues",
                description: "Troubleshoot problems with your account.",
                link: "/help/account",
              },
              {
                icon: <MessageCircle className="h-6 w-6 text-cyan-400" />,
                title: "Buying & Selling",
                description: "Learn how to buy and sell NFTs.",
                link: "/help/transactions",
              },
            ].map((topic, i) => (
              <Link href={topic.link} key={i}>
                <div className="rounded-xl p-6 bg-gray-800/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    {topic.icon}
                    <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-3">{topic.description}</p>
                  <div className="flex items-center text-cyan-400 text-sm">
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>

        <div className="container px-4 relative">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                question: "What is an NFT?",
                answer:
                  "NFT stands for Non-Fungible Token. It's a digital asset that represents ownership of a unique item or piece of content, stored on a blockchain.",
              },
              {
                question: "How do I create an account?",
                answer:
                  "You don't need to create a traditional account. Simply connect your cryptocurrency wallet to start using BayzCrypt.",
              },
              {
                question: "What wallets are supported?",
                answer:
                  "We support MetaMask, Coinbase Wallet, WalletConnect, and Rainbow Wallet. More wallet options will be added in the future.",
              },
              {
                question: "How do I buy an NFT?",
                answer:
                  "To buy an NFT, you need to connect your wallet, browse the marketplace, and click 'Buy Now' on the NFT you want to purchase. Follow the prompts to complete the transaction.",
              },
              {
                question: "How do I sell my NFT?",
                answer:
                  "To sell an NFT, go to your collection, select the NFT you want to sell, click 'List for Sale', set your price, and confirm the listing.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl p-6 bg-gray-900/50 border border-cyan-900/30">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/learn/faq">
              <Button variant="outline" className="rounded-xl border-cyan-500/50 text-white hover:bg-cyan-500/10">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-gray-300 mb-8">
              Our support team is available to assist you with any questions or issues.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gray-900/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium">
                  Contact Support
                </Button>
              </div>

              <div className="rounded-xl p-6 bg-gray-900/50 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <MessageCircle className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400 mb-4">Chat with our support team in real-time during business hours.</p>
                <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
