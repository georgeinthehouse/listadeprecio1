/** @type {import('next').NextConfig} */
const nextConfig = {
  version: 2,
  builds: [
    {
      src: "./src/app/page.jsx",
      use: "@vercel/node",
    },
  ],
  async headers() {
    return [
      {
        // matching all API routes
        source: "./src/app/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
