"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function CryptoWalletsPage() {
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
              Crypto <span className="text-gradient">Wallets</span>
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl">
              Understanding how to store, manage, and secure your digital assets.
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
              <h2>What is a Crypto Wallet?</h2>
              <p>
                A cryptocurrency wallet is a digital tool that allows you to store, send, and receive digital currencies
                like Bitcoin, Ethereum, and others. Despite the name, crypto wallets don't actually store your
                cryptocurrencies — instead, they store the private keys that give you access to your assets on the
                blockchain.
              </p>

              <div className="my-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/banner2.png"
                  alt="Crypto Wallet Concept"
                  width={800}
                  height={400}
                  className="w-full"
                />
              </div>

              <h2>How Crypto Wallets Work</h2>
              <p>
                Crypto wallets use a pair of cryptographic keys: a public key and a private key. The public key is like
                your address — it's what others use to send crypto to you. The private key is like your password — it
                proves your ownership of the assets and allows you to make transactions.
              </p>

              <p>
                When someone sends you cryptocurrency, they're essentially transferring ownership of the coins to your
                wallet's address. To spend those coins, the private key stored in your wallet must match the public
                address the currency is assigned to. If the public and private keys match, the balance in your digital
                wallet will increase, and the sender's will decrease accordingly.
              </p>

              <h2>Types of Crypto Wallets</h2>
              <p>
                There are several types of crypto wallets, each with its own advantages and security considerations:
              </p>

              <h3>Hardware Wallets</h3>
              <p>
                Hardware wallets are physical devices that store your private keys offline. They're considered the most
                secure option because they're not connected to the internet (except when making transactions), which
                protects them from online hacking attempts.
              </p>
              <p>
                <strong>Examples:</strong> Ledger Nano X, Trezor Model T, KeepKey
              </p>

              <h3>Software Wallets</h3>
              <p>
                Software wallets are applications that you can install on your computer or mobile device. They're more
                convenient than hardware wallets but potentially less secure because they're connected to the internet.
              </p>
              <p>
                <strong>Examples:</strong> MetaMask, Trust Wallet, Exodus
              </p>

              <h3>Web Wallets</h3>
              <p>
                Web wallets are online services that allow you to access your crypto through a web browser. They're the
                most convenient option but also the least secure, as your private keys are stored on the service's
                servers.
              </p>
              <p>
                <strong>Examples:</strong> Coinbase Wallet, Binance Wallet, MyEtherWallet
              </p>

              <h3>Paper Wallets</h3>
              <p>
                Paper wallets are physical documents that contain your public and private keys, often in the form of QR
                codes. They're completely offline and thus immune to online hacking, but they can be lost, damaged, or
                stolen.
              </p>

              <h2>Choosing a Wallet for NFTs</h2>
              <p>
                When it comes to NFTs, not all crypto wallets are created equal. Here are some factors to consider when
                choosing a wallet for your NFT activities:
              </p>

              <ul>
                <li>
                  <strong>Blockchain Support:</strong> Ensure the wallet supports the blockchain where your NFTs are
                  minted (most commonly Ethereum).
                </li>
                <li>
                  <strong>NFT Compatibility:</strong> Some wallets have built-in features for viewing and managing NFTs,
                  while others may only handle cryptocurrencies.
                </li>
                <li>
                  <strong>Security:</strong> Consider the security features offered by the wallet, such as two-factor
                  authentication, biometric verification, or backup options.
                </li>
                <li>
                  <strong>User Experience:</strong> Look for a wallet with an intuitive interface that makes it easy to
                  view and manage your NFT collection.
                </li>
                <li>
                  <strong>Integration with Marketplaces:</strong> Some wallets integrate directly with NFT marketplaces,
                  making it easier to buy, sell, and trade NFTs.
                </li>
              </ul>

              <h2>Popular Wallets for NFTs</h2>
              <p>Here are some of the most popular wallets used for NFT transactions:</p>

              <h3>MetaMask</h3>
              <p>
                MetaMask is one of the most widely used wallets for NFTs. It's a browser extension and mobile app that
                connects to the Ethereum blockchain and allows you to interact with NFT marketplaces like BayzCrypt.
              </p>

              <h3>Coinbase Wallet</h3>
              <p>
                Coinbase Wallet is a user-friendly option that supports NFTs on multiple blockchains. It's available as
                a mobile app and browser extension.
              </p>

              <h3>Rainbow</h3>
              <p>
                Rainbow is an Ethereum wallet designed with a focus on user experience. It has built-in features for
                viewing and managing NFTs, making it a popular choice among collectors.
              </p>

              <h3>Trust Wallet</h3>
              <p>
                Trust Wallet is a mobile wallet that supports multiple blockchains and has a built-in NFT viewer. It's
                owned by Binance, one of the largest cryptocurrency exchanges.
              </p>

              <h2>Wallet Security Best Practices</h2>
              <p>
                Securing your crypto wallet is crucial, especially if you're storing valuable NFTs. Here are some best
                practices:
              </p>

              <ul>
                <li>
                  <strong>Backup Your Wallet:</strong> Always backup your wallet's recovery phrase (also known as a seed
                  phrase) in a secure location. This phrase can be used to restore your wallet if your device is lost or
                  damaged.
                </li>
                <li>
                  <strong>Use Strong Passwords:</strong> Protect your wallet with a strong, unique password that you
                  don't use for any other accounts.
                </li>
                <li>
                  <strong>Enable Two-Factor Authentication:</strong> If your wallet supports it, enable two-factor
                  authentication for an extra layer of security.
                </li>
                <li>
                  <strong>Be Wary of Phishing:</strong> Be cautious of emails, messages, or websites asking for your
                  wallet information. Always double-check URLs and never share your private keys or recovery phrase.
                </li>
                <li>
                  <strong>Consider Hardware Wallets for High-Value Assets:</strong> If you own valuable NFTs, consider
                  storing them in a hardware wallet for maximumm security. Hardware wallets keep your private keys
                  offline, protecting them from online threats.
                </li>
                <li>
                  <strong>Keep Software Updated:</strong> Always keep your wallet software updated to ensure you have
                  the latest security features and bug fixes.
                </li>
              </ul>

              <h2>Connecting Your Wallet to BayzCrypt</h2>
              <p>
                To buy, sell, or trade NFTs on BayzCrypt, you'll need to connect your wallet to the platform. Here's a
                simple guide:
              </p>

              <ol>
                <li>Click on the "Connect Wallet" button in the top right corner of the BayzCrypt website.</li>
                <li>Select your wallet provider from the list of supported options.</li>
                <li>Follow the prompts to authorize the connection between your wallet and BayzCrypt.</li>
                <li>
                  Once connected, you'll be able to view your balance, buy NFTs, list your own NFTs for sale, and more.
                </li>
              </ol>

              <p>
                Remember that you should only connect your wallet to trusted platforms and always verify that you're on
                the correct website before connecting.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/learn/how-to-create">
                <Button
                  variant="outline"
                  className="rounded-xl border-cyan-500/50 text-white dark:text-white light:text-gray-800 hover:bg-cyan-500/10"
                >
                  Next: How to Create an NFT
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
