/**
 * Gets the correct image path for both development and production environments
 * @param imagePath The path to the image relative to the public directory (e.g., '/images/logo.png')
 * @returns The correct image URL with cache busting
 */
export const getImageUrl = (imagePath: string): string => {
  try {
    if (!imagePath) {
      console.warn('[getImageUrl] Empty image path provided');
      return '';
    }

    // In Vite, public assets are available at the root in development
    // and are copied to the dist folder in production
    const isProduction = import.meta.env.PROD;
    
    // For production, we need to ensure the path is correct relative to the base URL
    // For development, we can use the path as is since it's served from the public directory
    let finalPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    
    // In production, we need to make sure the path is correct relative to the base URL
    if (isProduction) {
      // Ensure we don't have double slashes
      finalPath = finalPath.replace(/^\/+/, '');
      
      // Add cache busting query parameter
      const cacheBuster = `?v=${import.meta.env.VITE_APP_VERSION || '1.0.0'}`;
      finalPath = `/${finalPath}${cacheBuster}`;
      
      console.log(`[getImageUrl] Production URL for ${imagePath}:`, finalPath);
    } else {
      console.log(`[getImageUrl] Development URL for ${imagePath}:`, finalPath);
    }
    
    return finalPath;
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
