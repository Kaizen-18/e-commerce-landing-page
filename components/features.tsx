import { Truck, ShieldCheck, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50 with tracking and insurance included.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your payment information is protected with industry-leading encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist you.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "30-day money-back guarantee on all products with no questions asked.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 border-b border-border">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground text-balance">
            Why Choose Luxora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're committed to providing exceptional service and quality products that exceed expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
