import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  BootIntro,
  SkillBars,
  Certificates,
  ParticlesBackground,
  CustomCursor,
  MouseGlow,
  ScrollProgressBar,
} from "./components";

const App = () => {
  // Boot intro plays once per browser session, not on every route/section navigation.
  const [showIntro, setShowIntro] = useState(
    () => sessionStorage.getItem("bootIntroPlayed") !== "true"
  );

  useEffect(() => {
    if (!showIntro) sessionStorage.setItem("bootIntroPlayed", "true");
  }, [showIntro]);

  return (
    <BrowserRouter>
      {showIntro && <BootIntro onFinish={() => setShowIntro(false)} />}
      {/* Fixed, sitewide particle-network background (behind all sections) */}
      <ParticlesBackground />
      {/* Mouse effects — cursor-following spotlight + custom cursor + scroll progress */}
      <MouseGlow />
      <CustomCursor />
      <ScrollProgressBar />
      <div className="relative z-[1]">
        <div bg-hero-pattern bg-cover bg-no-repeat bg-center>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <SkillBars />
        <Works />
        <Certificates />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
