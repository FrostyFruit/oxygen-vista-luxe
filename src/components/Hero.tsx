
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
      {/* Background with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-hbo-charcoal/90"
          style={{
            backgroundImage: `url('/lovable-uploads/f6007ac6-c9bc-45ad-8233-d53cabf97cd9.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            filter: 'brightness(0.7)'
          }}
        />
      </div>

      {/* Branding at the top */}
      <div className="w-full text-center pt-12 pb-4">
        <h3 className="text-xl font-playfair tracking-wide text-hbo-off-white/90 animate-fade-in">
          Hyperbaric HQ
        </h3>
      </div>

      <div className="container px-4 md:px-6 space-y-12 flex flex-col items-center animate-fade-in">
        {/* Hero content */}
        <div className="text-center space-y-4 max-w-4xl mx-auto pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-playfair">
            Hi <span className="text-hbo-emerald">{firstName}</span>, welcome to <br/> Hyperbaric HQ
          </h1>
          <p className="text-xl text-hbo-off-white/90">
            A personalized message from Peter
          </p>
        </div>

        {/* Video card */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-3xl w-full mx-auto animate-scale-up border border-white/10">
          <div className="relative aspect-video bg-black/40 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-hbo-gold/80 flex items-center justify-center cursor-pointer hover:bg-hbo-gold transition-colors duration-300">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <img 
              src="/lovable-uploads/f6007ac6-c9bc-45ad-8233-d53cabf97cd9.png" 
              alt="Hyperbaric Chamber" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6 w-full max-w-md mx-auto flex justify-center">
          <Button 
            className="bg-hbo-gold hover:bg-hbo-gold/90 text-hbo-charcoal font-medium rounded-full px-12 py-6 text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full"
            onClick={scrollToBooking}
          >
            Book Your Consultation
          </Button>
        </div>
        
        <p className="text-center text-white/80 text-sm">
          *First time hearing about HBOT? <button 
            onClick={scrollToResearch}
            className="text-hbo-gold hover:underline focus:outline-none"
          >
            Check out the research
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
