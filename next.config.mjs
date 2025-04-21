/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'raw.githubusercontent.com', // existing one
        'lh3.googleusercontent.com'  // ✅ added for Google profile pics
      ],
    },
  };
  
  export default nextConfig;
  