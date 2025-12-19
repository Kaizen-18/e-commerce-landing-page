"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const handleExploreCollection = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleViewCatalog = () => {
    window.open("/catalog", "_blank")
  }

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container px-4 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-foreground">New Collection Available</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground">
              Premium Quality Meets Modern Design
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Discover our curated collection of expertly crafted products that blend functionality with exceptional
              aesthetics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" onClick={handleExploreCollection}>
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={handleViewCatalog}>
                View Catalog
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
              <img
                src="/modern-premium-product-on-minimalist-background.jpg"
                alt="Featured Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold text-foreground">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">On orders over $50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
