"use client"

import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ProductActionButtonsProps {
  productName: string
}

export default function ProductActionButtons({ productName }: ProductActionButtonsProps) {
  const { toast } = useToast()

  const handleWishlistClick = () => {
    toast({
      title: "Added to wishlist",
      description: `${productName} has been added to your wishlist`,
      variant: "default",
    })
  }

  const handleShareClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied",
        description: "Product link has been copied to clipboard",
        variant: "default",
      })
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={handleWishlistClick}
        className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
      >
        <Heart className="mr-2 h-5 w-5" />
        Add to Wishlist
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 border-primary/20 hover:bg-primary/5 transition-all duration-300"
        onClick={handleShareClick}
      >
        <Share2 className="h-5 w-5" />
        <span className="sr-only">Share</span>
      </Button>
    </>
  )
}

