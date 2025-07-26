import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBg() {
  const particlesInit = async (main) => await loadFull(main);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.7 },
          links: { enable: true, color: '#888', distance: 120 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}