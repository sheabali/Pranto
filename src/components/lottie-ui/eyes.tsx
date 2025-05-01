'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import EyeAnimation from '../../lottie/eyes/eyes.json';
import EyeLightAnimation from '../../lottie/eyes/EyeLight.json';

const SendIcon = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === 'light';
  const sendIconContainer = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Set the flag to ensure the code runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  async function getLottie() {
    const lot = await import('lottie-web');

    if (!sendIconContainer.current) return;
    lot.default.loadAnimation({
      name: 'SendIcon',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: isLightMode ? EyeAnimation : EyeLightAnimation,
      container: sendIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice',
      },
    });
  }

  async function destroyLottie() {
    const lot = await import('lottie-web');
    lot.default.destroy('SendIcon');
  }

  useEffect(() => {
    if (isClient) {
      getLottie();
    }

    return () => {
      if (isClient) {
        destroyLottie();
      }
    };
  }, [isLightMode, resolvedTheme, isClient]);

  const lottieHover = async () => {
    const lot = await import('lottie-web');
    lot.default.play('SendIcon');
  };

  const lottieLeave = async () => {
    const lot = await import('lottie-web');
    lot.default.stop('SendIcon');
  };

  // Ensure it only renders on the client-side to avoid hydration errors
  if (!isClient) return null;

  return (
    <a
      href="/MERN Stack.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="relative z-10"
    >
      <div
        ref={sendIconContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="h-10 w-10 opacity-90 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default SendIcon;
