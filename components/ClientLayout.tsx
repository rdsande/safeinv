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

  useEffect(() => {
    // Only show splash screen on home page
    if (isHome) {
        // Simulate loading time or wait for animation
        // The SplashScreen component calls finishLoading when its animation is done
    } else {
        setIsLoading(false);
    }
  }, [isHome]);

  const handleFinishLoading = () => {
      // Add a small buffer to ensure smoothness
      setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && isHome && (
          <SplashScreen key="splash" finishLoading={handleFinishLoading} />
        )}
      </AnimatePresence>
      {children}
      <FloatingControls />
    </>
  );
}
