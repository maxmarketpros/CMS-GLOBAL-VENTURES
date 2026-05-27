/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cmsglobalventures.com",
  generateRobotsTxt: true,
  outDir: "out",
  trailingSlash: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://cmsglobalventures.com/sitemap.xml"],
  },
  exclude: [],
  transform: async (config, path) => {
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (path.startsWith("/services") || path.startsWith("/areas-served")) priority = 0.9;
    else if (path === "/contact" || path === "/free-consultation") priority = 0.85;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
