
import { useState, useEffect } from "react";

const BookingSection = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="booking-section" className="py-24 bg-hbo-off-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-hbo-charcoal mb-4 font-playfair">
              Reserve Your 30 Minute Session with Peter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick a time that works best for you. We'll explore if hyperbaric oxygen therapy is the right fit for your clinic and clients.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 animate-scale-up border border-gray-100">
            {isCalendlyLoaded ? (
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/breathebetter-hyperbarichq/30min"
                style={{ minWidth: '320px', height: '700px' }}
              />
            ) : (
              <div className="h-[700px] flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hbo-emerald/30"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
