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
    
    // Normalize the path - remove leading slash and any unwanted characters
    const cleanPath = imagePath
      .replace(/^\/+/, '') // Remove leading slashes
      .replace(/\?.*$/, ''); // Remove any query parameters

    // In development, Vite serves files from the public directory
    if (!isProduction) {
      return `/${cleanPath}`;
    }
    
    // In production, we need to handle different scenarios:
    // 1. For images in public directory that should be copied as-is
    // 2. For imported images that get hashed by Vite
    
    // If the path contains 'assets' or 'images', assume it's already processed by Vite
    if (cleanPath.includes('assets/') || cleanPath.includes('images/')) {
      return `/${cleanPath}`;
    }
    
    // For public assets, we need to reference them from the root
    // Vercel will serve these from the root of the deployed site
    const cacheBuster = import.meta.env.VITE_APP_VERSION || '1.0.0';
    const url = `/${cleanPath}?v=${cacheBuster}`;
    
    return url;
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
