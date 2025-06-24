/**
 * Gets the correct image path for both development and production environments
 * @param imagePath The path to the image relative to the public directory (e.g., '/images/logo.png')
 * @returns The correct image URL with cache busting
 */
export const getImageUrl = (imagePath: string): string => {
  try {
    if (!imagePath) {
      console.warn('getImageUrl: Empty image path provided');
      return '';
    }

    // Remove leading slash if present for consistency
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // In Vite, public assets are available at the root in development
    // and are copied to the dist folder in production
    const isProduction = import.meta.env.PROD;
    const baseUrl = isProduction ? '' : '';
    
    // Add cache busting query parameter in production
    const cacheBuster = isProduction 
      ? `?v=${import.meta.env.VITE_APP_VERSION || '1.0.0'}` 
      : '';
    
    // Construct the final URL
    const finalUrl = `${baseUrl}/${cleanPath}${cacheBuster}`.replace(/\/+/g, '/');
    
    if (isProduction) {
      console.log(`[getImageUrl] Generated URL for ${imagePath}:`, finalUrl);
    }
    
    return finalUrl;
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
