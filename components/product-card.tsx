"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)

    toast({
      title: isFavorite ? "Removed from wishlist" : "Added to wishlist",
      description: isFavorite
        ? `${product.name} has been removed from your wishlist`
        : `${product.name} has been added to your wishlist`,
      variant: "default",
    })
  }

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-xl hover:shadow-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden pt-[100%]">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-600">
            New
          </Badge>
        )}
        {product.discount > 0 && (
          <Badge
            variant="destructive"
            className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-500 hover:to-orange-500"
          >
            -{product.discount}%
          </Badge>
        )}

        {/* Quick view overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-black hover:bg-white/90 transition-transform duration-300 transform hover:scale-105"
          >
            Quick View
          </Button>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="font-medium text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 transition-colors ${isFavorite ? "text-red-500 hover:text-red-600" : "hover:text-primary"}`}
            onClick={handleFavoriteClick}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

