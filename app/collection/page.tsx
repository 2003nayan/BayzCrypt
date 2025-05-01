"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import NFTCard from "@/components/nft-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { userNfts } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Footer from "@/components/footer"

export default function CollectionPage() {
  const [activeTab, setActiveTab] = useState("collected")
  const { toast } = useToast()

  const handleListForSale = () => {
    toast({
      title: "Coming Soon!",
      description: "Listing functionality will be available in a future update.",
      variant: "default",
    })
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-gray-100">
      <div className="container py-8 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white dark:text-white light:text-gray-800">My Collection</h1>
              <p className="text-muted-foreground mt-2">Manage your NFTs</p>
            </div>
          </div>

          <Tabs defaultValue="collected" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-3 rounded-2xl">
              <TabsTrigger value="collected">Collected</TabsTrigger>
              <TabsTrigger value="created">Created</TabsTrigger>
              <TabsTrigger value="favorited">Favorited</TabsTrigger>
            </TabsList>

            <TabsContent value="collected" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {userNfts.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    nft={nft}
                    actionButton={
                      <Button variant="outline" className="w-full rounded-2xl" onClick={handleListForSale}>
                        List for Sale
                      </Button>
                    }
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="created" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {userNfts.slice(0, 2).map((nft) => (
                  <NFTCard
                    key={nft.id}
                    nft={nft}
                    actionButton={
                      <Button variant="outline" className="w-full rounded-2xl" onClick={handleListForSale}>
                        List for Sale
                      </Button>
                    }
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorited" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {userNfts.slice(2, 5).map((nft) => (
                  <NFTCard
                    key={nft.id}
                    nft={nft}
                    actionButton={
                      <Button variant="outline" className="w-full rounded-2xl" onClick={handleListForSale}>
                        List for Sale
                      </Button>
                    }
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {activeTab === "collected" && userNfts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2 text-white dark:text-white light:text-gray-800">No NFTs found</h3>
              <p className="text-muted-foreground mb-6">You don't have any NFTs in your collection yet.</p>
              <Button asChild className="rounded-2xl">
                <a href="/marketplace">Browse Marketplace</a>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
