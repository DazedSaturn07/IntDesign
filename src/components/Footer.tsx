"use client";
const Footer = () => (
  <footer className="py-8 sm:py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground/60 tracking-wider text-center md:text-left">
      <p>&copy; {new Date().getFullYear()} 3D Interior Design Los Angeles</p>
      <p>9777 Wilshire Blvd, Beverly Hills, CA 90212 &middot; (424) 610-9427</p>
    </div>
  </footer>
);

export default Footer;
