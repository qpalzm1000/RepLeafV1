import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$89",
    description: "Perfect for small properties",
    features: [
      "Leaf blowing service",
      "Front yard only",
      "Single visit",
      "Up to 1/4 acre",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$179",
    description: "Most popular choice",
    features: [
      "Complete leaf removal",
      "Front & back yard",
      "Raking & blowing",
      "Hauling included",
      "Up to 1/2 acre",
      "2 seasonal visits",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$299",
    description: "Full season coverage",
    features: [
      "All Standard features",
      "Weekly monitoring",
      "Unlimited visits",
      "Up to 1 acre",
      "Gutter cleaning",
      "Priority scheduling",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Choose the plan that works best for your property. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover-elevate transition-all duration-300 ${plan.popular ? "border-primary shadow-lg" : ""}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary" data-testid="badge-popular">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-2xl mb-2" data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription data-testid={`text-plan-description-${index}`}>
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary" data-testid={`text-plan-price-${index}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/season</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3" data-testid={`text-feature-${index}-${featureIndex}`}>
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  data-testid={`button-select-plan-${index}`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
