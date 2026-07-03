import { STATE_DATA } from "./data/stateData";
import { SITE_URL, STATE_SUFFIX } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/legal/dmca", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ];

  const stateRoutes = Object.keys(STATE_DATA).map((slug) => ({
    path: `/${slug}${STATE_SUFFIX}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...stateRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
