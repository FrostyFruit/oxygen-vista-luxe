
import { useState } from "react";

const BookingSection = () => {
  return (
    <div id="booking-section" className="py-24 bg-hbo-off-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-hbo-charcoal mb-4 font-playfair">
              Get in Touch with Peter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'll explore if hyperbaric oxygen therapy is the right fit for your clinic and clients.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 animate-scale-up border border-gray-100">
            <div className="text-center p-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-4">For inquiries about hyperbaric oxygen therapy solutions:</p>
              <p className="font-medium">Email: breathebetter@hyperbarichq.com</p>
              <p className="font-medium">Phone: +61 0426-259-808</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
