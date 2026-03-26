"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "gallery" },
  { label: "Reviews", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <span className="heading-display text-xl sm:text-2xl md:text-3xl text-gold-gradient font-semibold tracking-wider group-hover:opacity-80 transition-opacity">
            3D Interior Design
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.id
                  ? "text-primary bg-primary/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:4246109427" className="ml-4 btn-premium !px-6 !py-2.5 !text-xs flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground/80 hover:text-foreground transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl overflow-hidden border-t border-border/20"
          >
            <div className="flex flex-col items-center gap-3 py-8 px-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
                  className={`text-sm tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300 w-full text-center ${
                    activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:4246109427" className="btn-premium !text-xs mt-4 w-full text-center">
                (424) 610-9427
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
