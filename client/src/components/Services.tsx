import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Sparkles, Truck } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Leaf Blowing",
    description: "Professional leaf blowing service to clear your property quickly and efficiently using commercial-grade equipment.",
    price: "$89",
  },
  {
    icon: Sparkles,
    title: "Raking & Cleanup",
    description: "Thorough raking and cleanup service ensuring every corner of your yard is pristine and leaf-free.",
    price: "$129",
  },
  {
    icon: Truck,
    title: "Hauling & Disposal",
    description: "Complete leaf removal including hauling and eco-friendly disposal. We handle everything so you don't have to.",
    price: "$179",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Professional autumn leaf removal services tailored to keep your property looking its best throughout the fall season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 text-primary rounded-lg">
                    <Icon className="h-6 w-6" data-testid={`icon-service-${index}`} />
                  </div>
                  <CardTitle className="font-serif text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary" data-testid={`text-service-price-${index}`}>
                      {service.price}
                    </span>
                    <span className="text-sm text-muted-foreground">starting at</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
