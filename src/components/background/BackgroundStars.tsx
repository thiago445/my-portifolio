// src/components/BackgroundStars.tsx
import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundStars() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = {
    background: { 
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 80,
    interactivity: { 
      events: { 
        onHover: { 
          enable: false,
        }, 
        resize: {
          enable: true  // ← CORRETO: objeto com enable
        }
      } 
    },
    particles: {
      number: { 
        value: 200, 
        density: { 
          enable: true, 
          width: 900,  // ← Use width/height em vez de area
          height: 900
        } 
      },
      color: { 
        value: "#ffffff" 
      },
      shape: { 
        type: "circle" 
      },
      opacity: { 
        value: 0.8
      },
      size: { 
        value: { 
          min: 0.5, 
          max: 1 
        }
      },
      move: { 
        enable: true, 
        speed: 0.2, 
        direction: "none"
      },
    },
    detectRetina: true,
  };

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
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </Box>
  );
}