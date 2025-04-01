
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import TrustSection from "@/components/TrustSection";
import ResearchSection from "@/components/ResearchSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hbo-charcoal to-hbo-charcoal/95">
      <Navigation />
      <Hero />
      <ResearchSection />
      <BookingSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
