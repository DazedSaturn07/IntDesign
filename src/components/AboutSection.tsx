"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import galleryLiving from "@/assets/gallery-living2.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Projects Delivered" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={ref} className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        <AnimatedSection direction="left">
          <p className="text-primary/70 tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 md:mb-6 font-sans font-medium">About Us</p>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 md:mb-8 leading-[1.1]">
            Refined &<br /><span className="text-gold-gradient">Contemporary</span> Design
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
            3D Interior Design Los Angeles is a premier Beverly Hills studio transforming architectural visions into photorealistic experiences. We help homeowners, designers, and businesses see their spaces before they&apos;re built.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 text-sm sm:text-base">
            From immersive VR walkthroughs to cinematic animations, our team crafts visualizations that don&apos;t just show a space — they make you feel it.
          </p>
          <div className="flex gap-6 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="heading-display text-2xl sm:text-3xl md:text-4xl text-gold-gradient">{stat.value}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs tracking-wider mt-1 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img src={galleryLiving.src} alt="Luxury interior design visualization"
              className="w-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} style={{ y: imgY }} />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-2xl" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
