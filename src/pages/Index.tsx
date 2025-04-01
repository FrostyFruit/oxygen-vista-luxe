
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import TrustSection from "@/components/TrustSection";
import ResearchSection from "@/components/ResearchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ResearchSection />
      <BookingSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
