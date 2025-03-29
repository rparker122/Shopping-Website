export interface Product {
  id: string
  name: string
  price: number
  discount: number
  image: string
  isNew: boolean
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    price: 29.99,
    discount: 0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "clothing",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    discount: 15,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "clothing",
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 89.99,
    discount: 0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "accessories",
  },
  {
    id: "4",
    name: "Running Sneakers",
    price: 119.99,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "shoes",
  },
  {
    id: "5",
    name: "Oversized Hoodie",
    price: 49.99,
    discount: 0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "clothing",
  },
  {
    id: "6",
    name: "Stainless Steel Watch",
    price: 149.99,
    discount: 10,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "accessories",
  },
  {
    id: "7",
    name: "Leather Ankle Boots",
    price: 129.99,
    discount: 0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "shoes",
  },
  {
    id: "8",
    name: "Knit Sweater",
    price: 69.99,
    discount: 25,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "clothing",
  },
]

