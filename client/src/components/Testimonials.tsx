import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield",
    rating: 5,
    text: "Outstanding service! They transformed our yard in just a few hours. The team was professional, efficient, and left everything spotless.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Riverside",
    rating: 5,
    text: "Best leaf removal service we've used. They're reliable, affordable, and do an incredible job. Highly recommend for anyone looking for fall cleanup.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    location: "Lakewood",
    rating: 5,
    text: "I've been using their service for three years now. Always punctual, thorough, and reasonably priced. They make fall maintenance stress-free!",
    initials: "ER",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={currentIndex + index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" data-testid={`icon-star-${index}-${i}`} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-location-${index}`}>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
