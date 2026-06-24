import React from "react";
import HeroSection from "../features/sections/hero-section";
import { getJobs, getProfiles, getProjects } from "@/sanity/lib/queries";
import ProfilesSection from "../features/sections/profiles-section";
import ExperienceSection from "../features/sections/experience-section";
import ProjectsSection from "../features/sections/projects-section";
import Footer from "../features/footer";

export async function LandingPage() {
  const profiles = await getProfiles();
  const experiences = await getJobs();
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-24">
      {profiles[0] && <HeroSection profile={profiles[0]} />}
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      {profiles[0]?.otherProfileLinks && (
        <ProfilesSection profiles={profiles[0].otherProfileLinks} />
      )}
      <Footer />
    </div>
  );
}

export default LandingPage;
