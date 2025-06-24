/**
 * Gets the correct image path for both development and production environments
 * @param imagePath The path to the image relative to the public directory (e.g., '/images/logo.png')
 * @returns The correct image path with cache busting
 */
export const getImageUrl = (imagePath: string): string => {
  try {
    // Remove leading slash if present for consistency
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // Handle different environments
    let baseUrl = '';
    
    // In Vite, public assets are always available at the root in development
    // and are copied to the dist folder in production
    if (import.meta.env.PROD) {
      // In production, use absolute paths from the root
      baseUrl = ''; // Vite handles the base URL based on the base config
    } else {
      // In development, serve from the public directory
      baseUrl = '';
    }
    
    // Add cache busting query parameter in production
    const cacheBuster = import.meta.env.PROD ? `?v=${import.meta.env.VITE_APP_VERSION || Date.now()}` : '';
    
    // Construct the final URL
    const finalUrl = `${baseUrl}/${cleanPath}${cacheBuster}`.replace(/\/+/g, '/');
    
    return finalUrl;
  } catch (error) {
    console.error('Error generating image URL:', error);
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
