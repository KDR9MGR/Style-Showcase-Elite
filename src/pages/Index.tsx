import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import CollectionsSection from "@/components/CollectionsSection";
import FeaturedSection from "@/components/FeaturedSection";
import AtelierSection from "@/components/AtelierSection";
import LookbookSection from "@/components/LookbookSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <CollectionsSection />
      <FeaturedSection />
      <AtelierSection />
      <LookbookSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
