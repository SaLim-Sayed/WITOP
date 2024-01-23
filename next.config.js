/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'lensbox.me',
          protocol: 'https',
        },
        {
          hostname: 'logowik.com',
          protocol: 'https',
        },
        {
          hostname: 'mma.prnewswire.com',
          protocol: 'https',
        },
         
        {
          hostname: 'res.cloudinary.com',
          protocol: 'https',
        },
        // Add more domains if needed
      ],
      },
}

module.exports = nextConfig
