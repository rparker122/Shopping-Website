import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartPage() {
  // Sample cart data
  const cartItems = [
    {
      id: "1",
      name: "Casual Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      size: "M",
      color: "Black",
    },
    {
      id: "3",
      name: "Leather Crossbody Bag",
      price: 89.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      size: "One Size",
      color: "Brown",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 4.99
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-lg font-medium">Cart Items ({cartItems.length})</h2>
                <div className="mt-6 divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Size: {item.size} | Color: {item.color}
                            </p>
                          </div>
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-lg font-medium">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p className="font-medium">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between border-t pt-4">
                    <p className="font-medium">Total</p>
                    <p className="font-bold">${total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Promo code" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/" className="mt-4">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

