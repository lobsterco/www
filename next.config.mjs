/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    // Trailing-slash dirs + a post-build relativize step (scripts/relativize.mjs)
    // make the same build work at both the custom-domain root and the project
    // subpath (lobsterco.github.io/www/). Next forbids a relative assetPrefix, so
    // the absolute /_next/ refs are rewritten to relative after export.
    trailingSlash: true,
};

export default nextConfig;
