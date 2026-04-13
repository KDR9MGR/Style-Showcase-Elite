import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Luxury fashion runway"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 overlay-dark" />
      <div className="absolute inset-0 overlay-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6"
        >
          Spring / Summer 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight max-w-4xl"
        >
          The Art of
          <span className="block text-gold-gradient font-semibold italic">Timeless</span>
          Elegance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-muted-foreground text-lg mt-8 max-w-lg tracking-wide"
        >
          Where haute couture meets contemporary vision. Discover pieces crafted for those who define style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex gap-6"
        >
          <a
            href="#collections"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Explore Collection
          </a>
          <a
            href="#lookbook"
            className="border border-primary text-primary px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Lookbook
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
