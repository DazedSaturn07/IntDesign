import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Page = () => (
  <div className="relative min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Page;
