import { getProfiles } from "@/sanity/lib/queries";
import { PROJECT_BY_SLUG_QUERYResult } from "@/sanity/lib/types";
import { Metadata } from "next";

const title = "Agnivo Neogi's Portfolio";

const keywords = [
  // General Tags
  "Agnivo Neogi",
  "Agnivo Neogi Portfolio",
  "Professional Portfolio",
  "Creative Portfolio",
  "Developer Portfolio",
  "Graphic Designer Portfolio",
  "Web Developer Portfolio",
  "Fullstack Developer Portfolio",
  "Freelance Portfolio",

  // Skill-Based Tags
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile App Design",
  "User Experience Design",
  "User Interface Design",
  "Responsive Design",

  // Industry-Specific Tags
  "Creative Professional",
  "Tech Portfolio",
  "Freelance Developer",
  "Digital Portfolio",
  "Innovative Design",
  "Technology and Design",
  "Modern Web Design",

  // Personal Branding Tags
  "Agnivo Neogi Projects",
  "Agnivo Neogi Work",
  "Agnivo Neogi Designs",
  "Agnivo Neogi Development",
  "Agnivo Neogi Creative Work",
  "Agnivo Neogi Case Studies",
  "Agnivo Neogi Testimonials",

  // Location-Based Tags (if applicable)
  "Bengaluru-Based Designer",
  "Bengaluru-Based Developer",
  "Freelancer in Bengaluru",
  "Remote Designer",
  "Remote Developer",

  // Additional Tags
  "Portfolio Showcase",
  "Creative Work Examples",
  "Professional Projects",
  "Design Case Studies",
  "Development Case Studies",
  "Client Testimonials",
  "Creative Problem Solving",
  "Innovative Solutions",
  "Modern Design Trends",
  "Cutting-Edge Technology",
];

export async function getSiteMetadata(): Promise<Metadata> {
  const profiles = await getProfiles();
  const profile = profiles[0];
  if (!profile) return {};

  return {
    title: title,
    description: profile.shortBio,
    keywords: keywords.concat(profile.skills || []),
    authors: [
      {
        name: "Agnivo Neogi",
        url: "https://www.agnivon.com",
      },
    ],
    creator: "Agnivo Neogi",
    openGraph: {
      title: title,
      description: profile.shortBio || "",
      url: "https://www.agnivon.com",
      siteName: title,
      images: profile.profileImage?.image
        ? [{ url: profile.profileImage.image, alt: title }]
        : [],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: profile.shortBio || "",
      creator: "Agnivo Neogi",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
  };
}

export async function getProjectMetadata(
  project: PROJECT_BY_SLUG_QUERYResult
): Promise<Metadata> {
  return {
    title: `${project?.name} | Project | ${title}`,
    description: project?.tagline,
    keywords: keywords.concat(project?.keywords || []),
    authors: [
      {
        name: "Agnivo Neogi",
        url: "https://www.agnivon.com",
      },
    ],
    creator: "Agnivo Neogi",
    openGraph: {
      title: title,
      description: project?.tagline || "",
      url: "https://www.agnivon.com",
      siteName: title,
      images:
        project?.screenshots?.map((sc) => ({
          url: sc.image || "",
          alt: sc.alt || "",
        })) || [],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: project?.tagline || "",
      creator: "Agnivo Neogi",
    },
    icons: {
      icon: project?.logo || "",
      shortcut: project?.logo || "",
    },
  };
}
