
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
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResearch = () => {
    const researchSection = document.getElementById("research-section");
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* Premium gradient background overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(26, 31, 44, 0.95), rgba(26, 31, 44, 0.85)), 
              url('/lovable-uploads/56bf985d-0b41-494e-926d-3c284fa69ed0.png')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
      </div>

      <div className="container px-4 md:px-6 space-y-12 flex flex-col items-center animate-fade-in pt-20">
        {/* Hero content */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-playfair">
            Hi <span className="text-hbo-gold">{firstName}</span>, welcome to <br/> Hyperbaric HQ
          </h1>
          <p className="text-xl text-hbo-off-white/90">
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
            <iframe 
              src="https://www.loom.com/embed/ebd367a76d474c64a56e259d335aba3d" 
              frameBorder="0" 
              allowFullScreen 
              className="w-full h-full absolute inset-0 opacity-0"
              title="Hyperbaric HQ Presentation"
              allow="autoplay; fullscreen"
              style={{ opacity: 0.001 }} // Almost invisible but still loads
            />
            <img 
              src="/lovable-uploads/56bf985d-0b41-494e-926d-3c284fa69ed0.png" 
              alt="Hyperbaric Chamber" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* CTA Buttons - Stacked with premium styling */}
        <div className="pt-6 w-full max-w-md mx-auto flex flex-col items-center space-y-4">
          <Button 
            className="bg-hbo-emerald hover:bg-hbo-emerald/90 text-white font-medium rounded-full px-12 py-6 text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full"
            onClick={scrollToBooking}
          >
            Book Your Consultation
          </Button>
          
          <p className="text-center text-white/90 text-sm my-3">
            *First time hearing about HBOT? <button 
              onClick={scrollToResearch}
              className="text-hbo-gold hover:underline focus:outline-none font-medium"
            >
              Check out the research
            </button>
          </p>
          
          <Button 
            variant="outline"
            className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium rounded-full px-12 py-6 text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full"
            onClick={scrollToResearch}
          >
            Explore Research
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
