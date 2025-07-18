import { Spotlight } from "@/components/ui/spotlight-new";
import { Vortex } from "@/components/ui/vortex";
import { PROFILES_QUERYResult } from "@/sanity/lib/types";
import { SiBlogger, SiSanity, SiX } from "@icons-pack/react-simple-icons";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import GradientHeading from "../typography/gradient-heading";
import BorderMagicButton from "../ui/border-magic-button";

export function getSocialLinks(socialLinks: Record<string, string>) {
  return Object.entries(socialLinks)
    .sort()
    .filter(([_, value]) => Boolean(value));
}

export const HeroVortex = ({
  profile,
}: {
  profile: PROFILES_QUERYResult[number];
}) => {
  return (
    <section className="w-full rounded-md h-[45rem] overflow-hidden relative">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          {profile.headline}
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-3xl mt-6 text-center">
          {profile.shortBio}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {getSocialLinks(profile.socialLinks || {}).map(([key, value]) => (
            <a
              key={key}
              href={value}
              target="_blank"
              rel="noreferer noopener"
              className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
            >
              <BorderMagicButton>
                {key[0].toUpperCase() + key.toLowerCase().slice(1)}
              </BorderMagicButton>
            </a>
          ))}
        </div>
      </Vortex>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export const HeroSpotlight = ({
  profile,
}: {
  profile: PROFILES_QUERYResult[number];
}) => {
  return (
    <section className="h-screen w-full rounded-md flex flex-col items-center justify-center antialiased relative overflow-hidden snap-always snap-center">
      <Spotlight />
      <div className="w-full absolute inset-0 h-screen">
        {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}
      </div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <p className="mb-4 font-semibold tracking-widest text-neutral-300 text-center mx-auto uppercase">
          Agnivo Neogi
        </p>
        <GradientHeading>{profile.headline}</GradientHeading>
        <p className="mt-4 font-normal md:text-xl text-neutral-300/90 max-w-lg xl:max-w-xl text-center mx-auto">
          {profile.shortBio}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-x-4 mt-6">
        {getSocialLinks(profile.socialLinks || {}).map(([key, value], id) => (
          <a
            key={key}
            href={value}
            target="_blank"
            rel="noreferer noopener"
            className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
          >
            <BorderMagicButton>
              <div className="flex gap-1 items-center">
                <SocialMediaIcon value={key} />
                {key[0].toUpperCase() + key.toLowerCase().slice(1)}
              </div>
            </BorderMagicButton>
          </a>
        ))}
      </div>
    </section>
  );
};

const SocialMediaIcon = ({ value }: { value: string }) => {
  const props = { color: "white" };
  if (value === "github") {
    return <BiLogoGithub {...props} className="size-4" />;
  }
  if (value === "linkedin") {
    return <BiLogoLinkedin {...props} className="size-4" />;
  }
  if (value === "twitter") {
    return <SiX {...props} className="size-3" />;
  }
  if (value === "blog") {
    return <SiSanity {...props} className="size-3" />;
  }

  return <></>;
};

export default HeroSpotlight;
