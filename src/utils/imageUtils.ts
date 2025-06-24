/**
 * Gets the correct image path for both development and production
 * @param imagePath The path to the image relative to the public directory (e.g., '/images/logo.png')
 * @returns The correct image path
 */
export const getImageUrl = (imagePath: string): string => {
  // Remove leading slash if present for consistency
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, the public folder is served at the root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, the public folder is copied to the root of the build output
  return `/${cleanPath}`;
};
