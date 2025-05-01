export interface NFT {
  id: string
  name: string
  description: string
  image: string
  price: number
  creator: string
  owner: string
  lastSale?: number
  category: string
}
