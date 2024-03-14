/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: "/uploads/**"
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: "/uploads/**"
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: "/uploads/**/**"
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: "/uploads/**/**"
            },
            // {
            //     protocol: 'https',
            //     hostname: 'strapi.marabunta.co',
            //     pathname: "/uploads/**"
            // },
        ],
    },
}

module.exports = nextConfig
