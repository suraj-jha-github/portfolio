// Preload critical assets for better performance
export const preloadAssets = () => {
  // Preload critical images
  const criticalImages = [
    '/images/loader.gif',
    '/images/arrowdown.svg',
    '/images/shape.svg',
    '/images/logo.png'
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Preload 3D models
  const modelLoader = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'fetch';
    link.href = '/models/boy-transformed.glb';
    document.head.appendChild(link);
    resolve();
  });

  return Promise.all([modelLoader]);
};

// Start preloading immediately
if (typeof window !== 'undefined') {
  preloadAssets();
} 