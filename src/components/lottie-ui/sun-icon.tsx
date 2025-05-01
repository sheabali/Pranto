'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import SunAnimation from '../../lottie/sun/Sun.json';
import SunLightAnimation from '../../lottie/sun/SunLight.json';

const SunIcon = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const sunIconContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true); // ensures code runs only on client
  }, []);

  useEffect(() => {
    if (!isClient || !resolvedTheme || !sunIconContainer.current) return;

    const loadLottie = async () => {
      const lottie = await import('lottie-web');
      lottie.default.loadAnimation({
        name: 'SunIcon',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData:
          resolvedTheme === 'light' ? SunAnimation : SunLightAnimation,
        container: sunIconContainer.current!,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice',
        },
      });
    };

    loadLottie();

    return () => {
      const destroyLottie = async () => {
        const lottie = await import('lottie-web');
        lottie.default.destroy('SunIcon');
      };
      destroyLottie();
    };
  }, [resolvedTheme, isClient]);

  const lottieHover = async () => {
    const lottie = await import('lottie-web');
    lottie.default.play('SunIcon');
  };

  const lottieLeave = async () => {
    const lottie = await import('lottie-web');
    lottie.default.stop('SunIcon');
  };

  // Don't render anything until client-side and theme is resolved
  if (!isClient || !resolvedTheme) return null;

  const isLightMode = resolvedTheme === 'light';

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className="group/sun h-full w-full flex items-center justify-center"
    >
      <div
        ref={sunIconContainer}
        className={`h-10 w-10 ${
          isLightMode ? '' : 'opacity-50'
        } group-hover/sun:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default SunIcon;
