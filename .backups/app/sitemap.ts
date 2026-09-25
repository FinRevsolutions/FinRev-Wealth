import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    // Investments
    "/investments",
    "/investments/mutual-funds",
    "/investments/sip",
    "/investments/lumpsum",
    "/investments/bonds",
    "/investments/pms",
    "/investments/aif",
    "/investments/unlisted-pre-ipo",
    // Wealth Solutions
    "/wealth-solutions",
    "/wealth-solutions/goal-based-investing",
    "/wealth-solutions/retirement-planning",
    "/wealth-solutions/child-education",
    "/wealth-solutions/wealth-creation",
    "/wealth-solutions/portfolio-review",
    // Protection
    "/protection",
    "/protection/life-insurance",
    "/protection/term-insurance",
    "/protection/health-insurance",
    "/protection/general-insurance",
    // Tools Hub
    "/tools",
    // Insights
    "/insights",
    "/insights/blog",
    "/insights/mutual-fund-guide",
    "/insights/faq",
    // Client
    "/client/login",
    // Legal
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/regulatory-disclosures",
  ];

  // All 32 financial calculators
  const toolRoutes = TOOLS_REGISTRY.map((tool) => `/tools/${tool.slug}`);

  const allRoutes = [...staticRoutes, ...toolRoutes];
  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "" || route.startsWith("/insights") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/investments") || route.startsWith("/tools") ? 0.8 : 0.6,
  }));
}
