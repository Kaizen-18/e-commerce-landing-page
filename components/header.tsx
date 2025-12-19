"use client"

import type React from "react"

import { useState } from "react"
import { Menu, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toast } = useToast()
  const { itemCount } = useCart()

  const handleShopNow = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  const handleCartClick = () => {
    toast({
      title: "Cart",
      description: `You have ${itemCount} item${itemCount !== 1 ? "s" : ""} in your cart.`,
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-semibold tracking-tight text-foreground">Luxora</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, "#products")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Products
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" onClick={handleCartClick}>
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
              {itemCount}
            </span>
          </Button>

          <Button className="hidden md:inline-flex" onClick={handleShopNow}>
            Shop Now
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container flex flex-col gap-4 p-4">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, "#products")}
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              Products
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              Contact
            </a>
            <Button className="w-full mt-2" onClick={handleShopNow}>
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
