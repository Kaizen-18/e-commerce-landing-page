"use client"

import type React from "react"

import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const { toast } = useToast()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    e.preventDefault()
    toast({
      title: "Coming Soon",
      description: `The ${linkName} page is currently under development.`,
    })
  }

  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary" />
              <span className="text-xl font-semibold tracking-tight text-foreground">Luxora</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium quality products for discerning customers who appreciate exceptional design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "New Arrivals")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Best Sellers")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Sale")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Sale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Collections")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Collections
                </a>
              </li>
            </ul>
          </div>

          <div id="about">
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "About Us")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Careers")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Press")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "FAQ")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Shipping")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Returns")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Size Guide")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Luxora. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "Privacy Policy")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "Terms of Service")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "Cookie Policy")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
