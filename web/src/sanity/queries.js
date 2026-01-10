import groq from "groq";

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    linkedinUrl,
    "photoUrl": photo.asset->url
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    industry,
    techStack,
    "coverImageUrl": images[0].asset->url
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    industry,
    techStack,
    "coverImageUrl": images[0].asset->url
  }
`;

export const openJobsQuery = groq`
  *[_type == "jobPosting" && status == "open"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    employmentType
  }
`;
