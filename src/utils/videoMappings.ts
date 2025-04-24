
// Map business verticals to their specific video URLs
export type BusinessVertical = 'skincare' | 'fitness' | 'wellness' | 'medical' | 'default';

interface VideoMapping {
  youtubeEmbedId: string;
  thumbnailUrl: string;
}

export const videoMappings: Record<BusinessVertical, VideoMapping> = {
  skincare: {
    youtubeEmbedId: 'cSYWLgxRJTA',
    thumbnailUrl: `https://img.youtube.com/vi/cSYWLgxRJTA/maxresdefault.jpg`
  },
  fitness: {
    youtubeEmbedId: 'cSYWLgxRJTA',
    thumbnailUrl: `https://img.youtube.com/vi/cSYWLgxRJTA/maxresdefault.jpg`
  },
  wellness: {
    youtubeEmbedId: 'cSYWLgxRJTA',
    thumbnailUrl: `https://img.youtube.com/vi/cSYWLgxRJTA/maxresdefault.jpg`
  },
  medical: {
    youtubeEmbedId: 'cSYWLgxRJTA',
    thumbnailUrl: `https://img.youtube.com/vi/cSYWLgxRJTA/maxresdefault.jpg`
  },
  default: {
    youtubeEmbedId: 'cSYWLgxRJTA',
    thumbnailUrl: `https://img.youtube.com/vi/cSYWLgxRJTA/maxresdefault.jpg`
  }
};

/**
 * Get the appropriate video mapping based on business vertical
 */
export const getVideoForVertical = (vertical: string): VideoMapping => {
  const normalizedVertical = vertical.toLowerCase() as BusinessVertical;
  return videoMappings[normalizedVertical] || videoMappings.default;
};
