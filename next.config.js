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
                source: '/joinus',
                destination: '/join-us',
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
