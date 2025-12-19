import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content: "The quality of products from Luxora is exceptional. Every purchase has exceeded my expectations.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    content: "Fast shipping, great customer service, and premium products. What more could you ask for?",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Emma Williams",
    role: "Designer",
    content: "I love the attention to detail in every product. Luxora has become my go-to for quality goods.",
    rating: 5,
    image: "/creative-woman-portrait.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it — hear from real customers who love our products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
