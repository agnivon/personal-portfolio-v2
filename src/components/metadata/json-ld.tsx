import React from "react";
import type { PROFILES_QUERYResult, PROJECT_BY_SLUG_QUERYResult } from "@/sanity/lib/types";
import { AUTHOR_NAME, AUTHOR_SITE } from "@/config/env.config";

type Profile = NonNullable<PROFILES_QUERYResult>[0];

export function PersonJsonLd({
  profile,
  siteUrl,
}: {
  profile?: Profile | null;
  siteUrl: string;
}) {
  const sameAsLinks = [
    "https://github.com/agnivon",
    "https://linkedin.com/in/agnivon",
    "https://twitter.com/agnivon",
    ...(profile?.socialLinks?.github ? [profile.socialLinks.github] : []),
    ...(profile?.socialLinks?.linkedin ? [profile.socialLinks.linkedin] : []),
    ...(profile?.socialLinks?.twitter ? [profile.socialLinks.twitter] : []),
    ...((profile?.otherProfileLinks?.map((p) => p.link).filter(Boolean) as string[]) || []),
  ].filter((val, idx, self) => Boolean(val) && self.indexOf(val) === idx);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${AUTHOR_SITE}/#person`,
    name: AUTHOR_NAME,
    url: AUTHOR_SITE,
    image: profile?.profileImage?.image || `${siteUrl}/opengraph-image`,
    jobTitle: profile?.headline || "Full-Stack Developer & Software Engineer",
    description:
      profile?.shortBio ||
      `Full-Stack Developer and Software Engineer crafting modern web and mobile applications.`,
    sameAs: sameAsLinks,
    knowsAbout: profile?.skills || [],
    email: profile?.email ? `mailto:${profile.email}` : undefined,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${AUTHOR_SITE}/#website`,
    url: AUTHOR_SITE,
    name: AUTHOR_NAME,
    description: profile?.shortBio || `${AUTHOR_NAME}'s Portfolio`,
    publisher: {
      "@id": `${AUTHOR_SITE}/#person`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export function ProjectJsonLd({
  project,
  siteUrl,
  slug,
}: {
  project: PROJECT_BY_SLUG_QUERYResult;
  siteUrl: string;
  slug: string;
}) {
  if (!project) return null;

  const projectUrl = `${siteUrl}/projects/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": project.mobile ? "MobileApplication" : "WebApplication",
    name: project.name,
    headline: project.tagline,
    description: project.tagline,
    url: project.projectUrl || projectUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: project.mobile ? "Android, iOS" : "Web Browser",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_SITE,
    },
    image:
      project.coverImage?.image ||
      project.screenshots?.[0]?.image ||
      `${siteUrl}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
