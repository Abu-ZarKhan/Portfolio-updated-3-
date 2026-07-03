import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

// Lightweight 2D icon grid. Previously each icon rendered its own WebGL
// Three.js scene (BallCanvas) — with 20 technologies that meant 20+
// simultaneous WebGL contexts, which blows past the browser's hard cap
// (usually 8-16 concurrent contexts) and causes the browser to forcibly
// kill the oldest ones ("Context Lost"), showing up as broken/blank icons
// and sometimes destabilizing other 3D scenes on the page (like the Hero
// computer model). Full 3D treatment is reserved for the Hero and Contact
// sections, where there's only ever one canvas each.
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-7">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          variants={fadeIn("up", "spring", index * 0.05, 0.5)}
          whileHover={{ y: -6, scale: 1.08 }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-tertiary border border-white/10 flex flex-col items-center justify-center gap-2 p-3 shadow-card cursor-default"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-white-100 text-[10px] sm:text-[11px] text-center leading-tight">
            {technology.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
