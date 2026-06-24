import { PROFILES_QUERYResult } from "@/sanity/lib/types";
import { PortableText } from "next-sanity";
import Image from "next/image";

const AboutSection = ({
  profile,
}: {
  profile: PROFILES_QUERYResult[number];
}) => {
  const bioBlocks = [profile.altBio1, profile.altBio2, profile.altBio3, profile.altBio4].filter(Boolean);

  return (
    <section id="about" className="max-w-5xl mx-auto px-4 mt-20 mb-20 lg:mb-40 scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
        
        {/* Left Column - Sticky Heading */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 font-heading">
              About Me
            </h2>
            {profile.shortBio && (
              <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
                {profile.shortBio}
              </p>
            )}
            {profile.profileImage?.image && (
              <div className="mt-8 mb-8 md:mb-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                <Image
                  src={profile.profileImage.image}
                  alt={profile.profileImage.alt || "Profile"}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="md:col-span-8 flex flex-col gap-12">
          {profile.fullBio && profile.fullBio.length > 0 && (
            <div className="prose prose-zinc prose-invert max-w-none prose-p:leading-relaxed prose-p:text-zinc-400 prose-headings:text-zinc-100 prose-a:text-cyan-500 hover:prose-a:text-cyan-400">
              <PortableText value={profile.fullBio} />
            </div>
          )}

          {bioBlocks.length > 0 && (
            <div className="flex flex-col gap-8 mt-4">
              {bioBlocks.map((bio, index) => {
                if (!bio?.heading && !bio?.description) return null;
                return (
                  <div 
                    key={index} 
                    className="group relative pl-8 py-2 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-zinc-800 hover:before:bg-cyan-500 before:transition-colors before:duration-300"
                  >
                    {bio.heading && (
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-4 font-heading group-hover:text-cyan-50 transition-colors">
                        {bio.heading}
                      </h3>
                    )}
                    {bio.description && (
                      <div className="prose prose-zinc prose-invert max-w-none prose-p:leading-relaxed prose-p:text-zinc-400 prose-a:text-cyan-500">
                        <PortableText value={bio.description} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
