
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useProspect = () => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  
  const isLocalhost = hostname === 'localhost' || hostname.includes('lovableproject.com');
  const isMainDomain = subdomain === 'hyperbarichq' || subdomain === 'www';
  
  // For development, allow testing with a subdomain parameter
  const params = new URLSearchParams(window.location.search);
  const testSubdomain = params.get('subdomain');
  
  // Use either the actual subdomain or the test subdomain for development
  const effectiveSubdomain = (isLocalhost && testSubdomain) ? testSubdomain : subdomain;
  
  console.log("UseProspect Hook - Effective subdomain:", effectiveSubdomain);
  console.log("UseProspect Hook - Is localhost:", isLocalhost);
  console.log("UseProspect Hook - Is main domain:", isMainDomain);

  return useQuery({
    queryKey: ['prospect', effectiveSubdomain],
    queryFn: async () => {
      console.log("Fetching prospect data for subdomain:", effectiveSubdomain);
      
      const { data, error } = await supabase
        .from('prospects')
        .select('*')
        .eq('subdomain', effectiveSubdomain)
        .single();

      if (error) {
        console.error("Error fetching prospect data:", error);
        throw error;
      }
      
      console.log("Prospect data fetched:", data);
      return data;
    },
    enabled: !!effectiveSubdomain && !isMainDomain,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
