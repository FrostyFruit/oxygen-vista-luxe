
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
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-hbo-charcoal/80"
          style={{
            backgroundImage: `url('/lovable-uploads/f6007ac6-c9bc-45ad-8233-d53cabf97cd9.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            filter: 'brightness(0.7)'
          }}
        />
      </div>

      <div className="container px-4 md:px-6 space-y-12 py-12 animate-fade-in">
        {/* Hero content */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi <span className="text-hbo-emerald">{firstName}</span>, welcome to Hyperbaric HQ
          </h1>
          <p className="text-xl text-hbo-off-white/80">
            A message from Peter
          </p>
        </div>

        {/* Video card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-3 max-w-3xl w-full mx-auto animate-scale-up">
          <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden flex items-center justify-center">
            {/* Placeholder for actual video - would be replaced with an iframe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-hbo-emerald/80 flex items-center justify-center cursor-pointer hover:bg-hbo-emerald transition-colors duration-300">
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <Button 
            className={cn(
              "bg-hbo-emerald hover:bg-hbo-emerald/90 text-white rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto btn-hover"
            )}
            onClick={scrollToBooking}
          >
            Book Your Consultation
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto btn-hover"
            onClick={scrollToResearch}
          >
            Explore Research
          </Button>
        </div>
        
        <p className="text-center text-white/70 text-sm">
          *First time hearing about HBOT? Check out the research
        </p>
      </div>
    </div>
  );
};

export default Hero;
