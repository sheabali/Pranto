'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import SendmessageAnimation from '../../lottie/arrow/Iconly-Sendmessage.json';
import SendmessageLightAnimation from '../../lottie/arrow/Iconly-SendmessageLight.json';

const SendmessageIcon = ({ lottieName }: { lottieName: string }) => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === 'light';
  const sendMessageContainer = useRef<HTMLDivElement | null>(null);

  async function getLottie(name: string) {
    const lot = await import('lottie-web');

    if (!sendMessageContainer.current) return;
    lot.default.loadAnimation({
      name,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: isLightMode
        ? SendmessageAnimation
        : SendmessageLightAnimation,
      container: sendMessageContainer.current,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice',
      },
    });
  }

  async function destroyLottie(name: string) {
    const lot = await import('lottie-web');
    lot.default.destroy(name);
  }

  useEffect(() => {
    getLottie(lottieName);
    return () => {
      destroyLottie(lottieName);
    };
  }, [isLightMode, resolvedTheme, lottieName]);

  const lottieHover = async () => {
    const lot = await import('lottie-web');
    lot.default.play(lottieName);
  };

  const lottieLeave = async () => {
    const lot = await import('lottie-web');
    lot.default.stop(lottieName);
  };

  return (
    <div
      ref={sendMessageContainer}
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className={`h-8 w-8 opacity-50 hover:opacity-100 transition-opacity`}
    />
  );
};

export default SendmessageIcon;
