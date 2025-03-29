import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Heart, User, Search, Menu } from "lucide-react"
import ProductCard from "@/components/product-card"
import AnimatedBackground from "@/components/animated-background"
import { products } from "@/lib/products"
import { ColorThemeToggle } from "@/components/color-theme-toggle"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl hidden md:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                ShopStyle
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/categories/clothing" className="text-sm font-medium transition-colors hover:text-primary">
                Clothing
              </Link>
              <Link href="/categories/accessories" className="text-sm font-medium transition-colors hover:text-primary">
                Accessories
              </Link>
              <Link href="/categories/shoes" className="text-sm font-medium transition-colors hover:text-primary">
                Shoes
              </Link>
              <Link href="/categories/sale" className="text-sm font-medium transition-colors hover:text-primary">
                Sale
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <form className="flex items-center">
              <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px]" />
              <Button type="submit" variant="ghost" size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <ColorThemeToggle />
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-text">
                Summer Collection 2025
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Discover the latest trends and styles for the upcoming season. Free shipping on all orders over $50.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/categories/new-arrivals">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/categories/sale">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Sale
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Collection</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Trending Products
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular items, handpicked for you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Collections</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Shop by Category
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse our collections and find your perfect style.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Link
              href="/categories/clothing"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-purple-600/60 group-hover:from-primary/70 group-hover:to-purple-600/70 transition-colors z-10"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Clothing"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-2xl font-bold text-white transform transition-transform duration-500 group-hover:scale-110">
                  Clothing
                </h3>
              </div>
            </Link>
            <Link
              href="/categories/accessories"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 to-purple-600/60 group-hover:from-pink-500/70 group-hover:to-purple-600/70 transition-colors z-10"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Accessories"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-2xl font-bold text-white transform transition-transform duration-500 group-hover:scale-110">
                  Accessories
                </h3>
              </div>
            </Link>
            <Link
              href="/categories/shoes"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-indigo-600/60 group-hover:from-purple-500/70 group-hover:to-indigo-600/70 transition-colors z-10"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Shoes"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-2xl font-bold text-white transform transition-transform duration-500 group-hover:scale-110">
                  Shoes
                </h3>
              </div>
            </Link>
            <Link
              href="/categories/sale"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/60 to-orange-600/60 group-hover:from-red-500/70 group-hover:to-orange-600/70 transition-colors z-10"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Sale"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-2xl font-bold text-white transform transition-transform duration-500 group-hover:scale-110">
                  Sale
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Newsletter</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Stay Updated
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive discounts.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 border-primary/20 focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-t from-muted to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-4 md:grid-cols-2">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  ShopStyle
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your one-stop destination for trendy fashion and accessories.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Shop</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/categories/new-arrivals" className="text-sm hover:text-primary transition-colors">
                  New Arrivals
                </Link>
                <Link href="/categories/bestsellers" className="text-sm hover:text-primary transition-colors">
                  Bestsellers
                </Link>
                <Link href="/categories/clothing" className="text-sm hover:text-primary transition-colors">
                  Clothing
                </Link>
                <Link href="/categories/accessories" className="text-sm hover:text-primary transition-colors">
                  Accessories
                </Link>
                <Link href="/categories/sale" className="text-sm hover:text-primary transition-colors">
                  Sale
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/careers" className="text-sm hover:text-primary transition-colors">
                  Careers
                </Link>
                <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Customer Service</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/help" className="text-sm hover:text-primary transition-colors">
                  Help Center
                </Link>
                <Link href="/shipping" className="text-sm hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
                <Link href="/size-guide" className="text-sm hover:text-primary transition-colors">
                  Size Guide
                </Link>
                <Link href="/faq" className="text-sm hover:text-primary transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t mt-8 pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ShopStyle. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

