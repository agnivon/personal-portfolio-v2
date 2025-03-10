import React from "react";
import HeroSection from "../features/sections/hero-section";
import { getJobs, getProfiles, getProjects } from "@/sanity/lib/queries";
import GridBackground from "../features/ui/grid-background";
import ProfilesSection from "../features/sections/profiles-section";
import ExperienceSection from "../features/sections/experience-section";
import AboutSection from "../features/sections/about-section";
import SkillsSection from "../features/sections/skills-section";
import ProjectsSection from "../features/sections/projects-section";
import Footer from "../features/footer";

export async function LandingPage() {
  const profiles = await getProfiles();
  const experiences = await getJobs();
  const projects = await getProjects();

  return (
    <GridBackground className="snap-y snap-normal w-full min-h-screen overflow-auto">
      {profiles[0] && <HeroSection profile={profiles[0]} />}
      {profiles[0] && <AboutSection profile={profiles[0]} />}
      <ExperienceSection experiences={experiences} />
      {profiles[0]?.skills && <SkillsSection skills={profiles[0]?.skills} />}
      <ProjectsSection projects={projects} />
      {profiles[0].otherProfileLinks && (
        <ProfilesSection profiles={profiles[0].otherProfileLinks} />
      )}
      <Footer />
    </GridBackground>
  );
}

export default LandingPage;
