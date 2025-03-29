import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const categoryProducts = products.filter((product) => product.category === category)

  const categoryTitles: Record<string, string> = {
    clothing: "Clothing",
    accessories: "Accessories",
    shoes: "Shoes",
    sale: "Sale Items",
    "new-arrivals": "New Arrivals",
    bestsellers: "Bestsellers",
  }

  const title = categoryTitles[category] || "Products"

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground">Browse our collection of {title.toLowerCase()}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort
          </Button>
        </div>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-medium">No products found</h2>
          <p className="text-muted-foreground mt-2">We couldn't find any products in this category.</p>
          <Link href="/" className="mt-4">
            <Button>Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

