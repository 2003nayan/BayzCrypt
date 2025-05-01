"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import type { NFT } from "@/lib/types"

interface NFTCardProps {
  nft: NFT
  actionButton?: React.ReactNode
}

export default function NFTCard({ nft, actionButton }: NFTCardProps) {
  const [liked, setLiked] = useState(false)
  const { toast } = useToast()

  const handleBuy = () => {
    toast({
      title: "Coming Soon!",
      description: "Purchase functionality will be available in a future update.",
      variant: "default",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden border border-cyan-900/30 bg-gray-900/50 dark:bg-gray-900/50 light:bg-gray-200/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/80 transition-colors"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={cn("h-4 w-4", liked ? "fill-red-500 text-red-500" : "text-gray-300")} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate text-white dark:text-white light:text-gray-800">{nft.name}</h3>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
          <span className="text-sm text-gray-400">{nft.creator}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="font-semibold text-white dark:text-white light:text-gray-800">{nft.price} BAYZ</p>
          </div>
          {nft.lastSale && (
            <div className="text-right">
              <p className="text-xs text-gray-500">Last Sale</p>
              <p className="text-sm text-gray-400">{nft.lastSale} BAYZ</p>
            </div>
          )}
        </div>

        {actionButton || (
          <Button
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black font-medium"
            onClick={handleBuy}
          >
            Buy Now
          </Button>
        )}
      </div>
    </motion.div>
  )
}
