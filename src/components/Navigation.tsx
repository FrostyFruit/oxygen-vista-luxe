
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <div className="w-full bg-hbo-off-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="/" className="text-hbo-charcoal font-semibold">PROVIDERS</a>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/0654ca11-13a7-45d6-af61-fc4283f691fa.png" 
              alt="Hyperbaric HQ Logo" 
              className="h-12"
            />
          </a>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end gap-2">
          <a href="/" className="text-hbo-charcoal font-semibold">JOIN-HQ</a>
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Button 
              variant="default" 
              className="bg-hbo-emerald hover:bg-hbo-emerald/90 text-white rounded-full px-4 py-1 h-auto text-sm"
            >
              Subscribe
            </Button>
            
            <Button 
              variant="outline" 
              className="border-hbo-charcoal text-hbo-charcoal hover:bg-gray-100 rounded-full px-4 py-1 h-auto text-sm"
            >
              Shop Chambers
            </Button>
            
            <div className="w-8 h-8 rounded-full bg-hbo-charcoal flex items-center justify-center text-white">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
