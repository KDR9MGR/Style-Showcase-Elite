import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">Stay Connected</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
          Join the <span className="italic text-gold-gradient">Maison</span>
        </h2>
        <p className="font-body text-muted-foreground mb-10">
          Be the first to discover new collections, exclusive events, and behind-the-scenes stories from our atelier.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-secondary border border-border px-6 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="bg-gold-gradient text-primary-foreground px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
