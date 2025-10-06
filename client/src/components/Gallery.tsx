import beforeAfterImage from "@assets/generated_images/Before_after_yard_transformation_399daa1a.png";
import beforeImage from "@assets/generated_images/Yard_before_leaf_cleanup_24c656b3.png";
import afterImage from "@assets/generated_images/Clean_yard_after_service_fa713852.png";
import { Badge } from "@/components/ui/badge";

const galleryItems = [
  {
    image: beforeAfterImage,
    title: "Complete Transformation",
    type: "Before & After",
  },
  {
    image: beforeImage,
    title: "Heavy Leaf Coverage",
    type: "Before",
  },
  {
    image: afterImage,
    title: "Pristine Results",
    type: "After",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-gallery-title">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            See the difference our professional leaf removal service makes. Real transformations from satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover-elevate transition-all duration-300"
              data-testid={`card-gallery-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-gallery-${index}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="mb-2 bg-primary/90" data-testid={`badge-gallery-type-${index}`}>
                  {item.type}
                </Badge>
                <h3 className="text-white font-semibold text-lg" data-testid={`text-gallery-title-${index}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
