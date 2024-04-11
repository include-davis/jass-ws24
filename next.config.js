/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/meet-us",
        destination: "/meetus",
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
