/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Tên miền bạn muốn cho phép
        port: '', // Để trống nếu không cần cấu hình port
        pathname: '/**', // Cho phép tất cả các đường dẫn
      },
    ],
  },
};

export default nextConfig;
