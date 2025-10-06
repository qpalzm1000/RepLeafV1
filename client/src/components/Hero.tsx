import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Calendar } from "lucide-react";
import heroImage from "@assets/generated_images/Leaf_removal_crew_working_c2b90b64.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional leaf removal service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge className="mb-4 bg-primary/90 text-primary-foreground border-primary" data-testid="badge-season">
              Seasonal Service Available
            </Badge>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Fall Leaf Cleanup Made Simple
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Professional autumn leaf removal, raking, and hauling services. Keep your property pristine this fall season with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-destructive hover:bg-destructive text-destructive-foreground"
                data-testid="button-hero-quote"
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20"
                data-testid="button-hero-services"
              >
                View Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span className="text-sm text-white/90" data-testid="text-rating">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-white/90" data-testid="text-customers">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-white/90" data-testid="text-availability">Book Now for Fall</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Card className="p-8 bg-card/95 backdrop-blur-sm" data-testid="card-hero-cta">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-card-title">
                Quick Quote Request
              </h3>
              <p className="text-muted-foreground mb-6">
                Get an instant estimate for your property. Fill out our form and we'll respond within 24 hours.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                size="lg"
                data-testid="button-card-quote"
              >
                Request Quote Now
              </Button>
              <div className="mt-6 pt-6 border-t flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Licensed & Insured</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Guaranteed</p>
                </div>
                <Badge variant="secondary" className="text-sm" data-testid="badge-response">
                  24hr Response
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
