import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Maison Élégance" className="h-20 w-auto object-contain mb-4" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Redefining luxury fashion since 1987. Crafted in Paris, worn worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Collections", links: ["Women", "Men", "Accessories", "Haute Couture"] },
            { title: "Maison", links: ["Our Story", "Atelier", "Sustainability", "Careers"] },
            { title: "Support", links: ["Contact Us", "Shipping", "Returns", "Size Guide"] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-body text-xs tracking-[0.3em] uppercase text-foreground mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Maison Élégance. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <a key={link} href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
