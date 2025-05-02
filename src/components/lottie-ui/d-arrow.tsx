'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import DAAnimation from '../../lottie/d-arrow/arrow.json';
import DALightAnimation from '../../lottie/d-arrow/arrow-black.json';
import Link from 'next/link';

const DArrow = ({
  link,
  lottieName = 'DAIcon',
}: {
  link?: number;
  lottieName?: string;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // <- Key
  const arrowContainer = useRef<HTMLDivElement | null>(null);

  const isLightMode = resolvedTheme === 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    const loadLottie = async () => {
      const lot = await import('lottie-web');
      if (!arrowContainer.current) return;

      lot.default.loadAnimation({
        name: lottieName,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData:
          resolvedTheme === 'light' ? DALightAnimation : DAAnimation,
        container: arrowContainer.current,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice',
        },
      });
    };

    loadLottie();

    return () => {
      const destroyLottie = async () => {
        const lot = await import('lottie-web');
        lot.default.destroy(lottieName);
      };
      destroyLottie();
    };
  }, [mounted, resolvedTheme, lottieName]);

  const lottieHover = async () => {
    const lot = await import('lottie-web');
    lot.default.play(lottieName);
  };

  const lottieLeave = async () => {
    const lot = await import('lottie-web');
    lot.default.stop(lottieName);
  };

  // 🔐 Wait until client has mounted and theme is available
  if (!mounted || !resolvedTheme) return null;

  const content = (
    <div
      ref={arrowContainer}
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className="h-12 w-12 opacity-50 hover:opacity-100 transition-opacity"
    />
  );

  return link ? (
    <Link
      href={`projects/${String(link)}`}
      // target="_blank"
      // rel="noreferrer noopener"
      className={`relative h-12 w-12 z-10 ${
        isLightMode ? 'bg-white' : 'hover:bg-white'
      } dark:hover:bg-zinc-700/25   border-white/10 flex items-center justify-center rounded-full transition-all`}
    >
      {content}
    </Link>
  ) : (
    content
  );
};

export default DArrow;
