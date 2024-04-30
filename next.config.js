/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/meetus',
                destination: '/meet-us',
                permanent: true,
            },
            {
                source: '/joinus',
                destination: '/meet-us',
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
