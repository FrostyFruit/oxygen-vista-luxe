
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Testimonial = ({ quote, author, company }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-medium text-hbo-charcoal">{author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

const TrustSection = () => {
  const testimonials = [
    {
      quote: "We're fully booked out and our clients are loving it!",
      author: "Natasha Friedman",
      company: "Infinity IV"
    },
    {
      quote: "Hyperbaric has transformed my clinic not only the business, but my communities results.",
      author: "Michael Nguyen",
      company: "Feel Good Nation"
    },
    {
      quote: "I saw so many benefits with my son and I, from energy to injuries disappearing.",
      author: "Suzannah",
      company: "Client"
    }
  ];

  return (
    <div id="research-section" className="py-24 bg-gradient-to-b from-hbo-off-white to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-hbo-charcoal mb-16 animate-fade-in">
            Trusted by Leading Wellness Professionals
          </h2>

          {/* Partner Logos */}
          <div className="grid grid-cols-3 gap-8 mb-16 items-center justify-items-center opacity-80">
            <div className={cn("text-center animate-fade-in transition-all duration-300 hover:opacity-100")}>
              <div className="font-playfair text-xl font-bold text-hbo-charcoal">OneBase Health</div>
            </div>
            <div className={cn("text-center animate-fade-in [animation-delay:200ms] transition-all duration-300 hover:opacity-100")}>
              <div className="font-playfair text-xl font-bold text-hbo-charcoal">HPO Tech</div>
            </div>
            <div className={cn("text-center animate-fade-in [animation-delay:400ms] transition-all duration-300 hover:opacity-100")}>
              <div className="font-playfair text-xl font-bold text-hbo-charcoal">Solbassium</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className={cn(
                  "animate-fade-in",
                  i === 1 && "[animation-delay:200ms]",
                  i === 2 && "[animation-delay:400ms]"
                )}
              >
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
