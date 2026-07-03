import { useMemo } from "react";
import {
  Particles,
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * ParticlesBackground
 * A sitewide animated particle-network backdrop, styled after the classic
 * particles.js "network" preset (linked dots that drift and connect).
 *
 * Note: the original particles.js library is unmaintained/deprecated.
 * This uses tsparticles, its actively-maintained successor, which produces
 * the same visual (and uses the same #particles-js container id) but is
 * a proper React component with no jQuery/global-script dependency.
 */
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: true,
    },
  },
  particles: {
    color: { value: "#00ff9d" },
    links: {
      color: "#00ff9d",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    number: {
      value: 80,
      density: { enable: true, area: 900 },
    },
    opacity: { value: 0.35 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
};

const ParticlesLayer = () => {
  const { loaded } = useParticlesProvider();
  const options = useMemo(() => particlesOptions, []);

  if (!loaded) return null;

  return (
    <Particles
      id="particles-js"
      className="fixed inset-0 z-0 pointer-events-none"
      options={options}
    />
  );
};

const ParticlesBackground = () => {
  return (
    <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
      <ParticlesLayer />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
