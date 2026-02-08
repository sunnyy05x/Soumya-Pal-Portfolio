import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Download, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import cvFile from "@/assets/Soumya_Pal_CV.pdf";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Teaching", href: "#teaching" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-xl font-serif font-bold tracking-tight text-primary z-50 relative"
        >
          Dr. Soumya Pal
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="outline" size="sm" className="gap-2 font-sans" asChild>
            <a href={cvFile} download="Soumya_Pal_CV.pdf">
              <Download className="h-4 w-4" />
              CV
            </a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-2xl font-serif font-medium text-primary"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" size="lg" className="mt-4 gap-2" asChild>
                <a href={cvFile} download="Soumya_Pal_CV.pdf">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
