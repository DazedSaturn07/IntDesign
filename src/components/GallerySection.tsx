"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroLiving from "@/assets/hero-living.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryLiving2 from "@/assets/gallery-living2.jpg";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryBathroom2 from "@/assets/gallery-bathroom2.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";

const images = [
  { src: heroLiving.src, label: "Living Room" },
  { src: galleryBedroom.src, label: "Bedroom" },
  { src: heroKitchen.src, label: "Kitchen" },
  { src: galleryBathroom2.src, label: "Bathroom" },
  { src: galleryLiving2.src, label: "Lounge" },
  { src: galleryDining.src, label: "Dining Room" },
  { src: heroBathroom.src, label: "Master Bath" },
  { src: galleryKitchen2.src, label: "Chef's Kitchen" },
];

const GallerySection = () => (
  <section id="gallery" className="relative section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-14 md:mb-20">
        <p className="text-primary/70 tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 md:mb-6 font-sans font-medium">Portfolio</p>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
          Featured <span className="text-gold-gradient">Projects</span>
        </h2>
      </AnimatedSection>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.03}>
            <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid">
              <img src={img.src} alt={img.label} className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 sm:p-7">
                <div>
                  <span className="heading-display text-lg sm:text-xl text-foreground">{img.label}</span>
                  <p className="text-primary/70 text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-1">View Project</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
