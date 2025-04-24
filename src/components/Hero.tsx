import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useProspect } from "@/hooks/use-prospect";
import { getVideoForVertical } from "@/utils/videoMappings";

const Hero = () => {
  const [firstName, setFirstName] = useState("there");
  const [businessName, setBusinessName] = useState("");
  const [vertical, setVertical] = useState("default");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoData, setVideoData] = useState(getVideoForVertical(vertical));
  const isMobile = useIsMobile();
  const { data: prospect, isLoading, error } = useProspect();
  
  useEffect(() => {
    console.log("Hero component - Prospect data:", prospect);
    
    // Set business name from prospect if available
    if (prospect?.business_name) {
      setBusinessName(prospect.business_name);
      console.log("Setting business name from prospect:", prospect.business_name);
    }
  }, [prospect]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    // Get name parameter (personal name)
    const nameParam = params.get("name");
    if (nameParam) {
      setFirstName(nameParam);
    }
    
    // Get business name parameter (override prospect data if provided in URL)
    const businessParam = params.get("business");
    if (businessParam) {
      setBusinessName(businessParam);
    }
    
    // Get vertical parameter for video selection
    const verticalParam = params.get("vertical");
    if (verticalParam) {
      setVertical(verticalParam);
      setVideoData(getVideoForVertical(verticalParam));
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

  // Determine what business name to display
  const displayBusinessName = businessName ? businessName : "Hyperbaric HQ";
  
  // Determine what intro text to display
  const introText = prospect?.intro_text || "A personalized message from Peter";

  return (
    <div className={`relative flex flex-col items-center text-white bg-[#140f0e]`}>
      <div className="absolute inset-0 -z-10 bg-[#140F0E]"></div>

      <div className="container px-4 md:px-6 flex flex-col items-center animate-fade-in pt-4 md:pt-20 bg-[#140f0e]">
        <div className="text-center space-y-2 md:space-y-6 max-w-4xl mx-auto">
          <p className="text-base md:text-xl text-white font-normal mb-0 md:mb-2">
            {displayBusinessName}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl tracking-tight leading-tight font-medium px-2">
            Hi {firstName}{businessName ? `, welcome to ${displayBusinessName}` : ", welcome to Hyperbaric HQ"}
          </h1>
          <p className="text-sm md:text-lg text-white/90 mt-1 md:mt-4">
            {introText}
          </p>
        </div>

        <div className="bg-gradient-to-br from-black/50 to-hbo-charcoal/50 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 w-full mx-auto animate-scale-up border border-white/10 mt-4 md:mt-8">
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center">
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-10" onClick={() => setIsVideoPlaying(true)}>
                <div className={cn("rounded-full bg-hbo-gold/90 flex items-center justify-center cursor-pointer hover:bg-hbo-gold transition-colors duration-300 shadow-lg", isMobile ? "w-12 h-12" : "w-20 h-20")}>
                  <Play className={cn("text-white", isMobile ? "w-6 h-6" : "w-10 h-10")} />
                </div>
              </div>
            )}
            {isVideoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoData.youtubeEmbedId}?autoplay=1`}
                title="Hyperbaric Chamber Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            ) : (
              <img 
                src={videoData.thumbnailUrl} 
                alt="Hyperbaric Chamber" 
                className="w-full h-full object-cover opacity-50" 
              />
            )}
          </div>
        </div>

        <div className="pt-4 pb-4 md:pt-6 w-full max-w-md mx-auto flex flex-col items-center space-y-2 md:space-y-4 px-4">
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
        <div className="w-full mt-8 relative">
          <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-t from-hbo-charcoal to-transparent" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-hbo-gold/30 to-transparent" />
          <div className="absolute inset-x-0 -bottom-12 h-24 from-hbo-charcoal to-hbo-charcoal/95 bg-[#140f0e]" />
        </div>
      )}
      
      {isMobile && (
        <div className="w-full mt-2 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-hbo-gold/30 to-transparent" />
        </div>
      )}
    </div>
  );
};

export default Hero;
