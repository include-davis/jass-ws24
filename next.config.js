/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/calendar",
        destination: "/calendar",
        permanent: true,
      },
      {
        source: "/meet-us",
        destination: "/meetus",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/components",
        permanent: true,
      },
      {
        source: "/join-us",
        destination: "/joinus",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      }
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
