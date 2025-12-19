"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const handleStartShopping = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-2xl bg-accent text-accent-foreground p-12 md:p-16 lg:p-20">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-pretty">
              Join thousands of satisfied customers and discover the difference that quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" onClick={handleStartShopping}>
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-foreground/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
