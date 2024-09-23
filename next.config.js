/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.fjdh1-1.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.besteducationsikar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-media-1.freecodecamp.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "soshace.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freecodecamp.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tenten.vn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "internetingishard.netlify.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reactscript.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "webdesign-trends.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reactjsexample.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nextjs.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
