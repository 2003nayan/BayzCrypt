"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NFTCard from "@/components/nft-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { nfts } from "@/lib/data";
import Footer from "@/components/footer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Marketplace() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [creators, setCreators] = useState<string[]>([]);

  // Get unique creators for filter
  const uniqueCreators = Array.from(new Set(nfts.map((nft) => nft.creator)));

  // Filter NFTs based on category, search term, price range, and creators
  const filteredNFTs = nfts.filter((nft) => {
    // Filter by category
    const categoryMatch = filter === "all" || nft.category === filter;

    // Filter by search term
    const searchMatch =
      searchTerm === "" ||
      nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.creator.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by price range
    const priceMatch = nft.price >= priceRange[0] && nft.price <= priceRange[1];

    // Filter by creators
    const creatorMatch =
      creators.length === 0 || creators.includes(nft.creator);

    return categoryMatch && searchMatch && priceMatch && creatorMatch;
  });

  // Sort NFTs based on selected sort option
  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      case "trending":
        // For demo purposes, we'll sort by last sale price if available
        const aValue = a.lastSale || 0;
        const bValue = b.lastSale || 0;
        return bValue - aValue;
      default:
        return 0;
    }
  });

  const toggleCreator = (creator: string) => {
    setCreators((prev) =>
      prev.includes(creator)
        ? prev.filter((c) => c !== creator)
        : [...prev, creator]
    );
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-gray-100">
      <div className="container py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-white dark:text-white light:text-gray-800">
            Explore NFTs
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search items, collections, and accounts"
                className="pl-10 rounded-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-[180px] rounded-2xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="collectibles">Collectibles</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="virtual worlds">Virtual Worlds</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full sm:w-[180px] rounded-2xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-2xl">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your NFT search with these filters
                    </SheetDescription>
                  </SheetHeader>

                  <div className="py-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Price Range (ETH)</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span>{priceRange[0]} ETH</span>
                        <span>{priceRange[1]} ETH</span>
                      </div>
                      <Slider
                        defaultValue={[0, 5]}
                        max={5}
                        step={0.1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Creators</h3>
                      <div className="space-y-2">
                        {uniqueCreators.map((creator) => (
                          <div
                            key={creator}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`creator-${creator}`}
                              checked={creators.includes(creator)}
                              onCheckedChange={() => toggleCreator(creator)}
                            />
                            <Label htmlFor={`creator-${creator}`}>
                              {creator}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setCreators([]);
                          setPriceRange([0, 5]);
                        }}
                      >
                        Reset Filters
                      </Button>
                      <SheetClose asChild>
                        <Button>Apply Filters</Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedNFTs.length > 0 ? (
              sortedNFTs.map((nft) => <NFTCard key={nft.id} nft={nft} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  No NFTs found matching your filters
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setFilter("all");
                    setSort("newest");
                    setSearchTerm("");
                    setPriceRange([0, 5]);
                    setCreators([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
