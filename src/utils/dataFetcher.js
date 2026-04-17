import {
  fetchProjects,
  fetchPublicUser,
  fetchSkills,
  fetchSocials,
  fetchTimelines,
} from "./api";

export async function fetchAllPortfolioData() {
  const [publicUser, projects, skills, timelines, socials] = await Promise.all([
    fetchPublicUser(),
    fetchProjects(),
    fetchSkills(),
    fetchTimelines(),
    fetchSocials(),
  ]);

  return {
    publicUser,
    projects,
    skills,
    timelines,
    socials,
  };
}

export {
  fetchPublicUser,
  fetchProjects,
  fetchSkills,
  fetchTimelines,
  fetchSocials,
};
