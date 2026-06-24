import { PROFILES_QUERYResult } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const ProfilesSection = ({
  profiles,
}: {
  profiles: PROFILES_QUERYResult[number]["otherProfileLinks"];
}) => {
  if (!profiles || profiles.length === 0) return null;
  
  return (
    <section className="my-20 max-w-5xl mx-auto px-4 md:px-10 scroll-mt-32">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-10 text-center font-heading">
        Other Profiles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {profiles.map((e) => (
          <Link href={e.link || ""} key={e.name} target="_blank" className="group block">
            <div
              className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/50 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 hover:bg-zinc-800/60 shadow-sm hover:shadow-cyan-500/5"
            >
              <div className="flex items-center gap-4">
                {e.logo?.image && (
                  <div className="w-10 h-10 relative flex-shrink-0 bg-zinc-950 rounded-full p-2 border border-zinc-800">
                    <Image
                      src={e.logo?.image}
                      alt={e.name || ""}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <p className="text-lg font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors">
                  {e.name}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;
