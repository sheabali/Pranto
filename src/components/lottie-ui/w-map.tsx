/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import SunAnimation from '../../lottie/w-map/world.json';
import SunLightAnimation from '../../lottie/w-map/world.json';

const WMap = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<any>(null); // lottie-web instance

  useEffect(() => {
    setIsClient(true); // Prevent SSR-related issues
  }, []);

  useEffect(() => {
    if (!isClient || !resolvedTheme || !containerRef.current) return;

    const loadLottie = async () => {
      const lottie = await import('lottie-web');

      // Destroy previous animation if any
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      // Load new animation
      animationInstance.current = lottie.default.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData:
          resolvedTheme === 'light' ? SunAnimation : SunLightAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      });
    };

    loadLottie();

    // Cleanup on unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [resolvedTheme, isClient]);

  if (!isClient || !resolvedTheme) return null;

  return <div className="w-full h-auto max-w-[1000px] " ref={containerRef} />;
};

export default WMap;
