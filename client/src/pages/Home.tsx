import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FallingLeaves from "@/components/FallingLeaves";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <FallingLeaves />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
