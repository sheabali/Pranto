'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../lottie/w-map/world.json';

export default function WMap() {
  try {
    return (
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100%', width: '100%' }}
      />
    );
  } catch (error) {
    console.error('Lottie Player load failed:', error);
    return <div>Error loading animation</div>;
  }
}
