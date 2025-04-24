
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useProspect = () => {
  const subdomain = window.location.hostname.split('.')[0];

  return useQuery({
    queryKey: ['prospect', subdomain],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('prospects')
        .select('*')
        .eq('subdomain', subdomain)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!subdomain && subdomain !== 'localhost' && subdomain !== 'hyperbarichq',
  });
};
