import { getProfiles } from "@/sanity/lib/queries";
import { PROJECT_BY_SLUG_QUERYResult } from "@/sanity/lib/types";
import { getSiteUrl, AUTHOR_NAME, AUTHOR_SITE } from "@/config/env.config";
import { Metadata } from "next";

const defaultTitle = `${AUTHOR_NAME} | Full-Stack Developer & Designer`;
const titleTemplate = `%s | ${AUTHOR_NAME}`;

const defaultDescription =
  `Portfolio of ${AUTHOR_NAME} — Full-Stack Developer and Software Engineer crafting modern web and mobile applications with Next.js, TypeScript, and AI.`;

const keywords = [
  // General Tags
  "Agnivo Neogi",
  "Agnivo Neogi Portfolio",
  "Software Engineer Portfolio",
  "Fullstack Developer Portfolio",
  "Creative Developer",
  "Frontend Developer",
  "Backend Developer",
  "agnivon.dev",
  "agnivon",

  // Skill-Based Tags
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Full-Stack Development",
  "AI Agents",
  "Cloud Architecture",
  "Web Development",
  "Mobile App Development",
  "Responsive Design",

  // Industry-Specific Tags
  "Tech Portfolio",
  "Software Engineering",
  "Modern Web Design",
  "Innovative Solutions",

  // Location-Based Tags
  "Bengaluru-Based Developer",
  "Remote Developer",
  "Remote Software Engineer",
];

export async function getSiteMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  let profile = null;

  try {
    const profiles = await getProfiles();
    profile = profiles?.[0] || null;
  } catch (error) {
    console.error("Failed to load profile for metadata:", error);
  }

  const bio = profile?.shortBio || defaultDescription;
  const profileSkills = (profile?.skills as string[] | undefined) || [];
  const allKeywords = Array.from(new Set([...keywords, ...profileSkills]));

  const ogImages = [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: `${AUTHOR_NAME} | Full-Stack Developer & Designer`,
    },
  ];

  if (profile?.profileImage?.image) {
    ogImages.push({
      url: profile.profileImage.image,
      width: 800,
      height: 800,
      alt: profile.profileImage.alt || AUTHOR_NAME,
    });
  }

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: titleTemplate,
    },
    description: bio,
    keywords: allKeywords,
    authors: [
      {
        name: AUTHOR_NAME,
        url: AUTHOR_SITE,
      },
    ],
    creator: AUTHOR_NAME,
    publisher: AUTHOR_NAME,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: defaultTitle,
      description: bio,
      url: siteUrl,
      siteName: AUTHOR_NAME,
      type: "website",
      locale: "en_US",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: bio,
      creator: "@agnivon",
      site: "@agnivon",
      images: ["/twitter-image"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export async function getProjectMetadata(
  project: PROJECT_BY_SLUG_QUERYResult,
  slug?: string
): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const projectName = project?.name || "Project";
  const projectTagline =
    project?.tagline || `Project showcase by ${AUTHOR_NAME}`;
  const projectPath = slug ? `/projects/${slug}` : "/projects";
  const projectUrl = `${siteUrl}${projectPath}`;

  const imageList: Array<{ url: string; alt: string; width?: number; height?: number }> = [];

  if (project?.coverImage?.image) {
    imageList.push({
      url: project.coverImage.image,
      alt: project.coverImage.alt || projectName,
    });
  }

  if (project?.screenshots && project.screenshots.length > 0) {
    project.screenshots.forEach((sc) => {
      if (sc.image) {
        imageList.push({
          url: sc.image,
          alt: sc.alt || projectName,
        });
      }
    });
  }

  if (imageList.length === 0) {
    imageList.push({
      url: `${siteUrl}/opengraph-image`,
      alt: projectName,
      width: 1200,
      height: 630,
    });
  }

  const projectKeywords = (project?.keywords as string[] | undefined) || [];
  const technologies = (project?.technologies as string[] | undefined) || [];
  const mergedKeywords = Array.from(
    new Set([...keywords, ...projectKeywords, ...technologies])
  );

  return {
    metadataBase: new URL(siteUrl),
    title: projectName,
    description: projectTagline,
    keywords: mergedKeywords,
    authors: [
      {
        name: AUTHOR_NAME,
        url: AUTHOR_SITE,
      },
    ],
    creator: AUTHOR_NAME,
    publisher: AUTHOR_NAME,
    alternates: {
      canonical: projectPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${projectName} | ${AUTHOR_NAME}`,
      description: projectTagline,
      url: projectUrl,
      siteName: AUTHOR_NAME,
      images: imageList,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectName} | ${AUTHOR_NAME}`,
      description: projectTagline,
      creator: "@agnivon",
      site: "@agnivon",
      images: [imageList[0].url],
    },
    icons: {
      icon: project?.logo || "/favicon.ico",
      shortcut: project?.logo || "/favicon.ico",
    },
  };
}
