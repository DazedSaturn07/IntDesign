"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Home, Bath, UtensilsCrossed, Monitor, Building2, Video } from "lucide-react";

const services = [
  { icon: Home, title: "3D Interior Rendering", desc: "Photorealistic visualizations that bring your design concept to life — from lighting and textures to furniture placement. See every detail before construction begins." },
  { icon: Bath, title: "Bathroom Design", desc: "Visualize your dream bathroom with precision 3D renders of custom fixtures, tiles, shower enclosures, and spatial layouts tailored to your style." },
  { icon: UtensilsCrossed, title: "Kitchen Design & Layout", desc: "From cabinetry and countertops to appliance integration — experience your future kitchen in breathtaking photorealistic clarity before making any commitment." },
  { icon: Monitor, title: "Appliance Selection", desc: "Eliminate guesswork. See exactly how every appliance fits, functions, and harmonizes within your space with true-to-scale 3D placement renders." },
  { icon: Building2, title: "Architectural Visualization", desc: "Transform blueprints into cinematic exterior and interior 3D renderings that communicate your architectural vision to clients and stakeholders." },
  { icon: Video, title: "Animation & VR Walkthroughs", desc: "Walk through your future space with cinematic animations and immersive virtual reality experiences — the most powerful way to sell a vision." },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(42 52% 54%), transparent 70%)" }} />
    </div>
    <div className="max-w-7xl mx-auto relative">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <p className="text-primary/70 tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 md:mb-6 font-sans font-medium">What We Do</p>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
          Our <span className="text-gold-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light px-2">
          We utilize advanced software to create realistic and immersive renderings that accurately represent your intended space — whether for planning, marketing, or pure inspiration.
        </p>
      </AnimatedSection>

      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s) => (
          <motion.div key={s.title} variants={cardVariants} whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative overflow-hidden rounded-2xl cursor-default">
            <div className="absolute inset-0 bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl transition-colors duration-500 group-hover:border-primary/20" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ background: "linear-gradient(135deg, hsl(42 52% 54% / 0.06), transparent 60%)" }} />
            <div className="relative z-10 p-7 sm:p-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500 group-hover:scale-110"
                style={{ background: "hsl(42 52% 54% / 0.08)", border: "1px solid hsl(42 52% 54% / 0.12)" }}>
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="heading-display text-lg sm:text-xl text-foreground mb-3 tracking-wide">{s.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
