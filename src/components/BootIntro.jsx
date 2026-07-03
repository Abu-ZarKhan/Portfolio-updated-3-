import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING PROFILE: ABU ZAR KHAN",
  "MOUNTING SKILLS MODULE... OK",
  "MOUNTING PROJECTS MODULE... OK",
  "ESTABLISHING SECURE CONNECTION...",
  "WELCOME",
];

// Boot-up terminal intro. Runs once per browser session (sessionStorage flag)
// then unmounts and reveals the site underneath.
const BootIntro = ({ onFinish }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(t);
    }

    const currentLine = BOOT_LINES[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onFinish?.(), 600);
      return () => clearTimeout(t);
    }
  }, [done, onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center px-6"
        >
          <div className="w-full max-w-xl font-mono text-[13px] sm:text-[15px] text-[#00ff9d]">
            {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => {
              const isCurrent = i === lineIndex;
              const text = isCurrent ? line.slice(0, charIndex) : line;
              return (
                <div key={i} className="flex items-center gap-2 mb-1">
                  <span className="text-[#00ff9d]/50">{">"}</span>
                  <span>
                    {text}
                    {isCurrent && (
                      <span className="inline-block w-2 h-4 bg-[#00ff9d] ml-1 animate-pulse align-middle" />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootIntro;
