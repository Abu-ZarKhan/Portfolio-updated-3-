import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// Edit these to match your real proficiency levels (0-100).
const skillLevels = [
  { name: "PHP", level: 90 },
  { name: "Laravel", level: 88 },
  { name: "ASP.NET Core / C#", level: 82 },
  { name: "JavaScript", level: 80 },
  { name: "React JS", level: 78 },
  { name: "WordPress", level: 85 },
  { name: "Tailwind CSS", level: 82 },
  { name: "Bootstrap", level: 80 },
  { name: "SQL Server", level: 78 },
  { name: "MySQL", level: 75 },
  { name: "Vue JS", level: 65 },
  { name: "Next JS", level: 60 },
  { name: "Figma", level: 75 },
  { name: "Git", level: 78 },
];

const SkillBar = ({ name, level, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.6)}
    className="w-full"
  >
    <div className="flex justify-between mb-1">
      <span className="text-white font-medium text-[15px]">{name}</span>
      <span className="text-secondary text-[14px]">{level}%</span>
    </div>
    <div className="w-full h-2.5 bg-tertiary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        className="h-full rounded-full green-pink-gradient"
      />
    </div>
  </motion.div>
);

const SkillBars = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Proficiency</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6 max-w-4xl">
        {skillLevels.map((skill, index) => (
          <SkillBar key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillBars, "skills");
