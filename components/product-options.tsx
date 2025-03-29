"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductOptions() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  return (
    <>
      <div>
        <h3 className="font-medium text-primary">Size</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              size="sm"
              className={`min-w-[60px] ${selectedSize === size ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium text-primary">Color</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            { name: "Black", color: "bg-black" },
            { name: "White", color: "bg-white border" },
            { name: "Blue", color: "bg-blue-500" },
            { name: "Red", color: "bg-red-500" },
          ].map((color) => (
            <Button
              key={color.name}
              variant={selectedColor === color.name ? "default" : "outline"}
              size="sm"
              className={`min-w-[80px] ${selectedColor === color.name ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => setSelectedColor(color.name)}
            >
              <div className={`h-3 w-3 rounded-full ${color.color} mr-2`} />
              {color.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

