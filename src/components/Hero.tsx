import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const [firstName, setFirstName] = useState("there");
  useEffect(() => {
    // Extract name from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    if (nameParam) {
      setFirstName(nameParam);
    }
  }, []);
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToResearch = () => {
    const researchSection = document.getElementById("research-section");
    if (researchSection) {
      researchSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="relative min-h-screen flex flex-col items-center text-white bg-[140f0e] bg-[#140f0e]">
      {/* Updated background color to #140F0E */}
      <div className="absolute inset-0 -z-10 bg-[#140F0E]"></div>

      <div className="container px-4 md:px-6 space-y-12 flex flex-col items-center animate-fade-in pt-20 bg-[140F0E] bg-[#140f0e]">
        {/* Hero content with updated typography styling */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <p className="text-xl text-white font-normal mb-2">Hyperbaric HQ</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hi {firstName}, welcome to<br />Hyperbaric HQ
          </h1>
          <p className="text-lg text-white/90 mt-4">
            A personalized message from Peter
          </p>
        </div>

        {/* Video card with premium styling */}
        <div className="bg-gradient-to-br from-black/50 to-hbo-charcoal/50 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-3xl w-full mx-auto animate-scale-up border border-white/10">
          <div className="relative aspect-video rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-hbo-gold/90 flex items-center justify-center cursor-pointer hover:bg-hbo-gold transition-colors duration-300 shadow-lg">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <iframe src="https://www.loom.com/embed/ebd367a76d474c64a56e259d335aba3d" frameBorder="0" allowFullScreen className="w-full h-full absolute inset-0 opacity-0" title="Hyperbaric HQ Presentation" allow="autoplay; fullscreen" style={{
            opacity: 0.001
          }} // Almost invisible but still loads
          />
            <img src="/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png" alt="Hyperbaric Chamber" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>

        {/* CTA Buttons - RETAINING THE ORIGINAL BUTTON LAYOUT AND COLORS as requested */}
        <div className="pt-6 w-full max-w-md mx-auto flex flex-col items-center space-y-4">
          <Button className="bg-hbo-button-green hover:bg-hbo-button-green/90 text-white font-medium rounded-full px-12 py-6 text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full font-libre" onClick={scrollToBooking}>
            Book Your Consultation
          </Button>
          
          <p className="text-center text-white/90 text-sm my-3 font-libre italic">
            First time hearing about HBOT? <button onClick={scrollToResearch} className="text-hbo-gold hover:underline focus:outline-none font-medium">
              Check out the research
            </button>
          </p>
          
          <Button variant="outline" className="bg-transparent border border-hbo-button-gold bg-hbo-button-gold/90 text-hbo-charcoal hover:bg-hbo-button-gold font-medium rounded-full px-12 py-6 text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full font-libre" onClick={scrollToResearch}>
            Explore Research
          </Button>
        </div>
      </div>
      
      {/* Improved transition between sections - smoother gradient */}
      <div className="w-full mt-16 relative">
        <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-t from-hbo-charcoal to-transparent" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-hbo-gold/30 to-transparent" />
        <div className="absolute inset-x-0 -bottom-12 h-24 from-hbo-charcoal to-hbo-charcoal/95 bg-[140f0e] bg-[#140f0e]" />
      </div>
    </div>;
};
export default Hero;