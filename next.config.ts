import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
	// configPath: "source.config.ts", // optional
});

const nextConfig: NextConfig = {
	reactStrictMode: true,
	typedRoutes: true
};

export default withMDX(nextConfig);
