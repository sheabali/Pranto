'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import EyesAnimation from '../../lottie/eyes/eyes.json';
import EyesLightAnimation from '../../lottie/eyes/EyeLight.json';

const EyesIcon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // track client-side mount
  const eyesIconContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    const loadLottie = async () => {
      const lot = await import('lottie-web');

      if (!eyesIconContainer.current) return;

      lot.default.loadAnimation({
        name: 'EyesIcon',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData:
          resolvedTheme === 'light' ? EyesAnimation : EyesLightAnimation,
        container: eyesIconContainer.current,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice',
        },
      });
    };

    loadLottie();

    return () => {
      const destroyLottie = async () => {
        const lot = await import('lottie-web');
        lot.default.destroy('EyesIcon');
      };
      destroyLottie();
    };
  }, [mounted, resolvedTheme]);

  const lottieHover = async () => {
    const lot = await import('lottie-web');
    lot.default.play('EyesIcon');
  };

  const lottieLeave = async () => {
    const lot = await import('lottie-web');
    lot.default.stop('EyesIcon');
  };

  // ✅ Avoid rendering until mounted + theme resolved
  if (!mounted || !resolvedTheme) return null;

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className="group/eyes h-full w-full flex items-center justify-center"
    >
      <div
        ref={eyesIconContainer}
        className={`h-10 w-10 ${
          resolvedTheme === 'light' ? '' : 'opacity-90'
        } group-hover/eyes:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default EyesIcon;
