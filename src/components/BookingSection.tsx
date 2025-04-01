
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

const BookingSection = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const isMobile = useIsMobile();
  const calendlyScriptRef = useRef<HTMLScriptElement | null>(null);
  const calendlyInitialized = useRef(false);
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  // Load the Calendly script once
  useEffect(() => {
    if (!calendlyScriptRef.current && !document.getElementById('calendly-script')) {
      console.log("Creating Calendly script element");
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.id = 'calendly-script';
      
      script.onload = () => {
        console.log("Calendly script loaded successfully");
        setIsCalendlyLoaded(true);
      };
      
      script.onerror = (e) => {
        console.error("Failed to load Calendly script:", e);
      };
      
      document.body.appendChild(script);
      calendlyScriptRef.current = script;
    } else if (document.getElementById('calendly-script')) {
      // If script already exists but state doesn't reflect it
      console.log("Calendly script already exists in DOM");
      setIsCalendlyLoaded(true);
    }

    // Clean up function - reset initialization flag only
    return () => {
      console.log("BookingSection unmounting, cleaning up");
      calendlyInitialized.current = false;
    };
  }, []); // Empty dependency array to ensure this only runs once

  // Initialize Calendly widget once the script is loaded
  useEffect(() => {
    // Only proceed if all conditions are met
    if (!isCalendlyLoaded || !window.Calendly || calendlyInitialized.current || !widgetContainerRef.current) {
      return; // Exit early if conditions aren't met
    }
    
    console.log("Attempting to initialize Calendly widget");
    
    // Clear any existing content to prevent duplicate widgets
    if (widgetContainerRef.current) {
      widgetContainerRef.current.innerHTML = '';
    
      const params = new URLSearchParams(window.location.search);
      const businessParam = params.get("business") || "";
      
      // Get UTM parameters for Calendly tracking
      const utmSource = params.get("utm_source") || "";
      const utmMedium = params.get("utm_medium") || "";
      const utmCampaign = params.get("utm_campaign") || "";
      
      try {
        // Set the flag first to prevent multiple initialization attempts
        calendlyInitialized.current = true;
        
        // Small timeout to ensure the DOM is ready
        setTimeout(() => {
          window.Calendly.initInlineWidget({
            url: `https://calendly.com/breathebetter-hyperbarichq/30min${isMobile ? '?hide_gdpr_banner=1' : ''}`,
            parentElement: widgetContainerRef.current,
            prefill: {
              name: businessParam,
            },
            utm: {
              utmSource,
              utmMedium, 
              utmCampaign
            }
          });
          console.log("Calendly widget initialized successfully");
        }, 100);
      } catch (error) {
        console.error("Failed to initialize Calendly widget:", error);
        // Reset the flag if initialization fails so we can try again
        calendlyInitialized.current = false;
      }
    }
  }, [isCalendlyLoaded, isMobile]); // Removed widgetContainerRef from dependencies

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
              ref={widgetContainerRef}
              id="calendly-inline-widget"
              className="calendly-inline-widget" 
              style={{ minWidth: '280px', height: isMobile ? '450px' : '700px' }}
              data-url={`https://calendly.com/breathebetter-hyperbarichq/30min${isMobile ? '?hide_gdpr_banner=1' : ''}`}
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
