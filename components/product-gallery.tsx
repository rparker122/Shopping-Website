"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-lg border shadow-lg">
        <img
          src={images[activeImage] || "/placeholder.svg"}
          alt={productName}
          className="aspect-square w-full object-cover transition-transform duration-500"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black rounded-full"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            className={`overflow-hidden rounded-lg border transition-all ${
              activeImage === i ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveImage(i)}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`${productName} thumbnail ${i + 1}`}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </>
  )
}

