
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="text-white py-8 md:py-12 bg-[#140f0e]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Hyperbaric HQ</h3>
            <p className="text-gray-300 max-w-xs text-sm md:text-base">
              Premium hyperbaric oxygen therapy chambers for wellness clinics and medical professionals.
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white text-sm md:text-base">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white text-sm md:text-base">
                  About HBOT
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white text-sm md:text-base">
                  Benefits
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white text-sm md:text-base">
                  Research
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold">Contact</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
              <li>Email: breathebetter@hyperbarichq.com</li>
              <li>Phone: +61 0426-259-808</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
            © {currentYear} Hyperbaric HQ. All rights reserved.
          </p>
          <div className="flex space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs md:text-sm h-8">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs md:text-sm h-8">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
