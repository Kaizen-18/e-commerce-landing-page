import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ProductShowcase from "@/components/product-showcase"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
