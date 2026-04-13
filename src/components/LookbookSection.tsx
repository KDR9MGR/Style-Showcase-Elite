import { motion } from "framer-motion";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import heroImage from "@/assets/hero-fashion.jpg";

const LookbookSection = () => {
  return (
    <section id="lookbook" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Editorial</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
          The <span className="italic text-gold-gradient">Lookbook</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer"
        >
          <img src={heroImage} alt="Lookbook" loading="lazy" className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
          <div className="absolute bottom-6 left-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">Look 01</p>
            <p className="font-display text-2xl text-foreground">Midnight Noir</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden group cursor-pointer"
        >
          <img src={featured1} alt="Lookbook" loading="lazy" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">Look 02</p>
            <p className="font-display text-lg text-foreground">Soirée</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden group cursor-pointer"
        >
          <img src={featured2} alt="Lookbook" loading="lazy" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">Look 03</p>
            <p className="font-display text-lg text-foreground">Urban Edge</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-2 relative overflow-hidden group cursor-pointer"
        >
          <img src={heroImage} alt="Lookbook" loading="lazy" className="w-full h-48 md:h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">Look 04</p>
            <p className="font-display text-lg text-foreground">Runway Dreams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LookbookSection;
