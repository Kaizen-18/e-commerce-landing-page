"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"

const products = [
  {
    id: 1,
    name: "Premium Leather Bag",
    price: 149.99,
    category: "Accessories",
    image: "/premium-leather-bag-product-photography.jpg",
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 299.99,
    category: "Watches",
    image: "/minimalist-luxury-watch-product-photography.jpg",
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 199.99,
    category: "Eyewear",
    image: "/designer-sunglasses-product-photography.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 249.99,
    category: "Audio",
    image: "/premium-wireless-headphones-product-photography.jpg",
  },
]

export default function ProductShowcase() {
  const [wishlist, setWishlist] = useState<number[]>([])
  const { toast } = useToast()
  const { addItem } = useCart()

  const toggleWishlist = (productId: number, productName: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
      toast({
        title: "Removed from Wishlist",
        description: `${productName} has been removed from your wishlist.`,
      })
    } else {
      setWishlist([...wishlist, productId])
      toast({
        title: "Added to Wishlist",
        description: `${productName} has been added to your wishlist.`,
      })
    }
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem(product)
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleViewAll = () => {
    window.location.href = "/products"
  }

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">Handpicked selections from our latest collection</p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex bg-transparent" onClick={handleViewAll}>
            View All
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-lg bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <button
                onClick={() => toggleWishlist(product.id, product.name)}
                className={`absolute top-4 right-4 h-10 w-10 rounded-full backdrop-blur flex items-center justify-center transition-colors ${
                  wishlist.includes(product.id)
                    ? "bg-accent text-accent-foreground"
                    : "bg-background/80 hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-current" : ""}`} />
              </button>

              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent" onClick={handleViewAll}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
