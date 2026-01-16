/**
 * OptimizedImage Component
 *
 * A simple wrapper that serves images with proper attributes.
 * When WebP files are available, update this to use picture element.
 *
 * For now, this just ensures proper width/height and loading attributes.
 */

import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
}: OptimizedImageProps) {
  // Use eager loading if priority is set
  const loadingStrategy = priority ? 'eager' : loading;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loadingStrategy}
      decoding="async"
    />
  );
}
