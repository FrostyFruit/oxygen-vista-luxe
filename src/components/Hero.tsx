
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [firstName, setFirstName] = useState("there");
  const isMobile = useIsMobile();

  useEffect(() => {
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

  return (
    <div className={`relative ${isMobile ? 'min-h-[85vh]' : 'min-h-screen'} flex flex-col items-center text-white bg-[#140f0e]`}>
      <div className="absolute inset-0 -z-10 bg-[#140F0E]"></div>

      <div className="container px-4 md:px-6 space-y-4 md:space-y-12 flex flex-col items-center animate-fade-in pt-4 md:pt-20 bg-[#140f0e]">
        <div className="text-center space-y-2 md:space-y-6 max-w-4xl mx-auto">
          <p className="text-base md:text-xl text-white font-normal mb-0 md:mb-2">Hyperbaric HQ</p>
          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl tracking-tight leading-tight font-medium px-2">
            Hi {firstName}, welcome to<br />Hyperbaric HQ
          </h1>
          <p className="text-sm md:text-lg text-white/90 mt-1 md:mt-4">
            A personalized message from Peter
          </p>
        </div>

        <div className="bg-gradient-to-br from-black/50 to-hbo-charcoal/50 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 w-full mx-auto animate-scale-up border border-white/10">
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className={cn("rounded-full bg-hbo-gold/90 flex items-center justify-center cursor-pointer hover:bg-hbo-gold transition-colors duration-300 shadow-lg", isMobile ? "w-12 h-12" : "w-20 h-20")}>
                <Play className={cn("text-white", isMobile ? "w-6 h-6" : "w-10 h-10")} />
              </div>
            </div>
            <iframe src="https://www.loom.com/embed/ebd367a76d474c64a56e259d335aba3d" frameBorder="0" allowFullScreen className="w-full h-full absolute inset-0 opacity-0" title="Hyperbaric HQ Presentation" allow="autoplay; fullscreen" style={{
              opacity: 0.001
            }} />
            <img src="/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png" alt="Hyperbaric Chamber" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>

        <div className="pt-2 md:pt-6 w-full max-w-md mx-auto flex flex-col items-center space-y-2 md:space-y-4 px-4">
          <Button className="bg-hbo-button-green hover:bg-hbo-button-green/90 text-white font-medium rounded-full px-6 md:px-12 py-3 md:py-6 text-sm md:text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full font-libre" onClick={scrollToBooking}>
            Book Your Consultation
          </Button>
          
          <p className="text-center text-white/90 text-xs md:text-sm my-1 md:my-3 font-libre italic">
            First time hearing about HBOT? <button onClick={scrollToResearch} className="hover:underline focus:outline-none font-medium text-slate-50">
              Check out the research
            </button>
          </p>
          
          <a href="https://www.hyperbarichq.com/research">
            <Button variant="outline" className="bg-transparent border border-hbo-button-gold bg-hbo-button-gold/90 text-hbo-charcoal hover:bg-hbo-button-gold font-medium rounded-full px-6 md:px-12 py-3 md:py-6 text-sm md:text-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full font-libre">
              Explore Research
            </Button>
          </a>
        </div>
      </div>
      
      {!isMobile && (
        <div className="w-full mt-16 relative">
          <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-t from-hbo-charcoal to-transparent" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-hbo-gold/30 to-transparent" />
          <div className="absolute inset-x-0 -bottom-12 h-24 from-hbo-charcoal to-hbo-charcoal/95 bg-[#140f0e]" />
        </div>
      )}
      
      {isMobile && (
        <div className="w-full mt-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-hbo-gold/30 to-transparent" />
        </div>
      )}
    </div>
  );
};

export default Hero;
