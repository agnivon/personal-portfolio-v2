import React from "react";
import { LinkPreview } from "../ui/link-preview";

const Footer = () => {
  return (
    <div className="px-10 py-5 flex max-sm:flex-col items-center justify-between bg-gradient-to-t from-black to-transparent">
      <span>{`All Rights Reserved @${new Date().getFullYear()}`}</span>
      <span>
        Built using{" "}
        <LinkPreview
          url="https://ui.shadcn.com"
          className="font-bold bg-clip-text"
        >
          shadcn
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>
      </span>
    </div>
  );
};

export default Footer;
