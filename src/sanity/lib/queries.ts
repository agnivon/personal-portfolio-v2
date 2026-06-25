import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const PROFILES_QUERY = defineQuery(`*[_type == "profile"]{
            _id,
            fullName,
            headline,
            profileImage { alt, "image": asset->url },
            shortBio,
            location,
            fullBio,
            altBio1,
            altBio2,
            altBio3,
            altBio4,
            email,
            "resumeURL": resumeURL.asset->url,
            socialLinks,
            otherProfileLinks[] { name, link, "logo": logo { alt, "image": asset->url } },
            skills
          }`);

export const PROFILE_COUNT_QUERY = defineQuery(`count(*[_type == "profile"])`);

export const JOBS_QUERY =
  defineQuery(`*[_type == "job" && hidden != true] | order(startDate desc){
          _id,
          name,
          jobTitle,
          "logo": logo.asset->url,
          url,
          description,
          startDate,
          endDate,
        }`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && hidden != true] | order(createdAt desc) {
          _id, 
          name,
          order,
          "slug": slug.current,
          tagline,
          "logo": logo.asset->url,
        }`);

export const PROJECT_BY_SLUG_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
          _id,
          name,
          projectUrl,
          githubUrl,
          "logo": logo.asset->url,
          coverImage { alt, "image": asset->url },
          screenshots[] { alt, "image": asset->url },
          tagline,
          description,
          technologies,
          keywords,
        }`);

export const PROJECTS_V2_QUERY = defineQuery(`*[_type == "project" && hidden != true] | order(createdAt desc){
          _id,
          name,
          order,
          projectUrl,
          githubUrl,
          coverImage { alt, "image": asset->url },
          screenshots[] { alt, "image": asset->url },
          tagline,
          "slug": slug.current,
          "logo": logo.asset->url,
          description,
          technologies,
        }`);

export async function getProfiles() {
  const { data } = await sanityFetch({
    query: PROFILES_QUERY,
  });
  return data;
}

export async function getProfileCount() {
  const { data } = await sanityFetch({ query: PROFILE_COUNT_QUERY });
  return data;
}

export async function getJobs() {
  const { data } = await sanityFetch({
    query: JOBS_QUERY,
  });
  return data;
}

export async function getProjects() {
  const { data } = await sanityFetch({
    query: PROJECTS_V2_QUERY,
  });
  return data;
}

export async function getProjectBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });
  return data;
}
