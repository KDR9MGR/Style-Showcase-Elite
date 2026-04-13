import { motion } from "framer-motion";
import atelierImage from "@/assets/about-atelier.jpg";

const AtelierSection = () => {
  return (
    <section id="atelier" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={atelierImage}
            alt="Our Atelier"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
            width={1200}
            height={800}
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            The <span className="italic text-gold-gradient">Atelier</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Founded in the heart of Paris, Maison Élégance has been redefining luxury fashion since 1987. 
            Every piece is meticulously crafted by our master artisans, blending centuries-old techniques 
            with avant-garde vision.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            Our atelier is where imagination takes form — where the finest silks, hand-selected fabrics, 
            and precious materials are transformed into wearable art that transcends seasons and trends.
          </p>

          <div className="grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { number: "37+", label: "Years" },
              { number: "200+", label: "Artisans" },
              { number: "48", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-gold-gradient font-semibold">{stat.number}</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtelierSection;
