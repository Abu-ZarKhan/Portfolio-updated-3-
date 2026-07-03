import { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { dksCertificate } from "../assets";

// Add more certificates here as you earn them — same shape as the entry below.
const certificates = [
  {
    title: "Employment Certificate — Junior Developer",
    issuer: "Digital Konnecter Systems (DKS)",
    date: "Issued 08 Jan 2026 · Ref# DKS/26/E115",
    image: dksCertificate,
  },
];

const CertCard = ({ title, issuer, date, image, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.15, 0.75)}
    className="min-w-[280px] sm:min-w-[320px] snap-center"
  >
    <Tilt
      options={{ max: 25, scale: 1, speed: 400 }}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
    >
      <div className="bg-tertiary rounded-[20px] p-5 h-full flex flex-col">
        <a
          href={image || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[160px] rounded-[14px] bg-black-100 flex items-center justify-center overflow-hidden mb-4"
        >
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-secondary text-sm">Certificate Preview</span>
          )}
        </a>
        <h3 className="text-white font-bold text-[17px]">{title}</h3>
        <p className="text-secondary text-[14px] mt-1">{issuer}</p>
        <p className="text-secondary/70 text-[13px] mt-auto pt-3">{date}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Certificates = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="relative mt-10">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((cert, index) => (
            <CertCard key={cert.title} index={index} {...cert} />
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll certificates left"
            className="w-10 h-10 rounded-full bg-tertiary border border-white/10 text-white flex items-center justify-center hover:bg-black-100 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll certificates right"
            className="w-10 h-10 rounded-full bg-tertiary border border-white/10 text-white flex items-center justify-center hover:bg-black-100 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
