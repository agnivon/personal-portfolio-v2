import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { getProfiles } from "@/sanity/lib/queries";

export async function Navbar() {
  const profiles = await getProfiles();
  const resumeUrl = profiles[0]?.resumeURL || "/resume.pdf";

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="w-fit pointer-events-auto rounded-full border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xl px-3 py-2.5 flex items-center gap-4 sm:gap-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.8)]">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center font-bold text-zinc-100 group-hover:from-zinc-700 group-hover:to-zinc-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
            A
          </div>
          <span className="font-semibold text-zinc-100 hidden sm:block group-hover:text-cyan-400 transition-colors">Agnivo</span>
        </Link>

        <ul className="flex items-center gap-4 sm:gap-8 text-sm font-medium text-zinc-400">
          <li>
            <Link href="/about" className="hover:text-zinc-100 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-zinc-100 transition-colors">
              <span className="hidden sm:inline">Experience</span>
              <span className="sm:hidden">Work</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </Link>
          </li>
        </ul>

        <div className="shrink-0">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2 sm:py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="hidden sm:block">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
