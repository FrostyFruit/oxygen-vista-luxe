import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="text-white py-12 bg-[#140f0e]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hyperbaric HQ</h3>
            <p className="text-gray-300 max-w-xs">
              Premium hyperbaric oxygen therapy chambers for wellness clinics and medical professionals.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white">
                  About HBOT
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white">
                  Benefits
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-gray-300 hover:text-white">
                  Research
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@hyperbarichq.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Hyperbaric HQ. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;