import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PROFILES_QUERYResult } from "@/sanity/lib/types";
import { PortableText } from "next-sanity";
import AboutAnimatedLine from "../about-animated-line";
import AboutGlobe from "../about-globe";

const AboutSection = ({
  profile,
}: {
  profile: PROFILES_QUERYResult[number];
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center snap-always snap-center mt-20 mb-20 lg:mb-40">
      <h2 className="scroll-m-20 text-3xl md:text-5xl font-semibold tracking-tight first:mt-0 mb-20 text-center">
        About Me
      </h2>
      <BentoGrid>
        <BentoGridItem
          title={
            <span className="md:text-3xl xl:text-4xl">
              {profile.altBio1?.heading}
            </span>
          }
          description={
            <span className="md:text-base xl:text-lg">
              {profile.altBio1?.description && (
                <PortableText value={profile.altBio1?.description} />
              )}
            </span>
          }
        />
        <BentoGridItem
          title={profile.altBio2?.heading}
          description={
            <>
              {profile.altBio2?.description && (
                <PortableText value={profile.altBio2?.description} />
              )}
            </>
          }
          className="col-span-2"
          header={
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
              <AboutAnimatedLine />
            </div>
          }
        />
        <BentoGridItem
          title={profile.altBio3?.heading}
          description={
            <>
              {profile.altBio3?.description && (
                <PortableText value={profile.altBio3?.description} />
              )}
            </>
          }
          className="col-span-2"
          header={
            <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black relative">
              <AboutGlobe />
            </div>
          }
        />
        <BentoGridItem
          title={
            <span className="md:text-base lg:text-lg">
              {profile.altBio3?.heading}
            </span>
          }
          description={
            <span className="lg:text-base">
              {profile.altBio3?.description && (
                <PortableText value={profile.altBio3?.description} />
              )}
            </span>
          }
          className="col-span-1"
        />
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
