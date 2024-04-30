/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/meetus',
                destination: '/meet-us',
                permanent: true,
            },
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true,
            },
        ];
    },
    sassOptions: {
        includePaths: ['./src/styles'],
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};
