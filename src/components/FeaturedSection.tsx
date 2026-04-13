import { motion } from "framer-motion";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";

const products = [
  { name: "Noir Velvet Gown", price: "$2,890", category: "Evening Wear", image: featured1 },
  { name: "Gold Button Blazer", price: "$1,450", category: "Ready-to-Wear", image: featured2 },
  { name: "Silk Flow Dress", price: "$1,780", category: "Resort", image: featured3 },
];

const FeaturedSection = () => {
  return (
    <section id="new-arrivals" className="py-24 md:py-32 bg-secondary">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Just Arrived</p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
              New <span className="italic text-gold-gradient">Arrivals</span>
            </h2>
          </div>
          <a href="#" className="mt-6 md:mt-0 font-body text-sm tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity">
            View All Pieces
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-full bg-gold-gradient text-primary-foreground py-3 font-body text-sm tracking-[0.2em] uppercase">
                    Add to Bag
                  </button>
                </div>
              </div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{product.category}</p>
              <h3 className="font-display text-xl text-foreground mb-1">{product.name}</h3>
              <p className="font-body text-sm text-primary tracking-wider">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
