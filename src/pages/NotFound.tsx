
import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  
  useEffect(() => {
    console.log("NotFound component loaded");
    console.log("Current hostname:", hostname);
    console.log("Detected subdomain:", subdomain);
    
    // Check if we're on a non-www subdomain that might be a business subdomain
    if (subdomain !== 'www' && 
        subdomain !== 'localhost' && 
        subdomain !== 'hyperbarichq' &&
        !hostname.includes('lovableproject.com') &&
        !hostname.includes('github.io')) {
      console.log("Valid business subdomain detected, redirecting to home");
      setShouldRedirect(true);
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname, hostname, subdomain]);

  if (shouldRedirect) {
    console.log("Redirecting to homepage with subdomain data");
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
