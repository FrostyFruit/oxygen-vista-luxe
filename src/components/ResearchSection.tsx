import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const ResearchSection = () => {
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
  return <div id="research-section" className="py-24 from-hbo-charcoal to-hbo-charcoal/90 text-white bg-[140f0e] bg-[#140f0e]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">The Science Behind Hyperbaric Oxygen Therapy</h2>
            <p className="text-lg text-hbo-off-white/90 max-w-2xl mx-auto">
              Backed by extensive research and clinical studies, hyperbaric oxygen therapy offers proven benefits for a wide range of conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {researchData.map((item, index) => <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 animate-scale-up hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-hbo-gold font-playfair">{item.title}</h3>
                <p className="text-hbo-off-white/80 mb-4">{item.description}</p>
                <p className="text-sm text-hbo-off-white/60 italic">{item.publication}</p>
              </div>)}
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg">Ready to bring this technology to your clinic?</p>
            <Button onClick={scrollToBooking} className={cn("bg-hbo-gold hover:bg-hbo-gold/90 text-hbo-charcoal rounded-full px-8 py-6 text-lg font-medium transform transition-transform duration-300 hover:scale-105")}>
              Book Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default ResearchSection;