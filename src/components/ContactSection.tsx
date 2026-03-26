"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", description: "" });
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <p className="text-primary/70 tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 md:mb-6 font-sans font-medium">Contact</p>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
            Let&apos;s Create <span className="text-gold-gradient">Together</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <AnimatedSection direction="left">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6 sm:mb-10">
                Ready to bring your vision to life? Reach out for a free consultation and let&apos;s discuss your project.
              </p>
              {[
                { icon: Phone, label: "(424) 610-9427", href: "tel:4246109427" },
                { icon: MapPin, label: "9777 Wilshire Blvd, Beverly Hills, CA 90212" },
                { icon: Clock, label: "Open 24/7 — Always available" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(42 52% 54% / 0.1)" }}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-2 group-hover:gap-3">
                      {item.label}<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-all" />
                    </a>
                  ) : (
                    <p className="text-foreground/80 text-xs sm:text-sm">{item.label}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input type="text" placeholder="Your Name" required maxLength={100} value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-premium" />
              <input type="email" placeholder="Your Email" required maxLength={255} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-premium" />
              <textarea placeholder="Tell us about your project..." required maxLength={1000} rows={5}
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input-premium resize-none" />
              <button type="submit" className="btn-premium w-full flex items-center justify-center gap-3">
                <Send className="w-4 h-4" />Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
