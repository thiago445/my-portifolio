// src/components/BackgroundStars.tsx
import { Box } from "@mui/material";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function BackgroundStars() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#000",
      }}
    >
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 80,
          interactivity: { events: { onHover: { enable: false }, resize: true } },
          particles: {
            number: { value: 200, density: { enable: true, area: 900 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: { min: 0.5, max: 1 }, random: true },
            move: { enable: true, speed: 0.2, direction: "none", outModes: { default: "out" } },
          },
        }}
      />
    </Box>
  );
}