import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Maison Élégance doesn't just make clothes — they craft experiences. Every piece feels like it was made exclusively for me.",
    author: "Isabella Rossi",
    role: "Vogue Italia Editor",
  },
  {
    quote: "The attention to detail is unparalleled. From the first fitting to the final stitch, perfection is their only standard.",
    author: "James Chen",
    role: "Creative Director",
  },
  {
    quote: "Wearing Maison Élégance is like wearing confidence itself. Their designs speak a language of timeless sophistication.",
    author: "Amélie Laurent",
    role: "Actress & Ambassador",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Voices of <span className="italic text-gold-gradient">Elegance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-card border border-border p-8 md:p-10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-lg italic text-foreground leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-body text-sm font-medium text-foreground">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground tracking-wider mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
