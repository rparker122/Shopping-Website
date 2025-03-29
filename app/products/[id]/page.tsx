import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import ProductGallery from "@/components/product-gallery"

import ProductOptions from "@/components/product-options"
import ProductActionButtons from "@/components/product-action-buttons"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  // Generate multiple product images for gallery
  const productImages = [
    product?.image || "/placeholder.svg",
    "/placeholder.svg?height=400&width=400&text=Image+2",
    "/placeholder.svg?height=400&width=400&text=Image+3",
    "/placeholder.svg?height=400&width=400&text=Image+4",
  ]

  if (!product) {
    return (
      <div className="container flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-muted-foreground mt-2">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="mt-4">
          <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
            Back to Home
          </Button>
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <ProductGallery images={productImages} productName={product.name} />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="text-2xl font-bold text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                <span className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-2 py-0.5 text-xs font-medium text-white">
                  {product.discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="mt-4 space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium text-primary">Description</h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia. The
                perfect addition to your wardrobe, this versatile piece combines style and comfort for any occasion.
              </p>
            </div>
            <ProductOptions />
            <div className="flex flex-col gap-2 sm:flex-row">
              <AddToCartButton product={product} size="lg" className="flex-1" />
              <ProductActionButtons productName={product.name} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

