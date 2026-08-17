import MainSection from "../components/about/MainSection";
import WhatInternGuardIs from "../components/about/WhatInternGuardIs";
import MissionSection from "../components/about/MissionSection";
import Journey from "../components/about/Journey";
import FAQ from "../components/about/FAQ";

function About() {
  return (
    <main className="about-page">
      <MainSection />
      <WhatInternGuardIs />
      <MissionSection />
      <Journey />
      <FAQ />
    </main>
  );
}

export default About;