import { PROFILES_QUERYResult } from "@/sanity/lib/types";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import { PenTool } from "lucide-react";

export function getSocialLinks(socialLinks: Record<string, string>) {
  return Object.entries(socialLinks)
    .sort()
    .filter(([_, value]) => Boolean(value));
}

const SocialMediaIcon = ({ value, className }: { value: string; className?: string }) => {
  if (value === "github") return <SiGithub className={className} />;
  if (value === "linkedin") return <BiLogoLinkedin className={className} />;
  if (value === "twitter") return <SiX className={className} />;
  if (value === "blog") return <PenTool className={className} />;
  return null;
};
export default function HeroSection({
  profile,
}: {
  profile: PROFILES_QUERYResult[number];
}) {
  return (
    <section className="w-full flex flex-col justify-center min-h-[70vh] antialiased max-w-5xl mx-auto px-4 md:px-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-50 mb-6 leading-tight">
          {profile.headline}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
          {profile.shortBio}
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            View Projects
          </Link>

          {getSocialLinks(profile.socialLinks || {}).map(([key, value]) => (
            <a
              key={key}
              href={value}
              target="_blank"
              rel="noreferer noopener"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-cyan-400 transition-all duration-200"
              aria-label={key}
            >
              <SocialMediaIcon value={key} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
