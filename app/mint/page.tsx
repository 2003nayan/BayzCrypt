"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Footer from "@/components/footer"

export default function MintPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const { toast } = useToast()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Coming Soon!",
      description: "NFT minting functionality will be available in a future update.",
      variant: "default",
    })
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-gray-100">
      <div className="container max-w-4xl py-8 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-8 text-white dark:text-white light:text-gray-800">Create New NFT</h1>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="image">Image, Video, Audio, or 3D Model</Label>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-2xl p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => document.getElementById("image")?.click()}
                >
                  {imagePreview ? (
                    <div className="relative aspect-square max-w-xs mx-auto">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  ) : (
                    <div className="py-12">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">PNG, JPG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                      <Button type="button" variant="outline" className="mt-4 rounded-2xl">
                        Choose File
                      </Button>
                    </div>
                  )}
                  <input
                    id="image"
                    type="file"
                    accept="image/*,video/*,audio/*,.glb,.gltf"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Item name" className="rounded-2xl" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your item"
                  className="min-h-[100px] rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="collectibles">Collectibles</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
              >
                Mint Now
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
