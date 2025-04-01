
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const ResearchSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  const researchData = [{
    title: "Improved Recovery for Athletes",
    description: "Studies show up to 30% faster recovery times for sports injuries when using hyperbaric oxygen therapy.",
    publication: "Journal of Sports Medicine, 2022"
  }, {
    title: "Enhanced Healing for Chronic Conditions",
    description: "Clinical trials demonstrate significant improvement in treatment of diabetic wounds and chronic inflammation.",
    publication: "International Hyperbaric Research, 2023"
  }, {
    title: "Cognitive Performance Benefits",
    description: "Research indicates improved brain function and faster recovery from concussions and TBI.",
    publication: "Neurological Science Quarterly, 2023"
  }];
  
  return <div id="research-section" className="py-8 md:py-24 from-hbo-charcoal to-hbo-charcoal/90 text-white bg-[#140f0e]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-16 animate-fade-in">
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-6 font-playfair px-2">The Science Behind Hyperbaric Oxygen Therapy</h2>
            <p className="text-sm md:text-lg text-hbo-off-white/90 max-w-2xl mx-auto px-2">
              Backed by extensive research and clinical studies, hyperbaric oxygen therapy offers proven benefits for a wide range of conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mb-6 md:mb-16">
            {researchData.map((item, index) => <div key={index} className={cn("bg-white/5 backdrop-blur-sm p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/10 animate-scale-up hover:transform hover:scale-105 transition-all duration-300", index === 1 && "[animation-delay:200ms]", index === 2 && "[animation-delay:400ms]")}>
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 font-playfair text-[#c8ae73]">{item.title}</h3>
                <p className="text-xs md:text-base text-hbo-off-white/80 mb-2 md:mb-4">{item.description}</p>
                <p className="text-xs md:text-sm text-hbo-off-white/60 italic">{item.publication}</p>
              </div>)}
          </div>

          <div className="text-center px-2 md:px-4">
            <p className="mb-3 md:mb-6 text-sm md:text-lg">Ready to bring this technology to your clinic?</p>
            <Button onClick={scrollToBooking} className={cn("bg-transparent border border-hbo-button-gold bg-hbo-button-gold/90 text-hbo-charcoal hover:bg-hbo-button-gold font-medium rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 w-full font-libre", isMobile ? "px-4 py-3 text-sm" : "px-12 py-6 text-lg")}>
              Book Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default ResearchSection;
