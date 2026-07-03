import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar fixed to the top of the viewport, fills as the person
// scrolls down the page.
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[150] green-pink-gradient"
    />
  );
};

export default ScrollProgressBar;
