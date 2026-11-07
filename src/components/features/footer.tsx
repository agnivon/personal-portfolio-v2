import React from "react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { BiLogoLinkedin } from "react-icons/bi";
import { AUTHOR_NAME, AUTHOR_SITE } from "@/config/env.config";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-10 border-t border-zinc-800">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agnivon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/agnivon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <BiLogoLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/agnivon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <SiX className="w-5 h-5" />
          </a>
        </div>
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={AUTHOR_SITE}
            className="text-zinc-400 hover:text-cyan-400 transition-colors underline-offset-4 hover:underline"
          >
            {AUTHOR_NAME}
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
