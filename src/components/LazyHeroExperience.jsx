import { Suspense, lazy } from 'react';

const HeroExperience = lazy(() => import('./HeroExperience'));

const LazyHeroExperience = () => {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white-50 text-xl">Loading 3D Experience...</div>
      </div>
    }>
      <HeroExperience />
    </Suspense>
  );
};

export default LazyHeroExperience; 