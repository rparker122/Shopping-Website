"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Check } from "lucide-react"
import type { Product } from "@/lib/products"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  product: Product
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function AddToCartButton({
  product,
  variant = "default",
  size = "default",
  className = "",
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        variant: "default",
      })
    }, 600)
  }

  return (
    <Button
      className={`w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      size={size}
      variant={variant}
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {isAdding ? (
        <Check className="h-4 w-4 mr-2 animate-in zoom-in-50 duration-300" />
      ) : (
        <ShoppingBag className="h-4 w-4 mr-2" />
      )}
      {isAdding ? "Added" : "Add to Cart"}
    </Button>
  )
}

