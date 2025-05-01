"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
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
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you:</p>
              <ul>
                <li>Create an account</li>
                <li>Connect your wallet</li>
                <li>Create, buy, or sell NFTs</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our support team</li>
              </ul>

              <p>
                This information may include your name, email address, wallet address, transaction history, and any
                other information you choose to provide.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>

              <h2>3. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Third parties if we believe disclosure is necessary to comply with a legal process</li>
                <li>Other users when you engage in certain public activities, such as creating or selling NFTs</li>
              </ul>

              <h2>4. Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and
                unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2>5. Your Choices</h2>
              <p>
                You can access and update certain information about you from within your account settings. You can also
                request to delete your account by contacting us.
              </p>

              <h2>6. Changes to This Policy</h2>
              <p>
                We may change this privacy policy from time to time. If we make changes, we will notify you by revising
                the date at the top of the policy and, in some cases, we may provide you with additional notice.
              </p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at privacy@bayzcrypt.com.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
