import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Enable modern formats for automatic compression
    formats: ['image/avif', 'image/webp'],

    // Responsive breakpoints for srcSet generation
    deviceSizes: [375, 430, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],

    // Allow unoptimised fallback for missing images during development
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
