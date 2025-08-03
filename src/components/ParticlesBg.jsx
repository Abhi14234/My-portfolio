// src/components/ParticlesBg.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: isDark ? ["#00ffff", "#ff00ff"] : ["#0066ff", "#00ffcc"],
      },
      shape: {
        type: ["circle", "edge"],
      },
      opacity: {
        value: 0.7,
        animation: {
          enable: true,
          speed: 1.2,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 2, max: 4 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.3,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: isDark ? "#00ffff" : "#00aaff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
    backgroundMask: {
      enable: false,
    },
    retina_detect: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particleOptions} />;
}
