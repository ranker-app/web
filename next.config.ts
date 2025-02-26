import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/poll/new",
  //       destination: "/PollNew", // Ajuste conforme o nome real do arquivo da página
  //     },
  //   ];
  // },
};

export default nextConfig;
