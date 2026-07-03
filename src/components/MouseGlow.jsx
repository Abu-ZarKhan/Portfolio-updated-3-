import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A soft radial glow that drifts toward the cursor. Purely atmospheric —
// sits behind all content, ignores clicks, and skips itself on touch
// devices where there's no pointer to follow.
const MouseGlow = () => {
  const [isTouch] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 40, stiffness: 90 });
  const springY = useSpring(y, { damping: 40, stiffness: 90 });

  useEffect(() => {
    if (isTouch) return;
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed z-[1] pointer-events-none"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,255,157,0.06) 0%, rgba(145,94,255,0.04) 45%, transparent 70%)",
      }}
    />
  );
};

export default MouseGlow;
