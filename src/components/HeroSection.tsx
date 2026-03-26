"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroLiving from "@/assets/hero-living.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";

const slides = [
  { src: heroLiving.src, alt: "Luxury living room 3D render", subtitle: "Living Spaces" },
  { src: heroKitchen.src, alt: "Modern kitchen 3D render", subtitle: "Kitchen Design" },
  { src: heroBathroom.src, alt: "Elegant bathroom 3D render", subtitle: "Bathroom Luxury" },
];

const trustItems = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "Beverly Hills", label: "Premier Studio" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.45, 0.95]);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          style={{ scale: imgScale, y: imgY }}
        >
          <img src={slides[current].src} alt={slides[current].alt} className="w-full h-full object-cover" width={1920} height={1080} />
        </motion.div>
      </AnimatePresence>

      <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[20%] w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(42 60% 70% / 0.5), transparent)" }} />
        <motion.div animate={{ y: [25, -25, 25], x: [12, -12, 12] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[15%] w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(42 52% 54% / 0.4), transparent)" }} />
      </div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 h-[1px] origin-left"
        style={{ background: "linear-gradient(90deg, transparent, hsl(42 52% 54% / 0.5), transparent)" }} />

      <motion.div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8" style={{ y: textY, opacity: textOpacity }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary/80 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-sans font-medium">Beverly Hills Premier Studio</span>
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-foreground max-w-5xl leading-[1.05]">
          Transform Your Vision<br />
          <span className="text-gold-gradient">Into Reality</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          className="text-muted-foreground text-sm sm:text-base md:text-lg mt-6 md:mt-8 max-w-xl font-light leading-relaxed px-2">
          Award-winning 3D visualization bringing luxury interiors to life with photorealistic precision
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-12 w-full sm:w-auto px-4 sm:px-0">
          <button onClick={() => scrollTo("contact")} className="btn-premium text-center">Get a Free Consultation</button>
          <button onClick={() => scrollTo("gallery")} className="btn-outline-premium text-center">Explore Our Work</button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center gap-6 sm:gap-10 mt-12 md:mt-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="heading-display text-lg sm:text-xl md:text-2xl text-gold-gradient font-light">{item.value}</span>
              <span className="text-muted-foreground text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-1">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 flex items-center gap-3 sm:gap-4 z-20">
        {slides.map((s, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="group flex items-center gap-2">
            <span className={`block h-[2px] transition-all duration-500 ${i === current ? "w-8 sm:w-10 bg-primary" : "w-3 sm:w-4 bg-foreground/20 group-hover:bg-foreground/40"}`} />
            {i === current && (
              <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/70 hidden sm:inline">
                {s.subtitle}
              </motion.span>
            )}
          </button>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center translate-y-6">Scroll</span>
      </motion.div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-right"
        style={{ background: "linear-gradient(90deg, transparent, hsl(42 52% 54% / 0.3), transparent)" }} />
    </section>
  );
};

export default HeroSection;
