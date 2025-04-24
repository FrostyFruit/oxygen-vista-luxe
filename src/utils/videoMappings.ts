
// Map business verticals to their specific video URLs
export type BusinessVertical = 'skincare' | 'fitness' | 'wellness' | 'medical' | 'default';

interface VideoMapping {
  youtubeEmbedId: string;
  thumbnailUrl: string;
}

export const videoMappings: Record<BusinessVertical, VideoMapping> = {
  skincare: {
    youtubeEmbedId: 'a8NCAkFikOA',
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  fitness: {
    youtubeEmbedId: 'a8NCAkFikOA',
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  wellness: {
    youtubeEmbedId: 'a8NCAkFikOA',
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  medical: {
    youtubeEmbedId: 'a8NCAkFikOA',
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  default: {
    youtubeEmbedId: 'a8NCAkFikOA',
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  }
};

/**
 * Get the appropriate video mapping based on business vertical
 */
export const getVideoForVertical = (vertical: string): VideoMapping => {
  const normalizedVertical = vertical.toLowerCase() as BusinessVertical;
  return videoMappings[normalizedVertical] || videoMappings.default;
};
