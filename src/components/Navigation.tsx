import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navigation = () => {
  return <div className="w-full backdrop-blur-md border-b border-white/10 bg-[F4F3F0] bg-zinc-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="/" className="text-hbo-black hover:text-hbo-gold transition-colors font-libre">PROVIDERS</a>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center">
          <a href="/" className="flex items-center transform hover:scale-105 transition-transform">
            <img alt="Hyperbaric HQ Logo" className="h-14" src="/lovable-uploads/36208eca-527e-4ee7-843c-06ba3c9308e9.png" />
          </a>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end gap-2">
          <a href="/" className="text-hbo-off-white hover:text-hbo-charcoal transition-colors font-libre">JOIN-HQ</a>
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Button variant="default" className="bg-hbo-button-green hover:bg-hbo-button-green/90 text-white rounded-full px-4 py-1 h-auto text-sm shadow-md font-libre">
              Subscribe
            </Button>
            
            <Button variant="outline" className="bg-hbo-button-gold/90 text-hbo-charcoal hover:bg-hbo-button-gold border-hbo-button-gold rounded-full px-4 py-1 h-auto text-sm shadow-md font-libre">
              Shop Chambers
            </Button>
            
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-hbo-emerald to-hbo-gold/80 flex items-center justify-center text-white shadow-md">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Navigation;