'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';
import FloatingControls from './FloatingControls';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isRashidHeights = pathname === '/rashid-heights';
  const shouldShowSplash = isHome || isRashidHeights;

  useEffect(() => {
    // Show splash screen on home page and Rashid Heights page
    if (shouldShowSplash) {
        // The SplashScreen component calls finishLoading when its animation is done
    } else {
        setIsLoading(false);
    }
  }, [shouldShowSplash]);

  const handleFinishLoading = () => {
      // Add a small buffer to ensure smoothness
      setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && shouldShowSplash && (
          <SplashScreen key="splash" finishLoading={handleFinishLoading} />
        )}
      </AnimatePresence>
      {children}
      <FloatingControls />
    </>
  );
}
