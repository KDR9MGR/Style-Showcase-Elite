import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Atelier", href: "#atelier" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 h-full flex items-center">
            <img src="/logo.png" alt="Maison Élégance" className="h-16 w-auto object-contain" />
          </a>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Search size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <User size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors hidden sm:block" />
              <div className="relative">
                <ShoppingBag size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-display text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
