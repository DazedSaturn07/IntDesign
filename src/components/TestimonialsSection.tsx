"use client";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Jonatan Chen",
    text: "Absolutely thrilled with our experience! Dani and Nicole made the entire remodeling process a breeze. They're an incredible team who expertly guided us through our first home renovation. Our home now feels like a dream coastal getaway — warm, inviting, and so livable.",
    role: "Homeowner, Malibu",
  },
  {
    name: "Daniel B",
    text: "Best service, helped me get the exact kitchen I wanted! Very realistic design and helped me with all the materials. Highly recommended!",
    role: "Homeowner, Beverly Hills",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="relative section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection className="text-center mb-14 md:mb-20">
        <p className="text-primary/70 tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 md:mb-6 font-sans font-medium">Testimonials</p>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
          Client <span className="text-gold-gradient">Stories</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-7 sm:p-10 relative group hover:border-primary/20 transition-colors duration-500 h-full">
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-primary/15 absolute top-6 sm:top-8 right-6 sm:right-8" />
              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed italic mb-6 sm:mb-8 font-light text-base sm:text-lg">&quot;{t.text}&quot;</p>
              <div>
                <p className="text-foreground font-medium tracking-wide text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs tracking-wider mt-1">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
