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
        value: 100,
        density: { enable: true, area: 800 },
      },
      color: {
        value: isDark ? "#00ff00" : "#0044ff", // Green on dark, Blue on light
      },
      shape: {
        type: "char",
        character: {
          value: ["0", "1", "{", "}", "<", ">", "/", ";", "=", "+", "-", "*"],
          font: "monospace",
          style: "",
          weight: "400",
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 8, max: 14 },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "bottom",
        random: true,
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particleOptions} />;
}
