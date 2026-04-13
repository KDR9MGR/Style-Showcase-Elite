import { motion } from "framer-motion";
import collectionWomen from "@/assets/collection-women.jpg";
import collectionMen from "@/assets/collection-men.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

const collections = [
  { title: "Women", subtitle: "Ethereal Femininity", image: collectionWomen },
  { title: "Men", subtitle: "Modern Tailoring", image: collectionMen },
  { title: "Accessories", subtitle: "Statement Pieces", image: collectionAccessories },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Curated For You</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
          Our <span className="italic text-gold-gradient">Collections</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
          >
            <img
              src={col.image}
              alt={col.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-2">{col.subtitle}</p>
              <h3 className="font-display text-4xl md:text-5xl text-foreground">{col.title}</h3>
              <div className="mt-6 overflow-hidden">
                <span className="block font-body text-xs tracking-[0.3em] uppercase text-foreground border-b border-primary pb-1 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Discover
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
