import type { NextConfig } from "next";

// GitHub Pages repo name — change "ax-landing-page" to match your GitHub repo name
// If your repo is username.github.io (root), set basePath to ""
const repoName = process.env.REPO_NAME ?? "";

const nextConfig: NextConfig = {
  output:   "export",       // Static HTML export
  basePath: repoName ? `/${repoName}` : "",
  images: {
    unoptimized: true,      // Required for static export (no server-side image optimization)
  },
};

export default nextConfig;
