const ADZUNA_APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const ADZUNA_APP_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;

const BASE_URL = "https://api.adzuna.com/v1/api/jobs/in/search";

const normalizeJob = (job) => {
  const text = `${job.title || ""} ${job.description || ""}`.toLowerCase();

  let workMode = "On-site";

  if (text.includes("remote") || text.includes("work from home") || text.includes("wfh")){
    workMode = "Remote";
  } else if (text.includes("hybrid") || text.includes("work from office and home")){
    workMode = "Hybrid";
  }

  return {
    id: `adzuna-${job.id}`,
    title: job.title || "Untitled Position",
    company: job.company?.display_name || "Company Not Specified",
    location: job.location?.display_name || "Location Not Specified",
    stipend: job.salary_min ? `₹${Math.round(job.salary_min).toLocaleString("en-IN")}/month` : "Not specified",
    salaryMin: job.salary_min || 0,
    description: job.description || "No description available.",
    workMode,
    category: job.category?.label || "Other",
    postedDate: job.created || null,
    source: "Adzuna",
    sourceUrl: job.redirect_url || null,
  };
};

export const fetchJobs = async ({
  keyword = "intern",
  location = "India",
  page = 1,
} = {}) => {
  if (ADZUNA_APP_ID === "YOUR_APP_ID" || ADZUNA_APP_KEY === "YOUR_APP_KEY") {
    throw new Error("Please add your Adzuna App ID and App Key in src/services/jobApi.js",);
  }

  const url = new URL(`${BASE_URL}/${page}`);
  url.searchParams.set("app_id", ADZUNA_APP_ID);
  url.searchParams.set("app_key", ADZUNA_APP_KEY);
  url.searchParams.set("results_per_page", "50");
  url.searchParams.set("what", keyword);
  url.searchParams.set("where", location);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Adzuna API error: ${response.status}`);
  }

  const data = await response.json();

  return {
    jobs: (data.results || []).map(normalizeJob),
    total: data.count || 0,
  };
};
