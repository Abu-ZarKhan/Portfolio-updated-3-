import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Sitewide custom cursor: a small dot that tracks the mouse exactly, plus a
// trailing ring that eases behind it. The ring grows and the dot fades
// whenever the pointer is over anything clickable (links, buttons, inputs).
// Automatically disables itself on touch devices, since there's no mouse to
// track and a phantom cursor would just get in the way.
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], .cursor-hover';

const CustomCursor = () => {
  const [isTouch] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    if (isTouch) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) setIsHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch, isVisible]);

  if (isTouch) return null;

  return (
    <div
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* trailing ring */}
      <motion.div
        style={{ left: ringX, top: ringY }}
        animate={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{ duration: 0.25 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff9d]"
      />
      {/* precise dot */}
      <motion.div
        style={{ left: dotX, top: dotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00ff9d]"
      />
    </div>
  );
};

export default CustomCursor;
