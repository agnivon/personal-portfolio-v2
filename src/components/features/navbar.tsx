import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { getProfiles } from "@/sanity/lib/queries";

export async function Navbar() {
  const profiles = await getProfiles();
  const resumeUrl = profiles[0]?.resumeURL || "/resume.pdf";

  return (
    <div className="fixed top-6 inset-x-0 mx-auto z-50 px-4 md:px-0">
      <nav className="max-w-3xl mx-auto rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-100 group-hover:bg-zinc-700 transition-colors">
            A
          </div>
          <span className="font-semibold text-zinc-100 hidden sm:block group-hover:text-cyan-400 transition-colors">Agnivo</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <li>
            <Link href="/about" className="hover:text-zinc-100 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-zinc-100 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </Link>
          </li>
        </ul>

        <div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:block">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
