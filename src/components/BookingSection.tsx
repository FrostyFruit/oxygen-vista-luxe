
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

const BookingSection = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const isMobile = useIsMobile();
  const calendlyScriptRef = useRef<HTMLScriptElement | null>(null);
  const calendlyInitialized = useRef(false);

  useEffect(() => {
    // Only add the script once
    if (!calendlyScriptRef.current && !document.getElementById('calendly-script')) {
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.id = 'calendly-script';
      
      script.onload = () => {
        setIsCalendlyLoaded(true);
      };
      
      document.body.appendChild(script);
      calendlyScriptRef.current = script;
    }

    return () => {
      // Do not remove the script on component unmount to prevent flickering
      // if the component re-renders
    };
  }, []);

  // Initialize Calendly widget once the script is loaded
  useEffect(() => {
    if (isCalendlyLoaded && window.Calendly && !calendlyInitialized.current) {
      const calendlyContainer = document.getElementById('calendly-inline-widget');
      
      if (calendlyContainer) {
        // Clear any existing content
        calendlyContainer.innerHTML = '';
        
        const params = new URLSearchParams(window.location.search);
        const businessParam = params.get("business") || "";
        
        // Get UTM parameters for Calendly tracking
        const utmSource = params.get("utm_source") || "";
        const utmMedium = params.get("utm_medium") || "";
        const utmCampaign = params.get("utm_campaign") || "";
        
        window.Calendly.initInlineWidget({
          url: `https://calendly.com/breathebetter-hyperbarichq/30min${isMobile ? '?hide_gdpr_banner=1' : ''}`,
          parentElement: calendlyContainer,
          prefill: {
            name: businessParam,
          },
          utm: {
            utmSource,
            utmMedium, 
            utmCampaign
          }
        });
        
        calendlyInitialized.current = true;
      }
    }
    
    return () => {
      calendlyInitialized.current = false;
    };
  }, [isCalendlyLoaded, isMobile]);

  return (
    <div id="booking-section" className={`py-6 ${isMobile ? 'py-8' : 'py-24'} bg-hbo-off-white`}>
      <div className="container px-3 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-3 md:mb-12 animate-fade-in">
            <h2 className="text-xl md:text-4xl font-bold text-hbo-charcoal mb-2 md:mb-4 font-playfair">
              Reserve Your 30 Minute Session with Peter
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Pick a time that works best for you. We'll explore if hyperbaric oxygen therapy is the right fit for your clinic and clients.
            </p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-2 md:p-6 animate-scale-up border border-gray-100">
            <div 
              id="calendly-inline-widget"
              className="calendly-inline-widget" 
              style={{ minWidth: '280px', height: isMobile ? '450px' : '700px' }}
            >
              {!isCalendlyLoaded && (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse flex flex-col items-center gap-3">
                    <Skeleton className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-hbo-emerald/30" />
                    <Skeleton className="h-2 md:h-4 bg-gray-200 rounded w-1/2" />
                    <Skeleton className="h-2 md:h-4 bg-gray-200 rounded w-1/3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
