import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // A single global 404 for the whole app. Required because our root layout
    // lives on a top-level dynamic segment (app/[lang]/layout.tsx), which makes
    // a per-segment not-found.js unreliable — see Next's not-found docs.
    globalNotFound: true,
  },
};

export default nextConfig;
