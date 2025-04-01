import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}
const Testimonial = ({
  quote,
  author,
  company
}: TestimonialProps) => <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <p className="text-gray-700 mb-3 md:mb-4 italic text-sm md:text-base">"{quote}"</p>
    <div>
      <p className="font-medium text-hbo-charcoal text-sm md:text-base">{author}</p>
      <p className="text-xs md:text-sm text-gray-500">{company}</p>
    </div>
  </div>;
const TrustSection = () => {
  const isMobile = useIsMobile();
  const testimonials = [{
    quote: "We're fully booked out and our clients are loving it!",
    author: "Natasha Friedman",
    company: "Infinity IV"
  }, {
    quote: "Hyperbaric has transformed my clinic not only the business, but my communities results.",
    author: "Michael Nguyen",
    company: "Feel Good Nation"
  }, {
    quote: "I saw so many benefits with my son and I, from energy to injuries disappearing.",
    author: "Suzannah",
    company: "Client"
  }];

  // Partner brand images
  const partnerBrands = [{
    name: "OneBase Health",
    image: "/placeholder.svg"
  }, {
    name: "HPO Tech",
    image: "/placeholder.svg"
  }, {
    name: "Solbassium",
    image: "/placeholder.svg"
  }];
  return <div id="trust-section" className="py-12 md:py-24 bg-gradient-to-b from-hbo-off-white to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-hbo-charcoal mb-8 md:mb-16 animate-fade-in px-2">Trusted by Industry Leaders</h2>

          {/* Partner Logos - Updated to use images */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16 items-center justify-items-center">
            {partnerBrands.map((brand, i) => <div key={i} className={cn("bg-gray-50 p-3 md:p-4 rounded-lg shadow-sm animate-fade-in transition-all duration-300 hover:shadow-md", i === 1 && "[animation-delay:200ms]", i === 2 && "[animation-delay:400ms]")}>
                <div className="relative w-full aspect-[3/2] max-w-[120px] md:max-w-[180px]">
                  <img src={brand.image} alt={`${brand.name} logo`} className="w-full h-full object-contain" />
                </div>
                <p className="mt-2 text-xs md:text-sm text-center text-gray-600 font-medium">{brand.name}</p>
              </div>)}
          </div>

          {/* Testimonials */}
          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3">
            {testimonials.map((testimonial, i) => <div key={i} className={cn("animate-fade-in", i === 1 && "[animation-delay:200ms]", i === 2 && "[animation-delay:400ms]")}>
                <Testimonial {...testimonial} />
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default TrustSection;