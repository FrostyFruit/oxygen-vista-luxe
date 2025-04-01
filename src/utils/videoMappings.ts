
// Map business verticals to their specific video URLs
export type BusinessVertical = 'skincare' | 'fitness' | 'wellness' | 'medical' | 'default';

interface VideoMapping {
  loomEmbedId: string;
  thumbnailUrl: string;
}

export const videoMappings: Record<BusinessVertical, VideoMapping> = {
  skincare: {
    loomEmbedId: 'ebd367a76d474c64a56e259d335aba3d', // Default video - replace with actual skincare video ID
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  fitness: {
    loomEmbedId: 'a1b2c3d4e5f6g7h8i9j0', // Replace with actual fitness video ID
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  wellness: {
    loomEmbedId: 'k1l2m3n4o5p6q7r8s9t0', // Replace with actual wellness video ID
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  medical: {
    loomEmbedId: 'u1v2w3x4y5z6a7b8c9d0', // Replace with actual medical video ID
    thumbnailUrl: '/lovable-uploads/6d1d0ee9-433e-4c92-8789-97f417e3e974.png'
  },
  default: {
    loomEmbedId: 'ebd367a76d474c64a56e259d335aba3d',
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
