"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function ConnectWalletButton() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleConnect = (walletName: string) => {
    setOpen(false)
    toast({
      title: "Coming Soon!",
      description: `${walletName} integration will be available in a future update.`,
      variant: "default",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-black">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-xl bg-gray-900 border border-cyan-900/50">
        <DialogHeader>
          <DialogTitle className="text-white">Connect your wallet</DialogTitle>
          <DialogDescription className="text-gray-400">
            Connect with one of our available wallet providers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {[
            { name: "MetaMask", icon: "🦊" },
            { name: "Coinbase Wallet", icon: "💰" },
            { name: "WalletConnect", icon: "🔗" },
            { name: "Rainbow", icon: "🌈" },
          ].map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="justify-start rounded-xl border-cyan-900/50 text-white hover:bg-cyan-900/20"
              onClick={() => handleConnect(wallet.name)}
            >
              <span className="mr-2 text-lg">{wallet.icon}</span>
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
