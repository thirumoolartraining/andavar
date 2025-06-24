/**
 * Gets the correct image path for both development and production environments
 * @param imagePath The path to the image relative to the public directory (e.g., 'images/logo.png' or '/images/logo.png')
 * @returns The correct image URL with cache busting in production
 */
export const getImageUrl = (imagePath: string): string => {
  try {
    if (!imagePath) {
      console.warn('[getImageUrl] Empty image path provided');
      return '';
    }

    const isProduction = import.meta.env.PROD;
    
    // Remove leading slash if present for consistency
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // In development, Vite serves files from the public directory
    if (!isProduction) {
      return `/${cleanPath}`;
    }
    
    // In production, files are in the assets directory with hashed names
    // We need to let Vite handle the final path through the build process
    // The path should be relative to the public directory
    const cacheBuster = import.meta.env.VITE_APP_VERSION || '1.0.0';
    return `/${cleanPath}?v=${cacheBuster}`;
  } catch (error) {
    console.error('[getImageUrl] Error generating URL for', imagePath, ':', error);
    return imagePath; // Fallback to the original path
  }
};

/**
 * Preloads an image to ensure it's cached
 * @param imagePath The path to the image to preload
 */
export const preloadImage = (imagePath: string): void => {
  const img = new Image();
  img.src = getImageUrl(imagePath);
};
