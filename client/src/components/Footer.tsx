import { Leaf } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold">Autumn Leaf Pros</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional autumn leaf removal services keeping your property pristine throughout the fall season.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-leaf-blowing"
                >
                  Leaf Blowing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-raking"
                >
                  Raking & Cleanup
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-hauling"
                >
                  Hauling & Disposal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#gallery")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#pricing")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-footer-phone">(555) LEAF-PRO</li>
              <li data-testid="text-footer-email">info@autumnleafpros.com</li>
              <li data-testid="text-footer-location">Springfield & Surrounding Areas</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Autumn Leaf Pros. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground italic" data-testid="text-tagline">
            Making fall cleanup simple, one leaf at a time
          </p>
        </div>
      </div>
    </footer>
  );
}
