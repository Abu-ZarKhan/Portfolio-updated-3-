import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

/**
 * GlitchText
 * Scrambles into place on mount, then re-triggers a quick scramble on hover.
 * Usage: <GlitchText text="Abu Zar Khan" as="span" className="text-[#915eff]" />
 */
const GlitchText = ({ text, as: Tag = "span", className = "", triggerOnHover = true }) => {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const rafId = useRef(null);

  const scramble = () => {
    let iteration = 0;
    frame.current = 0;
    clearInterval(rafId.current);

    rafId.current = setInterval(() => {
      setDisplay((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(rafId.current);
      }
      iteration += text.length / 10;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(rafId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Tag
      className={`inline-block ${className}`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {display}
    </Tag>
  );
};

export default GlitchText;
