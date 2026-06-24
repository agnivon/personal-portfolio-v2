import React from "react";
import AboutSection from "../features/sections/about-section";
import SkillsSection from "../features/sections/skills-section";
import Footer from "../features/footer";
import { getProfiles } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const profiles = await getProfiles();
  const profile = profiles[0];

  if (!profile) return null;

  return (
    <div className="flex flex-col gap-12 antialiased">
      <div className="pt-20">
        <AboutSection profile={profile} />
      </div>
      {profile.skills && <SkillsSection skills={profile.skills} />}
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
}
